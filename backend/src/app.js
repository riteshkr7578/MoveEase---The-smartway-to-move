const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const moverRoutes = require("./routes/mover");
const bookingRoutes = require("./routes/booking");

const app = express();

// middlewares
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

// ROUTES
const authRoutes = require("./routes/auth");
const userRoutes = require("./routes/user");
app.use("/api/movers", moverRoutes);
app.use("/api/bookings", bookingRoutes);

app.use("/api/auth", authRoutes);
app.use("/api/user", userRoutes);

// test root
app.get("/", (req, res) => {
  res.json({ msg: "server ok" });
});

module.exports = app;
