const express = require("express");
const templateRoutes = require("./routes/template");
const authMiddleware = require("./middlewares/log");

const app = express();

app.use(express.json());
app.use(authMiddleware); // Apply globally or to specific routes
app.use("/api/template", templateRoutes);

module.exports = app;
