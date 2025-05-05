const Template = require("../models/template");

exports.getLatestTemplate = async (req, res) => {
  const latest = await Template.findOne().sort({ createdAt: -1 });
  res.status(200).json({ success: true, data: latest });
};

exports.createTemplate = async (req, res) => {
  try {
    const { text } = req?.body || {};

    // ✅ Validation: check if text is present and not null/undefined/empty string
    if (typeof text !== "string" || !text.trim()) {
      return res
        .status(400)
        .json({
          success: false,
          message: "Text is required and must be a string",
        });
    }

    // ✅ Create template
    const newTemplate = await Template.create({ text });
    res.status(201).json({ sucess: true, data: newTemplate });
  } catch (error) {
    res.status(400).json({ sucess: false, error: error.message });
  }
};
