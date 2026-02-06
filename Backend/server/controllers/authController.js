// // // // const User = require('../models/User');
// // // // const bcrypt = require('bcryptjs');
// // // // const jwt = require('jsonwebtoken');

// // // // // 🔐 REGISTER
// // // // exports.register = async (req, res) => {
// // // //   try {
// // // //     const { email, password, role } = req.body;

// // // //     if (!email || !password) {
// // // //       return res.status(400).json({ message: "Email and password required" });
// // // //     }

// // // //     const existingUser = await User.findOne({ email });
// // // //     if (existingUser) {
// // // //       return res.status(400).json({ message: "User already exists" });
// // // //     }

// // // //     const hashedPassword = await bcrypt.hash(password, 10);

// // // //     const user = await User.create({
// // // //       email,
// // // //       password: hashedPassword,
// // // //       role: role || 'user'
// // // //     });

// // // //     const token = jwt.sign(
// // // //       { id: user._id, role: user.role },
// // // //       process.env.JWT_SECRET,
// // // //       { expiresIn: '7d' }
// // // //     );

// // // //     res.status(201).json({
// // // //       user: {
// // // //         id: user._id,
// // // //         email: user.email,
// // // //         role: user.role
// // // //       },
// // // //       token
// // // //     });

// // // //   } catch (error) {
// // // //     console.error("REGISTER ERROR:", error);
// // // //     res.status(500).json({ message: "Server error during registration" });
// // // //   }
// // // // };

// // // // // 🔐 LOGIN
// // // // exports.login = async (req, res) => {
// // // //   try {
// // // //     const { email, password } = req.body;

// // // //     if (!email || !password) {
// // // //       return res.status(400).json({ message: "Email and password required" });
// // // //     }

// // // //     const user = await User.findOne({ email });
// // // //     if (!user) {
// // // //       return res.status(400).json({ message: "Invalid credentials" });
// // // //     }

// // // //     const isMatch = await bcrypt.compare(password, user.password);
// // // //     if (!isMatch) {
// // // //       return res.status(400).json({ message: "Invalid credentials" });
// // // //     }

// // // //     const token = jwt.sign(
// // // //       { id: user._id, role: user.role },
// // // //       process.env.JWT_SECRET,
// // // //       { expiresIn: '7d' }
// // // //     );

// // // //     res.status(200).json({
// // // //       user: {
// // // //         id: user._id,
// // // //         email: user.email,
// // // //         role: user.role
// // // //       },
// // // //       token
// // // //     });

// // // //   } catch (error) {
// // // //     console.error("LOGIN ERROR:", error);
// // // //     res.status(500).json({ message: "Server error during login" });
// // // //   }
// // // // };
// // // const User = require('../models/User');
// // // const bcrypt = require('bcryptjs');
// // // const jwt = require('jsonwebtoken');

// // // // REGISTER
// // // exports.register = async (req, res) => {
// // //   try {
// // //     const { email, password, role } = req.body;

// // //     if (!email || !password) {
// // //       return res.status(400).json({ message: "Email and password required" });
// // //     }

// // //     const existingUser = await User.findOne({ email });
// // //     if (existingUser) {
// // //       return res.status(400).json({ message: "User already exists" });
// // //     }

// // //     const hashedPassword = await bcrypt.hash(password, 10);

// // //     const user = await User.create({
// // //       email,
// // //       password: hashedPassword,
// // //       role: role || 'user'
// // //     });

// // //     const token = jwt.sign(
// // //       { id: user._id, role: user.role },
// // //       process.env.JWT_SECRET,
// // //       { expiresIn: '7d' }
// // //     );

// // //     res.status(201).json({
// // //       user: {
// // //         id: user._id,
// // //         email: user.email,
// // //         role: user.role
// // //       },
// // //       token
// // //     });

// // //   } catch (error) {
// // //     console.error("REGISTER ERROR:", error);
// // //     res.status(500).json({ message: "Server error during registration" });
// // //   }
// // // };

// // // // LOGIN
// // // exports.login = async (req, res) => {
// // //   try {
// // //     const { email, password } = req.body;

// // //     if (!email || !password) {
// // //       return res.status(400).json({ message: "Email and password required" });
// // //     }

// // //     const user = await User.findOne({ email });
// // //     if (!user) {
// // //       return res.status(400).json({ message: "Invalid credentials" });
// // //     }

// // //     const isMatch = await bcrypt.compare(password, user.password);
// // //     if (!isMatch) {
// // //       return res.status(400).json({ message: "Invalid credentials" });
// // //     }

// // //     const token = jwt.sign(
// // //       { id: user._id, role: user.role },
// // //       process.env.JWT_SECRET,
// // //       { expiresIn: '7d' }
// // //     );

// // //     res.status(200).json({
// // //       user: {
// // //         id: user._id,
// // //         email: user.email,
// // //         role: user.role
// // //       },
// // //       token
// // //     });

// // //   } catch (error) {
// // //     console.error("LOGIN ERROR:", error);
// // //     res.status(500).json({ message: "Server error during login" });
// // //   }
// // // };
// // const User = require('../models/User');
// // const bcrypt = require('bcryptjs');
// // const jwt = require('jsonwebtoken');

