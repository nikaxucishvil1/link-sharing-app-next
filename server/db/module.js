const mongoose = require("mongoose");
const { Schema } = require("mongoose");

const userModel = new Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  ArrayOfLinks: {
    type: Array,
    required: true,
  },
  sharedInfo: {
    type: Object,
    required: true,
  },
});

module.exports = mongoose.model("User", userModel);
