import { getDatabase } from "./db.js";

export default async function handler(req, res) {
  res.setHeader("Cache-Control", "no-store");

  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");

    return res.status(405).json({
      success: false,
      message: "Method not allowed.",
    });
  }

  try {
    const body = req.body || {};
    const { visitorId, page } = body;

    if (
      typeof visitorId !== "string" ||
      visitorId.length < 10 ||
      visitorId.length > 100
    ) {
      return res.status(400).json({
        success: false,
        message: "A valid visitor ID is required.",
      });
    }

    const pagePath =
      typeof page === "string" && page.startsWith("/")
        ? page.slice(0, 500)
        : "/";

    const countryHeader = req.headers["x-vercel-ip-country"];

    const country =
      typeof countryHeader === "string" && countryHeader
        ? countryHeader
        : "Unknown";

    const db = await getDatabase();

    await db.collection("visitor_events").insertOne({
      visitorId,
      page: pagePath,
      country,
      visitedAt: new Date(),
    });

    return res.status(201).json({
      success: true,
      message: "Visit recorded successfully.",
    });
  } catch (error) {
    console.error("Visitor tracking error:", error);

    return res.status(500).json({
      success: false,
      message: "Unable to record this visit.",
    });
  }
}
