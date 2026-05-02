const express = require("express");
const cors = require("cors");
const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require("./docs/swagger.json");
const routes = require("./routes");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/health", (_req, res) => {
  res.status(200).json({ status: "ok" });
});

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use("/api", routes);

module.exports = app;
