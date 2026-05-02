const mongoose = require("mongoose");
const { env } = require("./env");

const globalMongoose = global.__mongooseConnection;
const cachedConnection = globalMongoose || {
  connection: null,
  promise: null
};

if (!globalMongoose) {
  global.__mongooseConnection = cachedConnection;
}

const connectDatabase = async () => {
  if (!env.mongodbUri) {
    throw new Error("MONGODB_URI is missing in environment variables.");
  }

  if (cachedConnection.connection || mongoose.connection.readyState === 1) {
    return mongoose.connection;
  }

  if (!cachedConnection.promise) {
    cachedConnection.promise = mongoose
      .connect(env.mongodbUri, {
        serverSelectionTimeoutMS: 5000
      })
      .then((mongooseInstance) => {
        console.log("MongoDB connected.");
        return mongooseInstance.connection;
      })
      .catch((error) => {
        cachedConnection.promise = null;
        throw error;
      });
  }

  cachedConnection.connection = await cachedConnection.promise;
  return cachedConnection.connection;
};

module.exports = { connectDatabase };
