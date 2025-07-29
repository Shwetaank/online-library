import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

// This will notify YOU whenever someone subscribes
export async function POST(req: Request) {
  const { email } = await req.json();

  if (!email) {
    return NextResponse.json({ error: "Email is required" }, { status: 400 });
  }

  try {
    await resend.emails.send({
      from: "LibraryMS <no-reply@yourdomain.com>",
      to: "spmorey87@gmail.com", // <-- YOUR email
      subject: "New LibraryMS Subscription",
      html: `<p>A new user has subscribed to the newsletter:</p><p><strong>Email:</strong> ${email}</p>`,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Resend Error:", error);
    return NextResponse.json(
      { error: "Failed to send email" },
      { status: 500 }
    );
  }
}