// // // REGISTER
// // exports.register = async (req, res) => {
// //   try {
// //     console.log("🔥 REGISTER HIT", req.body);

// //     const { email, password, role } = req.body;

// //     if (!email || !password) {
// //       return res.status(400).json({ message: "Email and password required" });
// //     }

// //     const existingUser = await User.findOne({ email });
// //     if (existingUser) {
// //       return res.status(400).json({ message: "User already exists" });
// //     }

// //     const hashedPassword = await bcrypt.hash(password, 10);

// //     const user = await User.create({
// //       email,
// //       password: hashedPassword,
// //       role: role || 'user'
// //     });

// //     const token = jwt.sign(
// //       { id: user._id, role: user.role },
// //       process.env.JWT_SECRET,
// //       { expiresIn: '7d' }
// //     );

// //     return res.status(201).json({
// //       user: {
// //         id: user._id,
// //         email: user.email,
// //         role: user.role
// //       },
// //       token
// //     });

// //   } catch (error) {
// //     console.error("REGISTER ERROR:", error);
// //     return res.status(500).json({ message: "Server error during registration" });
// //   }
// // };

// // // LOGIN
// // exports.login = async (req, res) => {
// //   try {
// //     console.log("🔥 LOGIN HIT", req.body);

// //     const { email, password } = req.body;

// //     if (!email || !password) {
// //       return res.status(400).json({ message: "Email and password required" });
// //     }

// //     const user = await User.findOne({ email });
// //     if (!user) {
// //       return res.status(400).json({ message: "Invalid credentials" });
// //     }

// //     const isMatch = await bcrypt.compare(password, user.password);
// //     if (!isMatch) {
// //       return res.status(400).json({ message: "Invalid credentials" });
// //     }

// //     const token = jwt.sign(
// //       { id: user._id, role: user.role },
// //       process.env.JWT_SECRET,
// //       { expiresIn: '7d' }
// //     );

// //     return res.status(200).json({
// //       user: {
// //         id: user._id,
// //         email: user.email,
// //         role: user.role
// //       },
// //       token
// //     });

// //   } catch (error) {
// //     console.error("LOGIN ERROR:", error);
// //     return res.status(500).json({ message: "Server error during login" });
// //   }
// // };
// const User = require('../models/User');
// const bcrypt = require('bcryptjs');
// const jwt = require('jsonwebtoken');

// exports.register = async (req, res) => {
//   try {
//     console.log('🔥 REGISTER HIT', req.body);

//     const { email, password, role } = req.body;

//     if (!email || !password) {
//       return res.status(400).json({ message: 'Email & password required' });
//     }

//     const exists = await User.findOne({ email });
//     if (exists) {
//       return res.status(400).json({ message: 'User already exists' });
//     }

//     const hashed = await bcrypt.hash(password, 10);

//     const user = await User.create({
//       email,
//       password: hashed,
//       role: role || 'user'
//     });

//     const token = jwt.sign(
//       { id: user._id, role: user.role },
//       process.env.JWT_SECRET,
//       { expiresIn: '7d' }
//     );

//     return res.status(201).json({
//       user: {
//         id: user._id,
//         email: user.email,
//         role: user.role
//       },
//       token
//     });

//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ message: 'Register failed' });
//   }
// };

// exports.login = async (req, res) => {
//   try {
//     console.log('🔥 LOGIN HIT', req.body);

//     const { email, password } = req.body;

//     const user = await User.findOne({ email });
//     if (!user) {
//       return res.status(400).json({ message: 'Invalid credentials' });
//     }

//     const match = await bcrypt.compare(password, user.password);
//     if (!match) {
//       return res.status(400).json({ message: 'Invalid credentials' });
//     }

//     const token = jwt.sign(
//       { id: user._id, role: user.role },
//       process.env.JWT_SECRET,
//       { expiresIn: '7d' }
//     );

//     res.json({
//       user: {
//         id: user._id,
//         email: user.email,
//         role: user.role
//       },
//       token
//     });

//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ message: 'Login failed' });
//   }
// };
const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

// REGISTER
exports.register = async (req, res) => {
  try {
    const { email, password, role } = req.body;

    if (!email || !password) {
      return res.status(400).json({ message: "Email & password required" });
    }

    const exists = await User.findOne({ email });
    if (exists) {
      return res.status(400).json({ message: "User already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await User.create({
      email,
      password: hashedPassword,
      role: role || "user",
    });

    return res.status(201).json({
      success: true,
      message: "User registered successfully",
      user: {
        id: user._id,
        email: user.email,
        role: user.role,
      },
    });
  } catch (err) {
    console.error("REGISTER ERROR:", err);
    res.status(500).json({ message: "Register failed" });
  }
};

// LOGIN
exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    const match = await bcrypt.compare(password, user.password);
    if (!match) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    const token = jwt.sign(
      { id: user._id, role: user.role },
      process.env.JWT_SECRET,
      { expiresIn: "7d" }
    );

    res.json({
      success: true,
      token,
      user: {
        id: user._id,
        email: user.email,
        role: user.role,
      },
    });
  } catch (err) {
    console.error("LOGIN ERROR:", err);
    res.status(500).json({ message: "Login failed" });
  }
};
