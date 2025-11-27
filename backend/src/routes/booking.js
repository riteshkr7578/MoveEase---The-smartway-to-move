// backend/src/routes/booking.js
const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");

const Booking = require("../models/Booking");
const Mover = require("../models/Mover");

/**
 * ----------------------------------------
 * 1) CREATE BOOKING (Customer Only)
 * ----------------------------------------
 */
router.post("/", auth, async (req, res) => {
  try {
    if (req.user.role !== "customer") {
      return res.status(403).json({ msg: "Only customers can book movers" });
    }

    const { moverId, pickupLocation, dropLocation, distance } = req.body;

    if (!moverId || !pickupLocation || !dropLocation || !distance) {
      return res.status(400).json({ msg: "Missing required fields" });
    }

    const mover = await Mover.findById(moverId);
    if (!mover) {
      return res.status(404).json({ msg: "Mover not found" });
    }

    // cost estimation
    const estimatedCost = mover.basePrice + distance * mover.pricePerKm;

    const booking = await Booking.create({
      customer: req.user._id,
      mover: moverId,
      pickupLocation,
      dropLocation,
      distance,
      estimatedCost,
      status: "pending"
    });

    res.json({
      msg: "Booking created",
      booking
    });

  } catch (err) {
    console.log("Booking create error:", err);
    res.status(500).json({ msg: "Server error" });
  }
});


/**
 * ----------------------------------------
 * 2) GET ALL BOOKINGS (Customer & Mover)
 * ----------------------------------------
 */
router.get("/", auth, async (req, res) => {
  try {
    let bookings;

    if (req.user.role === "customer") {
      // Customer sees only his own bookings
      bookings = await Booking.find({ customer: req.user._id })
        .populate("mover")
        .populate("customer", "name email");
    } else {
      // mover sees bookings for HIS business
      bookings = await Booking.find()
        .populate("mover")
        .populate("customer", "name email");

      bookings = bookings.filter(
        (b) => String(b.mover.owner) === String(req.user._id)
      );
    }

    res.json(bookings);

  } catch (err) {
    console.log("Booking list error:", err);
    res.status(500).json({ msg: "Server error" });
  }
});

// Cancel booking
router.put("/:id/cancel", auth, async (req, res) => {
  try {
    if (req.user.role !== "customer") {
      return res.status(403).json({ msg: "Only customers can cancel bookings" });
    }

    const booking = await Booking.findById(req.params.id).populate("customer");

    if (!booking) return res.status(404).json({ msg: "Booking not found" });

    if (String(booking.customer._id) !== String(req.user._id)) {
      return res.status(403).json({ msg: "You can cancel only your own bookings" });
    }

    if (booking.status !== "pending") {
      return res.status(400).json({ msg: "Booking cannot be canceled now" });
    }

    booking.status = "cancelled";
    await booking.save();

    return res.json({ msg: "Booking cancelled successfully!", booking });

  } catch (err) {
    console.log("Booking cancel error:", err);
    return res.status(500).json({ msg: "Server error" });
  }
});


/**
 * ----------------------------------------
 * 3) GET SINGLE BOOKING BY ID
 * ----------------------------------------
 */
router.get("/:id", auth, async (req, res) => {
  try {
    const booking = await Booking.findById(req.params.id)
      .populate("mover")
      .populate("customer", "_id name email role");

    if (!booking) {
      return res.status(404).json({ msg: "Booking not found" });
    }

    // Access control:
    const isCustomer = String(booking.customer._id) === String(req.user._id);
    const isMover = String(booking.mover.owner) === String(req.user._id);

    if (!isCustomer && !isMover) {
      return res.status(403).json({ msg: "Permission denied" });
    }

    res.json(booking);

  } catch (err) {
    console.log("Booking get error:", err);
    res.status(500).json({ msg: "Server error" });
  }
});


/**
 * ----------------------------------------
 * 4) MOVER ACCEPT / REJECT BOOKING
 * ----------------------------------------
 */
router.put("/:id/status", auth, async (req, res) => {
  try {
    const { status } = req.body;

    if (req.user.role !== "mover") {
      return res.status(403).json({ msg: "Only movers can update booking status" });
    }

    if (!["pending", "accepted", "rejected", "completed"].includes(status)) {
      return res.status(400).json({ msg: "Invalid status" });
    }

    const booking = await Booking.findById(req.params.id).populate("mover");

    if (!booking) {
      return res.status(404).json({ msg: "Booking not found" });
    }

    // ensure logged-in mover owns this business
    if (String(booking.mover.owner) !== String(req.user._id)) {
      return res.status(403).json({ msg: "Not allowed" });
    }

    booking.status = status;
    await booking.save();

    res.json({ msg: "Status updated", booking });

  } catch (err) {
    console.log("Booking update error:", err);
    res.status(500).json({ msg: "Server error" });
  }
});




module.exports = router;
