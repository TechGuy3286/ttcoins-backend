const mongoose = require("mongoose");
require("dotenv").config();

console.log("STARTING TEST");

mongoose.connect(process.env.MONGO_URI, {
  serverSelectionTimeoutMS: 5000
})
.then(() => {
  console.log("MONGODB CONNECTED");
  process.exit();
})
.catch((err) => {
  console.log("REAL ERROR:");
  console.log(err);
  process.exit();
});