const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const authRoutes = require("./routes/auth");

const app = express();


// Middleware
app.use(cors());
app.use(express.json());


// Routes
app.use("/api/auth", authRoutes);


// Root Route
app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: "TTCoins Backend Running Successfully"
  });
});


// MongoDB Connection
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB Connected Successfully");
  })
  .catch((error) => {
    console.log("MongoDB Connection Error");
    console.log(error);
  });


// Port
const PORT = process.env.PORT || 8080;


// Server
app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server running on port ${PORT}`);
});