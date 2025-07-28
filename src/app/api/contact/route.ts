import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const { name, email, subject, category, message } = body;

    if (!name || !email || !subject || !category || !message) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }

    const response = await resend.emails.send({
      from: "Online-Library From <onboarding@resend.dev>",
      to: "spmorey87@gmail.com", // 👈 Your receiving email
      subject: `[${category.toUpperCase()}] ${subject}`,
      replyTo: email, // ✅ Correct key
      html: `
        <div>
          <h2>📬 New Message from ${name}</h2>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Category:</strong> ${category}</p>
          <p><strong>Subject:</strong> ${subject}</p>
          <p><strong>Message:</strong><br>${message.replace(/\n/g, "<br>")}</p>
        </div>
      `,
    });

    return NextResponse.json({ success: true, data: response });
  } catch (error) {
    console.error("Email send error:", error);
    return NextResponse.json(
      { error: "Email failed to send" },
      { status: 500 }
    );
  }
}
