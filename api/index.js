const app = require("../src/app");
const { connectDatabase } = require("../src/config/database");

module.exports = async (req, res) => {
  try {
    await connectDatabase();
    return app(req, res);
  } catch (error) {
    console.error("Database bootstrap failed in serverless function:", error.message);
    return res.status(500).json({
      message: "Unexpected error while registering user"
    });
  }
};
