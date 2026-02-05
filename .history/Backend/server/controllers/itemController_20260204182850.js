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