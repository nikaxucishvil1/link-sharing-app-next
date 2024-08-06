const userModel = require("../db/module");

const sharedService = async (req, res) => {
  try {
    const { id } = req.query;
    const user = await userModel.findById(id);
    res.send(user);
  } catch (error) {
    res.status(404).json({ message: "user not found" });
  }
};

module.exports = { sharedService };
