require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors'); // 1. Add this

const app = express();
const PORT = process.env.PORT || 5000;

// 2. Middleware (CRITICAL for React to work)
app.use(cors()); 
app.use(express.json()); // Allows your app to read the data from your forms

// ... your connection logic ...

// 3. Import your Routes (Once you create them)
// app.use('/api/items', require('./routes/itemRoutes'));
// app.use('/api/auth', require('./routes/authRoutes'));

app.listen(PORT, () => {
    console.log(`🚀 SERVER: Running on http://localhost:${PORT}`);
});