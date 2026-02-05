const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
  const token = req.header('x-auth-token'); // Expecting the token in the header

  if (!token) return res.status(401).json({ message: "No token, access denied" });

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded; // Adds user info to the request
    next();
  } catch (err) {
    res.status(401).json({ message: "Session expired or invalid token" });
  }
};