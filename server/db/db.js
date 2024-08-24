const mongoose = require("mongoose");

module.exports = async () => {
  try {
    await mongoose.connect(process.env.MONGO_DB_SECRET, {
      serverSelectionTimeoutMS: 30000,
    });
    console.log("connected to DB");
  } catch (error) {
    console.log(error);
  }
};
