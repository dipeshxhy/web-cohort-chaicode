import nodemailer from "nodemailer";

const createTransporter = () => {
  return nodemailer.createTransport({
    host: process.env.MAILTRAP_HOST,
    port: process.env.MAILTRAP_PORT,
    secure: false, // true for port 465, false for other ports
    auth: {
      user: process.env.MAILTRAP_USER,
      pass: process.env.MAILTRAP_PASSWORD,
    },
  });
};

const baseMailOptions = {
  from: process.env.MAILTRAP_SENDERMAIL, // sender address
};

async function sendVerificationEmail({
  to,
  token,
  subject = "Verify Your Account",
}) {
  const transporter = createTransporter();
  const link = `${process.env.BASE_URL}/api/v1/users/verify/${token}`;

  return transporter.sendMail({
    ...baseMailOptions,
    to,
    subject,
    html: `
      <h2>Account Verification</h2>
      <p>Please click on the link below to verify your account:</p>
      <p><a href="${link}" style="padding: 10px 15px; background-color: #4CAF50; color: white; text-decoration: none; border-radius: 4px;">Verify Account</a></p>
      <p>If the button doesn't work, copy and paste this link into your browser:</p>
      <p>${link}</p>
    `,
  });
}

export async function sendResetPasswordEmail({
  to,
  token,
  subject = "Reset Your Password",
}) {
  const transporter = createTransporter();

  // This should point to your frontend reset password page, not the API endpoint
  const link = `${process.env.BASE_URL}/api/v1/users/resetPassword/${token}`;

  return transporter.sendMail({
    ...baseMailOptions,
    to,
    subject,
    html: `
      <h2>Password Reset</h2>
      <p>We received a request to reset your password.</p>
      <p>Please click on the link below to create a new password:</p>
      <p><a href="${link}" style="padding: 10px 15px; background-color: #2196F3; color: white; text-decoration: none; border-radius: 4px;">Reset Password</a></p>
      <p>If the button doesn't work, copy and paste this link into your browser:</p>
      <p>${link}</p>
      <p>This link will expire in 24 hours.</p>
      <p>If you didn't request this password reset, please ignore this email.</p>
    `,
  });
}
export default sendVerificationEmail;
