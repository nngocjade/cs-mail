const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: { type: String, enum: ["user", "admin"] },
    isDeleted: false,
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);
module.exports = User;
