const { Router } = require("express");
const userController = require("../controllers/userController");
const authMiddleware = require("../middleware/authMiddleware");

const userRoutes = Router();

userRoutes.get("/me", authMiddleware, userController.me);

module.exports = userRoutes;
