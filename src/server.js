const app = require("./app");
const { connectDatabase } = require("./config/database");
const { env } = require("./config/env");

const bootstrap = async () => {
  await connectDatabase();

  app.listen(env.port, () => {
    console.log(`API running on port ${env.port}`);
  });
};

bootstrap().catch((error) => {
  console.error("Failed to start server:", error.message);
  process.exit(1);
});
