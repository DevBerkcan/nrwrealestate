// app/actions/sendContactEmail.ts
"use server";

import nodemailer from "nodemailer";

interface EmailResult {
  success: boolean;
  message?: string;
}

export async function sendContactEmail(
  formData: FormData
): Promise<EmailResult> {
  try {
    // Get form data
    const name = formData.get("name") as string;
    const company = formData.get("company") as string;
    const email = formData.get("email") as string;
    const phone = formData.get("phone") as string;
    const message = formData.get("message") as string;

    // Create a transporter using SMTP
    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST || "smtp.example.com",
      port: parseInt(process.env.EMAIL_PORT || "587"),
      secure: process.env.EMAIL_SECURE === "true", 
      auth: {
        user: process.env.EMAIL_USER || "your-email@example.com",
        pass: process.env.EMAIL_PASSWORD || "your-password",
      },
    });

    // Set up email data
    const mailOptions = {
      from: process.env.EMAIL_FROM || "Contact Form <no-reply@yourdomain.com>",
      to: process.env.EMAIL_TO || "recipient@example.com", // Where to send the contact form submissions
      replyTo: email, // So you can reply directly to the sender
      subject: `Neue Kontaktanfrage von ${name}`,
      html: `
        <h2>Neue Kontaktanfrage</h2>
        <p><strong>Name:</strong> ${name}</p>
        ${company ? `<p><strong>Firma:</strong> ${company}</p>` : ""}
        <p><strong>Email:</strong> ${email}</p>
        ${phone ? `<p><strong>Telefon:</strong> ${phone}</p>` : ""}
        <p><strong>Nachricht:</strong></p>
        <p>${message.replace(/\n/g, "<br>")}</p>
      `,
      text: `
        Neue Kontaktanfrage
        
        Name: ${name}
        ${company ? `Firma: ${company}\n` : ""}
        Email: ${email}
        ${phone ? `Telefon: ${phone}\n` : ""}
        Nachricht:
        ${message}
      `,
    };

    // Send the email
    const info = await transporter.sendMail(mailOptions);
    console.log("Message sent: %s", info.messageId);

    return {
      success: true,
    };
  } catch (error) {
    console.error("Error sending email:", error);
    return {
      success: false,
      message:
        "Fehler beim Senden der E-Mail. Bitte versuchen Sie es später erneut.",
    };
  }
}
