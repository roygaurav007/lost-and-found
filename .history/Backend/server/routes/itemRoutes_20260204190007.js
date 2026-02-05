const Claim = require('../models/Claim');
const express = require('express');
const router = express.Router();
const { reportItem, getItems } = require('../controllers/itemController');
const auth = require('../middleware/auth'); // We will create this middleware now

router.post('/', auth, reportItem); // Protect this route so only logged-in users can report
router.get('/', getItems);


module.exports = router;