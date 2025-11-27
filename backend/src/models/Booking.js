const mongoose = require("mongoose");

const BookingSchema = new mongoose.Schema({
  customer: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true
  },

  mover: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Mover",
    required: true
  },

  pickupLocation: { type: String, required: true },
  dropLocation: { type: String, required: true },

  distance: { type: Number, required: true },  // in km
  estimatedCost: { type: Number, required: true },

  status: {
    type: String,
    enum: ["pending", "accepted", "rejected", "completed"],
    default: "pending"
  },

  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("Booking", BookingSchema);
