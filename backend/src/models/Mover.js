const mongoose = require("mongoose");

const MoverSchema = new mongoose.Schema({
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true
  },

  name: { type: String, required: true }, // Mover company name
  city: { type: String, required: true }, // Main city / base location

  basePrice: { type: Number, required: true }, // minimum base price
  pricePerKm: { type: Number, required: true }, // price per kilometer

  rating: { type: Number, default: 4.5 },
  totalReviews: { type: Number, default: 0 },

  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Mover", MoverSchema);
