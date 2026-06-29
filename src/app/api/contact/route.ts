import { Resend } from "resend";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const resend = new Resend(process.env.RESEND_API_KEY || "re_dummy");
    const { name, email, company, phone, tier, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json({ error: "Missing fields" }, { status: 400 });
    }

    await resend.emails.send({
      from: "onboarding@resend.dev",
      to: "ascendiasolutions@proton.me",
      subject: `New Inquiry [${tier}] from Ascendia Website`,
      replyTo: email,
      text: `
Name: ${name}
Email: ${email}
Company: ${company || 'Not provided'}
Phone: ${phone || 'Not provided'}
Tier: ${tier}

Message:
${message}
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json({ error: "Email failed to send" }, { status: 500 });
  }
}