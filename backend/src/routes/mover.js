const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");
const Mover = require("../models/Mover");

// only movers can create profile
router.post("/", auth, async (req, res) => {
  try {
    if (req.user.role !== "mover") {
      return res.status(403).json({ msg: "Only movers can create business profile" });
    }

    const { name, city, basePrice, pricePerKm } = req.body;

    if (!name || !city || !basePrice || !pricePerKm) {
      return res.status(400).json({ msg: "All required fields must be provided" });
    }

    const mover = await Mover.create({
      owner: req.user._id,
      name,
      city,
      basePrice,
      pricePerKm
    });

    res.json({ msg: "Mover profile created", mover });

  } catch (err) {
    console.log("Mover create error:", err);
    res.status(500).json({ msg: "Server error" });
  }
});


// PUBLIC: Get movers — filter by city if provided
router.get("/", async (req, res) => {
  try {
    const { city } = req.query;

    const query = {};

    if (city) {
      // Case-insensitive match: "del" matches "Delhi"
      query.city = { $regex: city, $options: "i" };
    }

    const movers = await Mover.find(query).sort({ rating: -1 });

    res.json(movers);

  } catch (err) {
    console.log("List movers error:", err);
    res.status(500).json({ msg: "Server error" });
  }
});

// GET single mover by ID
router.get("/:id", async (req, res) => {
  try {
    const mover = await Mover.findById(req.params.id);
    if (!mover) return res.status(404).json({ msg: "Mover not found" });

    res.json(mover);
  } catch (err) {
    res.status(500).json({ msg: "Server Error" });
  }
});

module.exports = router;
