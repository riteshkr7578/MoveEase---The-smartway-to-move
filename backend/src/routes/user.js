const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");

// TEST: Get current user's profile
router.get("/me", auth, async (req, res) => {
  res.json({ user: req.user });
});

module.exports = router;
