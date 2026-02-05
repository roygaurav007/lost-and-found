require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

// Import your Routes
const authRoutes = require('./routes/auth'); 
const itemRoutes = require('./routes/items');

const app = express();
const PORT = 5000; // Hardcoded to match your VITE_API_URL

// 🟢 RELAXED CORS: Allows any local frontend to talk to this backend
app.use(cors({
    origin: "*", 
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true
}));

app.use(express.json()); // Essential for reading Signup/Login data

console.log("--- SIH 2026 Student Hub Booting ---");

// 🌐 DATABASE CONNECTION
mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log("✅ DATABASE: Connected to MongoDB Atlas!"))
    .catch((err) => {
        console.error("❌ DATABASE ERROR: ", err.message);
        console.log("💡 Tip: Check your .env for quotes or semicolons.");
    });

// 🛣️ LINK THE ROUTES
app.use('/api/auth', authRoutes); // Handles /register and /login
app.use('/api/items', itemRoutes); // Handles reporting, viewing, and claims

// 🧪 QUICK STATUS CHECK: Visit http://localhost:5000 in browser
app.get('/', (req, res) => res.send("Backend is live and relaxed!"));

app.listen(PORT, () => {
    console.log(`🚀 SERVER: Running on http://localhost:${PORT}`);
});