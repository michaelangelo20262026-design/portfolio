import { createHmac, timingSafeEqual } from "node:crypto";
import { getDatabase } from "./db.js";

function createSignature(payload, secret) {
  return createHmac("sha256", secret).update(payload).digest("base64url");
}

function verifySession(req) {
  const sessionSecret = process.env.ADMIN_SESSION_SECRET;

  if (!sessionSecret) {
    return false;
  }

  const cookieHeader = req.headers.cookie || "";

  const sessionCookie = cookieHeader
    .split(";")
    .map((cookie) => cookie.trim())
    .find((cookie) => cookie.startsWith("portfolio_admin_session="));

  if (!sessionCookie) {
    return false;
  }

  const sessionToken = sessionCookie.substring(
    "portfolio_admin_session=".length,
  );

  const separatorIndex = sessionToken.indexOf(".");

  if (separatorIndex === -1) {
    return false;
  }

  const payload = sessionToken.substring(0, separatorIndex);
  const submittedSignature = sessionToken.substring(separatorIndex + 1);

  if (!payload || !submittedSignature) {
    return false;
  }

  const expiresAt = Number(payload);

  if (
    !Number.isSafeInteger(expiresAt) ||
    expiresAt <= Math.floor(Date.now() / 1000)
  ) {
    return false;
  }

  const expectedSignature = createSignature(payload, sessionSecret);

  const submittedBuffer = Buffer.from(submittedSignature);
  const expectedBuffer = Buffer.from(expectedSignature);

  return (
    submittedBuffer.length === expectedBuffer.length &&
    timingSafeEqual(submittedBuffer, expectedBuffer)
  );
}

export default async function handler(req, res) {
  res.setHeader("Cache-Control", "no-store");

  if (req.method !== "GET") {
    res.setHeader("Allow", "GET");

    return res.status(405).json({
      success: false,
      message: "Method not allowed.",
    });
  }

  if (!verifySession(req)) {
    return res.status(401).json({
      success: false,
      message: "Unauthorized access. Please log in.",
    });
  }

  try {
    const db = await getDatabase();
    const collection = db.collection("visitor_events");

    // Count all recorded visits.
    const totalVisits = await collection.countDocuments();

    // Count distinct visitors.
    const uniqueVisitorIds = await collection.distinct("visitorId");

    const uniqueVisitors = uniqueVisitorIds.length;

    // Count visitors with more than one recorded event.
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

    return res.status(200).json({
      success: true,
      statistics: {
        totalVisits,
        uniqueVisitors,
        returningVisitors: returningVisitorCount,
        countries,
      },
    });
  } catch (error) {
    console.error("Visitor statistics error:", error);

    return res.status(500).json({
      success: false,
      message: "Unable to retrieve visitor statistics.",
    });
  }
}
