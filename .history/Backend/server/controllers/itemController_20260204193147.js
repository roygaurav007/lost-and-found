const Item = require('../models/Item');
const Claim = require('../models/Claim');

// 👤 NEW: Get only the logged-in user's reports
exports.getMyActivity = async (req, res) => {
  try {
    const items = await Item.find({ reportedBy: req.user.id });
    res.json(items);
  } catch (err) {
    res.status(500).json({ message: "Failed to fetch your history" });
  }
};

// 📝 Report a new item
exports.reportItem = async (req, res) => {
  try {
    const newItem = new Item({
      ...req.body,
      reportedBy: req.user.id 
    });
    const item = await newItem.save();
    res.status(201).json(item);
  } catch (err) {
    res.status(500).json({ message: "Failed to report item" });
  }
};

// 🔍 Get all available items for the public board
exports.getItems = async (req, res) => {
  try {
    const items = await Item.find({ status: 'available' }).populate('reportedBy', 'name email');
    res.json(items);
  } catch (err) {
    res.status(500).json({ message: "Failed to fetch items" });
  }
};

// 🛡️ Admin: Get all pending claims
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

// ✅ Admin: Approve a claim
exports.approveClaim = async (req, res) => {
  try {
    const claim = await Claim.findById(req.params.id);
    if (!claim) return res.status(404).json({ message: "Claim not found" });

    claim.status = 'approved';
    await claim.save();

    await Item.findByIdAndUpdate(claim.itemId, { status: 'claimed' });
    res.json({ message: "Claim approved and item resolved!" });
  } catch (err) {
    res.status(500).json({ message: "Error approving claim" });
  }
};