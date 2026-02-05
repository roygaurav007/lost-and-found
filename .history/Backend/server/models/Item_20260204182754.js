const mongoose = require('mongoose');

const ItemSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  category: { type: String, required: true },
  location: { type: String, required: true },
  dateFound: { type: Date, default: Date.now },
  image: { type: String }, // URL from Cloudinary or a string for now
  status: { 
    type: String, 
    enum: ['available', 'claimed', 'verified'], 
    default: 'available' 
  },
  reportedBy: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'User', 
    required: true 
  },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Item', ItemSchema);