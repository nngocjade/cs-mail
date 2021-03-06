const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const messageSchema = Schema(
  {
    from: { type: Schema.ObjectId, required: true, ref: "User" },
    to: { type: Schema.ObjectId, required: true, ref: "User" },
    title: { type: String, required: true },
    body: { type: String, required: true },
    status: { type: String, enum: ["seen", "unseen"] },
    isDeleted: false,
  },
  {
    timestamps: true,
  }
);

const Message = mongoose.model("Message", messageSchema);
module.exports = Message;
