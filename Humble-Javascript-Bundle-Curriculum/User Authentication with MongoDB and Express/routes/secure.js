const express = require("express");
const router = express.Router();

const ChatModel = require("../models/ChatModel");

router.post("/chat", async (request, response) => {
  if (!request.body || !request.body.message) {
    response.status(400).json({ message: "Invalid body", status: 400 });
  } else {
    const { message } = request.body;
    const { email } = request.user;
    const chat = await ChatModel.create({ email, message });
    response.status(200).json({
      chat,
      message: "Message sent",
      status: 200,
    });
  }
});

module.exports = router;
