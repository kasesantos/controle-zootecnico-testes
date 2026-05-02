const { Router } = require("express");
const authRoutes = require("./authRoutes");
const userRoutes = require("./userRoutes");

const routes = Router();

routes.use("/auth", authRoutes);
routes.use("/users", userRoutes);

module.exports = routes;
