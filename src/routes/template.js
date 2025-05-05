const express = require("express");
const router = express.Router();
const { getLatestTemplate, createTemplate } = require("../controllers/template");

router.get("/", getLatestTemplate);
router.post("/", createTemplate);

module.exports = router;
