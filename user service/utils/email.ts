// src/modules/email/email.ts
import nodemailer from "nodemailer";
import dotenv from "dotenv";
import { SendEmailType } from "./enum";

dotenv.config();

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_PASS,
  },
});

export async function sendEmail(to: string, subject: string, type: SendEmailType, payload?: Record<string, any>) {
  let html = "";
  let text = "";

  switch (type) {
    case SendEmailType.FORGOT_PASSWORD:
      html = `
        <div style="font-family: Arial, sans-serif; padding: 20px;">
          <h2>Reset Your Password</h2>
          <p>Assalomu alaykum, siz parolingizni tiklashni so‘radingiz.</p>
          <p>Quyidagi havolani bosing:</p>
          <a href="${payload?.resetLink}" style="color: #1a73e8;">Reset Password</a>
          <p>Agar bu so‘rov siz tomoningizdan yuborilmagan bo‘lsa, bu xabarni e’tiborsiz qoldiring.</p>
        </div>
      `;
      text = `Parolingizni tiklash uchun quyidagi havolani bosing: ${payload?.resetLink}`;
      break;

    case SendEmailType.WELCOME:
      html = `<h3>Welcome to our platform!</h3><p>${payload?.username}, xush kelibsiz!</p>`;
      break;

    default:
      html = `<p>${payload?.message || "No message defined"}</p>`;
  }
  console.log('transporter', transporter)

  await transporter.sendMail({
    from: process.env.MAIL_USER,
    to,
    subject,
    text,
    html,
  });
}
