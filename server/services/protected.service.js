const userModel = require("../db/module");

const protectedService = async (req, res) => {
    try {
      const { email } = req.user;
      const user = await userModel.findOne({ email });
      res.json(user);
    } catch (error) {
      res.status(500).json({ message: "Server error" });
    }
  }

  module.exports = {protectedService}