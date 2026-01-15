import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const data = await req.json();
  // Send email using a service like Resend, SendGrid, or SMTP
  // For demo, just log and return success
  console.log("Confidential Inquiry Received:", data);
  // TODO: Integrate with email service to send to executive-director@ncgtp.com
  return NextResponse.json({ success: true });
}
