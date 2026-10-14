import { getDatabase } from "./db.js";

export async function GET() {
  try {
    const db = await getDatabase();

    await db.command({ ping: 1 });

    return new Response(
      JSON.stringify({
        success: true,
        message: "MongoDB connection is working!",
      }),
      {
        status: 200,
        headers: {
          "Content-Type": "application/json",
        },
      },
    );
  } catch (error) {
    console.error(error);

    return new Response(
      JSON.stringify({
        success: false,
        message: "MongoDB connection failed",
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
