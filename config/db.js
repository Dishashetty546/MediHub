const mongoose = require("mongoose");
const colors = require("colors");
const connectDb = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URL);
    console.log(`mongoDb connecetd ${mongoose.connection.host}`);
  } catch (error) {
    console.log(`mongoDb server issue ${error}`.bgBlue);
  }
};

module.exports = connectDb;
