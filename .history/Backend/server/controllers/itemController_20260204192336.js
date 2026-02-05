const Item = require('../models/Item');

// Report a new item
exports.reportItem = async (req, res) => {
  try {
    const newItem = new Item({
      ...req.body,
      reportedBy: req.user.id // This comes from our Auth Middleware (next step)
    });
    const item = await newItem.save();
    res.status(201).json(item);
  } catch (err) {
    res.status(500).json({ message: "Failed to report item" });
  }
};

// Get all available items
exports.getItems = async (req, res) => {
  try {
    const items = await Item.find({ status: 'available' }).populate('reportedBy', 'name email');
    res.json(items);
  } catch (err) {
    res.status(500).json({ message: "Failed to fetch items" });
  }
};
const Claim = require('../models/Claim');
const Item = require('../models/Item');

// Admin only: Get all pending claims
exports.getAllClaims = async (req, res) => {
  try {
    const claims = await Claim.find({ status: 'pending' })
      .populate('itemId', 'title location')
      .populate('claimantId', 'name email');
    res.json(claims);
  } catch (err) {
    res.status(500).json({ message: "Failed to fetch claims" });
  }
};

// Admin only: Approve a claim and mark item as 'claimed'
exports.approveClaim = async (req, res) => {
  try {
    const claim = await Claim.findById(req.params.id);
    if (!claim) return res.status(404).json({ message: "Claim not found" });

    // Update claim status
    claim.status = 'approved';
    await claim.save();

    // Mark the actual item as claimed so it disappears from the Browse Board
    await Item.findByIdAndUpdate(claim.itemId, { status: 'claimed' });

    res.json({ message: "Claim approved and item resolved!" });
  } catch (err) {
    res.status(500).json({ message: "Error approving claim" });
  }
};