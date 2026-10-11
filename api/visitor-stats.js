import { getDatabase } from "./db.js";

export async function GET(request) {
  const adminPassword = process.env.ADMIN_PASSWORD;
  const authorization = request.headers.get("authorization");

  if (!adminPassword || authorization !== `Bearer ${adminPassword}`) {
    return new Response(
      JSON.stringify({
        success: false,
        message: "Unauthorized access.",
      }),
      {
        status: 401,
        headers: {
          "Content-Type": "application/json",
        },
      },
    );
  }
  try {
    const db = await getDatabase();
    const collection = db.collection("visitor_events");

    // Count all recorded visits.
    const totalVisits = await collection.countDocuments();

    // Count distinct visitors.
    const uniqueVisitorIds = await collection.distinct("visitorId");

    const uniqueVisitors = uniqueVisitorIds.length;

    // Find visitors who visited more than once.
    const returningVisitors = await collection
      .aggregate([
        {
          $group: {
            _id: "$visitorId",
            visitCount: { $sum: 1 },
          },
        },
        {
          $match: {
            visitCount: { $gt: 1 },
          },
        },
        {
          $count: "count",
        },
      ])
      .toArray();

    const returningVisitorCount = returningVisitors[0]?.count || 0;

    // Group visits by country.
    const countries = await collection
      .aggregate([
        {
          $group: {
            _id: "$country",
            visits: { $sum: 1 },
            visitors: { $addToSet: "$visitorId" },
          },
        },
        {
          $project: {
            _id: 0,
            country: "$_id",
            visits: 1,
            uniqueVisitors: { $size: "$visitors" },
          },
        },
        {
          $sort: {
            visits: -1,
          },
        },
      ])
      .toArray();

    return new Response(
      JSON.stringify({
        success: true,
        statistics: {
          totalVisits,
          uniqueVisitors,
          returningVisitors: returningVisitorCount,
          countries,
        },
      }),
      {
        status: 200,
        headers: {
          "Content-Type": "application/json",
          "Cache-Control": "no-store",
        },
      },
    );
  } catch (error) {
    console.error("Visitor statistics error:", error);

    return new Response(
      JSON.stringify({
        success: false,
        message: "Unable to retrieve visitor statistics.",
      }),
      {
        status: 500,
        headers: {
          "Content-Type": "application/json",
        },
      },
    );
  }
}
