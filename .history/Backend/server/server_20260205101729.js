require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const PORT = 5000; // Force it to 5000 to match your frontend .env

// 🟢 RELAXED MODE: This kills the 'NetworkError'
app.use(cors({
    origin: "*", 
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true
}));

app.use(express.json()); 

// 🌐 DATABASE CONNECTION
mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log("✅ DATABASE: Connected to MongoDB Atlas Cloud!"))
    .catch((err) => console.error("❌ DATABASE ERROR:", err.message));

// 🛣️ TEST ROUTE: Open http://localhost:5000 in your browser to check
app.get('/', (req, res) => res.send("Backend is running on Port 5000 and ready for SIH!"));

app.listen(PORT, () => {
    console.log(`🚀 SERVER: Running on http://localhost:${PORT}`);
});