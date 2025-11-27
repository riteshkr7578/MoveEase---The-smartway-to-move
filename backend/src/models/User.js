const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },

  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
  },

  password: {
    type: String,
    required: true,
    select: false, // don't send password in queries unless requested
  },

role: {
  type: String,
  enum: ["customer", "mover"],
  default: "customer"
},

  createdAt: {
    type: Date,
    default: Date.now,
  }
});

module.exports = mongoose.model("User", UserSchema);
