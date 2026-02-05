require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

// 1. MUST BE FIRST: CORS kills the 'NetworkError'
app.use(cors({
    origin: "http://localhost:5173", // Your React address
    credentials: true
}));

app.use(express.json()); // Essential for reading Signup/Login data

console.log("--- SIH 2026 Boot Sequence ---");

// 2. Database Connection Logic
if (!process.env.MONGO_URI) {
    console.error("❌ ERROR: MONGO_URI is missing from your .env file!");
} else {
    mongoose.connect(process.env.MONGO_URI)
        .then(() => console.log("✅ DATABASE: Connected to MongoDB Atlas Cloud!"))
        .catch((err) => console.error("❌ DATABASE ERROR:", err.message));
}

// 3. Test Route: Open http://localhost:5000/api/test in your browser
app.get('/api/test', (req, res) => {
    res.json({ message: "Backend is fully reachable and CORS is active!" });
});

// 4. (Optional) Link your actual routes here later
// app.use('/api/auth', require('./routes/authRoutes'));

app.listen(PORT, () => {
    console.log(`🚀 SERVER: Running on http://localhost:${PORT}`);
});