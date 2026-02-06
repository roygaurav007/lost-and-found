// // // // const express = require('express');
// // // // const router = express.Router();
// // // // const { register, login } = require('../controllers/authController');

// // // // // Define the endpoints
// // // // router.post('/register', register);
// // // // router.post('/login', login);

// // // // module.exports = router;
// // // const express = require('express');
// // // const router = express.Router();
// // // const { register, login } = require('../controllers/authController');

// // // router.post('/register', register);
// // // router.post('/login', login);

// // // module.exports = router;
// // const express = require('express');
// // const router = express.Router();
// // const { register, login } = require('../controllers/authController');

// // router.post('/register', register);
// // router.post('/login', login);

// // module.exports = router;
// const express = require('express');
// const router = express.Router();
// const { register, login } = require('../controllers/authController');

// router.post('/register', register);
// router.post('/login', login);

// module.exports = router;
const express = require("express");
const { register, login } = require("../controllers/authController");

const router = express.Router();

router.post("/register", register);
router.post("/login", login);

module.exports = router;
