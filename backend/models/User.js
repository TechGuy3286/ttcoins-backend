const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true
    },

    email: {
      type: String,
      required: true,
      unique: true
    },

    phone: {
      type: String,
      required: true
    },

    password: {
      type: String,
      required: true
    },

    coins: {
      type: Number,
      default: 0
    },

    role: {
      type: String,
      default: "user"
    },

    status: {
      type: String,
      default: "active"
    }
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model("User", userSchema);