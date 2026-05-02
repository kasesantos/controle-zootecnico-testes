const jwt = require("jsonwebtoken");
const { env } = require("../config/env");

const authMiddleware = (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.status(401).json({ message: "Missing authentication token." });
  }

  const token = authHeader.replace("Bearer ", "");

  try {
    const decoded = jwt.verify(token, env.jwtSecret);
    req.userId = decoded.sub;
    return next();
  } catch (error) {
    return res.status(401).json({ message: "Invalid authentication token." });
  }
};

module.exports = authMiddleware;
