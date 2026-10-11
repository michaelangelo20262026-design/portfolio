import { getDatabase } from "./db.js";

export async function POST(request) {
  try {
    const body = await request.json();
    const { visitorId, page } = body;

    if (
      typeof visitorId !== "string" ||
      visitorId.length < 10 ||
      visitorId.length > 100
    ) {
      return new Response(
        JSON.stringify({
          success: false,
          message: "A valid visitor ID is required.",
        }),
        {
          status: 400,
          headers: {
            "Content-Type": "application/json",
          },
        },
      );
    }

    const pagePath =
      typeof page === "string" && page.startsWith("/")
        ? page.slice(0, 500)
        : "/";

    const country = request.headers.get("x-vercel-ip-country") || "Unknown";

    const db = await getDatabase();

    await db.collection("visitor_events").insertOne({
      visitorId,
      page: pagePath,
      country,
      visitedAt: new Date(),
    });

    return new Response(
      JSON.stringify({
        success: true,
        message: "Visit recorded successfully.",
      }),
      {
        status: 201,
        headers: {
          "Content-Type": "application/json",
        },
      },
    );
  } catch (error) {
    console.error("Visitor tracking error:", error);

    return new Response(
      JSON.stringify({
        success: false,
        message: "Unable to record this visit.",
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
