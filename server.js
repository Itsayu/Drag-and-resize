// server.js (Express.js backend)

const express = require("express");
const mongoose = require("mongoose");

const app = express();

// Connect to MongoDB
mongoose.connect("mongodb+srv://ayushkr9:ayush@cluster0.8fwidfk.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Define schema for data
const dataSchema = new mongoose.Schema({
  name: String,
  age: Number,
});

const Data = mongoose.model("Data", dataSchema);

// Add data route
app.post("/api/add", async (req, res) => {
  const { name, age } = req.body;
  try {
    const newData = await Data.create({ name, age });
    res.json(newData);
  } catch (error) {
    res.status(500).json({ message: "Error adding data", error });
  }
});

// Update data route
app.put("/api/update/:id", async (req, res) => {
  const { id } = req.params;
  const { name, age } = req.body;
  try {
    const updatedData = await Data.findByIdAndUpdate(id, { name, age }, { new: true });
    res.json(updatedData);
  } catch (error) {
    res.status(500).json({ message: "Error updating data", error });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
