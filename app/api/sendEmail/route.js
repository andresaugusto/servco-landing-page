import nodemailer from "nodemailer"
import { NextResponse } from "next/server"

export async function POST(req, res) {
  try {
    const { name, email, message } = await req.json()
    
    // Create transporter using SMTP details
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: process.env.SMTP_PORT,
      secure: false,
      auth: {
        user: process.env.SENDER_EMAIL,
        pass: process.env.SENDER_PASSWORD,
      },
    })

    // Create an email message
    const mailOptions = {
      from: process.env.SENDER_EMAIL,
      to: process.env.RECEIVER_EMAIL,
      subject: process.env.EMAIL_SUBJECT,
      text: `
        Name: ${name}
        Email: ${email}
        Message: ${message}
      `,
    };

    // Send the email
    const info = await transporter.sendMail(mailOptions);

    console.log("Email sent:", info.response)
    return NextResponse.json({ success: true, message: process.env.EMAIL_SENT_CONFIRMATION});
  } catch (error) {
    console.error("Error:", error);
    return Response.json(
      {
        success: false,
        message: process.env.EMAIL_NOT_SENT_ERROR_MESSAGE
      },
      { status: 500 }
    );
  }
}