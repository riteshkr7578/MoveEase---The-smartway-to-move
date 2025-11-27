require("dotenv").config();
const app = require('./app.js');
const connectDB = require("./config/db");
const googleRoutes = require("./routes/google");

connectDB();

const PORT = process.env.PORT || 5000;

console.log("Loaded Google API Key?", !!process.env.GOOGLE_MAPS_API_KEY);

app.use("/api/google", googleRoutes);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
