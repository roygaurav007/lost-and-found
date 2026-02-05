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
if (!pr