const nodemailer = require("nodemailer");

require("dotenv").config();

const sendEmail = async (options) => {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.USER_EMAIL,
      pass: process.env.USER_PASSWORD,
    },
  });

  await transporter.sendMail({
    from: {
      name: "MERN Contact Form",
      address: process.env.USER_EMAIL,
    },
    to: options.email,
    subject: options.subject,
    text: options.message,
    html: `
        <h2>New Message from ${options.firstName} ${options.lastName}</h2>
        <p><strong>Phone number:</strong> ${options.phoneNumber}</p>
        <p><strong>Email:</strong> ${options.email}</p>
        <p><strong>Subject:</strong> ${options.subject}</p>
        <p><strong>Message:</strong></p>
        <p>${options.message}</p>
      `,
  });
};

module.exports = sendEmail;
