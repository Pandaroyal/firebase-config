const cron = require("node-cron");
const cleanOldTemplates = require("./cleanTemplate");

// Run every day at 23:59 (11:59 PM)
cron.schedule("59 23 * * *", async () => {
  try {
    cleanOldTemplates();
  } catch (err) {
    console.error("[CRON] Error deleting old templates:", err.message);
  }
});
