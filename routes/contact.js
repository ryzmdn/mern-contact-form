const express = require("express");
const router = express.Router();
const Message = require("../models/Message");
const sendEmail = require("../utils/sendEmail");

router.post("/", async (req, res) => {
  try {
    const { firstName, lastName, email, phoneNumber, subject, message, agree } =
      req.body;

    const newMessage = new Message({
      firstName,
      lastName,
      email,
      phoneNumber,
      subject,
      message,
      agree,
    });
    await newMessage.save();

    await sendEmail({
      firstName,
      lastName,
      email,
      phoneNumber,
      subject,
      message,
      agree,
    });

    res
      .status(200)
      .json({ success: true, message: "Message sent successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Failed to send message" });
  }
});

module.exports = router;
