export function GET(request) {
  return new Response(
    JSON.stringify({
      message: "Vercel API is working!",
    }),
    {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    },
  );
}
