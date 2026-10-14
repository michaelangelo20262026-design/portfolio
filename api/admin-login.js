import { createHmac, timingSafeEqual } from "node:crypto";

const SESSION_DURATION = 8 * 60 * 60; // 8 hours

function createSignature(payload, secret) {
  return createHmac("sha256", secret)
    .update(payload)
    .digest("base64url");
}

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
    const adminPassword = process.env.ADMIN_PASSWORD;
    const sessionSecret = process.env.ADMIN_SESSION_SECRET;

    if (!adminPassword || !sessionSecret) {
      return res.status(500).json({
        success: false,
        message: "Server authentication is not configured.",
      });
    }

    const submittedPassword = req.body?.password;

    if (typeof submittedPassword !== "string") {
      return res.status(401).json({
        success: false,
        message: "Invalid login credentials.",
      });
    }

    const submittedBuffer = Buffer.from(submittedPassword);
    const correctBuffer = Buffer.from(adminPassword);

    const passwordIsValid =
      submittedBuffer.length === correctBuffer.length &&
      timingSafeEqual(submittedBuffer, correctBuffer);

    if (!passwordIsValid) {
      return res.status(401).json({
        success: false,
        message: "Invalid login credentials.",
      });
    }

    const expiresAt =
      Math.floor(Date.now() / 1000) + SESSION_DURATION;

    const payload = String(expiresAt);
    const signature = createSignature(payload, sessionSecret);
    const sessionToken = `${payload}.${signature}`;

    res.setHeader(
      "Set-Cookie",
      `portfolio_admin_session=${sessionToken}; HttpOnly; Secure; SameSite=Strict; Path=/; Max-Age=${SESSION_DURATION}`,
    );

    return res.status(200).json({
      success: true,
      message: "Login successful.",
    });
  } catch (error) {
    console.error("Admin login error:", error);

    return res.status(500).json({
      success: false,
      message: "Unable to process login.",
    });
  }
}