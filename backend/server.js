const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// ROOT ROUTE
app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: "TTCoins Backend Running Successfully"
  });
});

// MongoDB connection
mongoose.connect(process.env.MONGO_URI)
.then(() => {
  console.log("MongoDB Connected Successfully");
})
.catch((err) => {
  console.log("MongoDB Error:");
  console.log(err);
});

// PORT
const PORT = process.env.PORT || 8080;

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server running on port ${PORT}`);
});