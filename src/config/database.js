const mongoose = require("mongoose");
const { env } = require("./env");

const connectDatabase = async () => {
  if (!env.mongodbUri) {
    throw new Error("MONGODB_URI is missing in environment variables.");
  }

  await mongoose.connect(env.mongodbUri);
  console.log("MongoDB connected.");
};

module.exports = { connectDatabase };
