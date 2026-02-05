const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();

// 🧱 Middleware
app.use(cors()); // Allows your React app to talk to this server
app.use(express.json()); // Allows the server to read JSON data from your forms

// 🔌 Connect to MongoDB Atlas
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("🔥 MongoDB Connected!"))
  .catch((err) => console.log("❌ DB Connection Error:", err));

// 🏠 Basic Route for testing
app.get('/', (req, res) => res.send("FindIt API is running..."));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server spinning on port ${PORT}`));