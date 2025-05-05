const mongoose = require("mongoose");
const MONGODB_URI = process.env.MONGODB_URI;
const connectDB = async () => {
  try {
    if (!MONGODB_URI) {
      throw new Error("MONGO_URI is not defined");
    }
    await mongoose.connect(MONGODB_URI);
    console.log("MongoDB connected");
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};

module.exports = connectDB;
