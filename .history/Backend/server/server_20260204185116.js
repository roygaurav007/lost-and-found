const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();

// 🧱 Middleware
app.use(cors()); 
app.use(express.json()); 

// 🛣️ Routes
app.use('/api/auth', require('./routes/authRoutes')); // 🆕 ADD THIS: For Login/Signup
app.use('/api/items', require('./routes/itemRoutes')); // For Lost/Found items

// 🔌 Connect to MongoDB Atlas
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("🔥 MongoDB Connected!"))
  .catch((err) => console.log("❌ DB Connection Error:", err));

app.get('/', (req, res) => res.send("FindIt API is running..."));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server spinning on port ${PORT}`));