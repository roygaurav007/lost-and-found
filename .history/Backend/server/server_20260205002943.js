require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 5000;

console.log("--- Server Starting ---");

// 1. Check if the environment variable even exists
if (!process.env.MONGO_URI) {
    console.error("❌ ERROR: MONGO_URI is missing from your .env file!");
} else {
    console.log("✅ .env file loaded successfully.");
}

// 2. Attempt Connection without crashing the app
mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log("✅ DATABASE: Connected to MongoDB Atlas!"))
    .catch((err) => {
        console.error("❌ DATABASE ERROR: ", err.message);
        console.log("💡 Tip: Check your IP Whitelist in Atlas and your DNS settings.");
    });

app.get('/', (req, res) => res.send("Backend is alive!"));

app.listen(PORT, () => {
    console.log(`🚀 SERVER: Running on http://localhost:${PORT}`);
});