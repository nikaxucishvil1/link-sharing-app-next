const mongoose = require("mongoose");

module.exports = async () => {
  try {
    await mongoose.connect(process.env.MONGO_DB_SECRET, { useNewUrlParser: true });
    console.log("connected to db");
  } catch (error) {
    console.log(error);
  }
};