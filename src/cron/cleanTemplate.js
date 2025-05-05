const Template = require("../models/template"); // adjust path as needed

const cleanOldTemplates = async () => {
  try {
    // Step 1: Get the 10th latest template (sorted descending)
    const tenthTemplate = await Template.findOne()
      .sort({ createdAt: -1 })
      .skip(9);

    if (!tenthTemplate) {
      console.log("Less than 10 templates exist — nothing to delete.");
      return;
    }

    const thresholdDate = tenthTemplate.createdAt;

    // Step 2: Delete all templates older than this date
    const result = await Template.deleteMany({
      createdAt: { $lt: thresholdDate },
    });

    console.log(
      `[CLEANUP] Deleted ${result.deletedCount} templates older than ${thresholdDate}`
    );
  } catch (error) {
    console.error(
      "[CLEANUP] Error while deleting old templates:",
      error.message
    );
  }
};

module.exports = cleanOldTemplates;
