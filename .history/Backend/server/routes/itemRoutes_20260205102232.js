const express = require('express');
const router = express.Router();
const Claim = require('../models/Claim');
const auth = require('../middleware/auth');
// Ensure these are imported from your controller
const { 
  reportItem, 
  getItems, 
  getAllClaims, 
  approveClaim 
} = require('../controllers/itemController');

const adminCheck = (req, res, next) => {
  if (req.user.role !== 'admin') {
    return res.status(403).json({ message: "Access denied. Admins only." });
  }
  next();
};

// Admin Routes
router.get('/admin/claims', auth, adminCheck, getAllClaims);
router.put('/admin/claims/:id/approve', auth, adminCheck, approveClaim);

// Standard Item Routes
router.post('/', auth, reportItem);
router.get('/', getItems);

// Student Claim Route
const express = require('express');
const router = express.Router();
const { register, login } = require('../controllers/authController');

// Define the endpoints
router.post('/register', register);
router.post('/login', login);

module.exports = router;