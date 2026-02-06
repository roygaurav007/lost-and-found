// // // require('dotenv').config();
// // // const express = require('express');
// // // const mongoose = require('mongoose');
// // // const cors = require('cors');

// // // // ✅ FIXED: These now match your filenames in image_b34afa.png
// // // const authRoutes = require('./routes/authRoutes'); 
// // // const itemRoutes = require('./routes/itemRoutes');

// // // const app = express();
// // // const PORT = 5000; // Hardcoded to match your VITE_API_URL

// // // // 🟢 RELAXED CORS: Allows your React app (5173) to bypass Network Errors
// // // app.use(cors({
// // //     origin: "*", 
// // //     methods: ["GET", "POST", "PUT", "DELETE"],
// // //     credentials: true
// // // }));

// // // app.use(express.json()); // Essential for reading Signup/Login data

// // // console.log("--- SIH 2026 Student Hub Booting ---");

// // // // 🌐 DATABASE CONNECTION
// // // mongoose.connect(process.env.MONGO_URI)
// // //     .then(() => console.log("✅ DATABASE: Connected to MongoDB Atlas!"))
// // //     .catch((err) => {
// // //         console.error("❌ DATABASE ERROR: ", err.message);
// // //         console.log("💡 Tip: Check your .env for quotes or semicolons.");
// // //     });

// // // // 🛣️ LINK THE ROUTES
// // // app.use('/api/auth', authRoutes); // Handles /register and /login
// // // app.use('/api/items', itemRoutes); // Handles reporting, viewing, and claims

// // // // 🧪 QUICK STATUS CHECK: Visit http://localhost:5000 in browser
// // // app.get('/', (req, res) => res.send("Backend is live and relaxed!"));

// // // app.listen(PORT, () => {
// // //     console.log(`🚀 SERVER: Running on http://localhost:${PORT}`);
// // // });
// // require('dotenv').config();
// // const express = require('express');
// // const mongoose = require('mongoose');
// // const cors = require('cors');

// // const authRoutes = require('./routes/authRoutes');
// // const itemRoutes = require('./routes/itemRoutes');

// // const app = express();
// // const PORT = 5000;

// // app.use(cors({
// //   origin: "*",
// //   methods: ["GET", "POST", "PUT", "DELETE"],
// //   credentials: true
// // }));

// // app.use(express.json());

// // console.log("--- SIH 2026 Student Hub Booting ---");

// // // MongoDB
// // mongoose.connect(process.env.MONGO_URI)
// //   .then(() => console.log("✅ DATABASE: Connected to MongoDB Atlas!"))
// //   .catch(err => console.error("❌ DATABASE ERROR:", err.message));

// // // Routes
// // app.use('/api/auth', authRoutes);
// // app.use('/api/items', itemRoutes);

// // // Health check
// // app.get('/', (req, res) => {
// //   res.json({ message: "Backend is live and relaxed!" });
// // });

// // // ❗ IMPORTANT: 404 JSON handler
// // app.use((req, res) => {
// //   res.status(404).json({ message: "API route not found" });
// // });

// // app.listen(PORT, () => {
// //   console.log(`🚀 SERVER: Running on http://localhost:${PORT}`);
// // });
// require('dotenv').config();
// const express = require('express');
// const mongoose = require('mongoose');
// const cors = require('cors');

// const authRoutes = require('./routes/authRoutes');
// const itemRoutes = require('./routes/itemRoutes');

// const app = express();
// const PORT = 5000;

// app.use(cors({
//   origin: "*",
//   methods: ["GET", "POST", "PUT", "DELETE"],
//   credentials: true
// }));

// app.use(express.json()); // VERY IMPORTANT

// console.log("--- SIH 2026 Student Hub Booting ---");

// // MongoDB
// mongoose.connect(process.env.MONGO_URI)
//   .then(() => console.log("✅ DATABASE: Connected to MongoDB Atlas!"))
//   .catch(err => console.error("❌ DATABASE ERROR:", err.message));

// // Routes
// app.use('/api/auth', authRoutes);
// app.use('/api/items', itemRoutes);

// // Health check
// app.get('/', (req, res) => {
//   res.json({ message: "Backend is live and relaxed!" });
// });

// // ❗ Always return JSON (NO EMPTY RESPONSE)
// app.use((req, res) => {
//   res.status(404).json({ message: "API route not found" });
// });

// app.listen(PORT, () => {
//   console.log(`🚀 SERVER: Running on http://localhost:${PORT}`);
// });
require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const authRoutes = require('./routes/authRoutes');

const app = express();
const PORT = 5000;

app.use(cors({
  origin: 'http://localhost:5173',
  credentials: true
}));

app.use(express.json());

console.log('🚀 Backend starting...');

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('✅ MongoDB connected'))
  .catch(err => console.error('❌ MongoDB error:', err));

app.get('/', (req, res) => {
  res.json({ message: 'Backend working' });
});

app.use('/api/auth', authRoutes);

app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});
