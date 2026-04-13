const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();

app.use(express.json());

// MongoDB connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));

app.get("/", (req, res) => {
  res.send("API is running...");
});

app.listen(5000, () => console.log("Server running on port 5000"));
app.get("/test", async (req, res) => {
  const mongoose = require("mongoose");
  const Test = mongoose.model("Test", { name: String });

  await Test.create({ name: "test data" });

  res.send("Data inserted");
});