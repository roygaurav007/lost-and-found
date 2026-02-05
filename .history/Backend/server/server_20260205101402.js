require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

// 🟢 RELAXED RULES: Allows any local frontend to talk to this backend
app.use(cors({
    origin: "*", 
    credentials: true
}));

app.use(express.json()); // Essential for reading data from your forms

console.log("--- SIH 2026 Boot Sequence ---");

// 🌐 CONNECT TO CLOUD: Attempting to reach your Mumbai Cluster0
mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log("✅ DATABASE: Connected to MongoDB Atlas!"))
    .catch((err) => {
        console.error("❌ DATABASE ERROR: ", err.message);
        console.log("💡 Tip: Ensure your Atlas Network Access is set to 0.0.0.0/0");
    });

// 🛣️ TEST ROUTE: Visit http://localhost:5000/api/test to verify
app.get('/api/test', (req, res) => res.json({ status: "Backend is reachable and relaxed!" }));

app.listen(PORT, () => {
    console.log(`🚀 SERVER: Running on http://localhost:${PORT}`);
});