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
router.post('/:id/claim', auth, async (req, res) => {
  try {
    const newClaim = new Claim({
      itemId: req.params.id,
      claimantId: req.user.id,
      description: req.body.description,
      proofDetails: req.body.proofDetails
    });
    await newClaim.save();
    res.status(201).json({ message: "Claim submitted successfully!" });
  } catch (err) {
    res.status(500).json({ message: "Error submitting claim" });
  }
});

module.exports = router;