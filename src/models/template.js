const mongoose = require("mongoose");

const templateSchema = new mongoose.Schema({
  text: String
}, { timestamps: true });

module.exports = mongoose.model("Template", templateSchema);
