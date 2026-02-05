const Claim = require('../models/Claim');
const express = require('express');
const router = express.Router();
const { reportItem, getItems } = require('../controllers/itemController');
const auth = require('../middleware/auth'); // We will create this middleware now
const adminCheck = (req, res, next) => {
  if (req.user.role !== 'admin') {
    return res.status(403).json({ message: "Access denied. Admins only." });
  }
  next();
};
router.get('/admin/claims', auth, adminCheck, getAllClaims);
router.put('/admin/claims/:id/approve', auth, adminCheck, approveClaim);
router.post('/', auth, reportItem); // Protect this route so only logged-in users can report
router.get('/', getItems);
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