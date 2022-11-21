const mongoose = require("mongoose");

const { Schema } = mongoose;

const ChatSchema = new Schema({
  email: {
    type: String,
    require: true,
    unique: true,
  },
  message: {
    type: String,
    require: true,
  },
});

const ChatModel = mongoose.model("chat", ChatSchema);

module.exports = ChatModel;
