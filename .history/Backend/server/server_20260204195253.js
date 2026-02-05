const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();

// 🧱 Middleware
// Updated CORS to explicitly allow your frontend port

app.use(express.json()); 

// 🛣️ Routes
// Ensure these files exist in your 'routes' folder
app.use('/api/auth', require('./routes/authRoutes')); 
app.use('/api/items', require('./routes/itemRoutes')); 

// 🔌 Connect to MongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("🔥 MongoDB Connected!"))
  .catch((err) => console.log("❌ DB Connection Error:", err));

// 🏠 Test Route
app.get('/', (req, res) => res.send("FindIt API is running..."));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server spinning on port ${PORT}`));