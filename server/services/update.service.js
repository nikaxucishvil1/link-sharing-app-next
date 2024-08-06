const userModel = require("../db/module");

const updateService = async (req, res) => {
  try {
    const { id } = req.params;
    const { email, password, ArrayOfLinks, sharedInfo } = req.body;
    const updated = await userModel.findByIdAndUpdate(
      id,
      {
        email,
        password,
        ArrayOfLinks,
        sharedInfo,
      },
      { new: true }
    );
    res.status(200).json(updated);
  } catch (error) {
    res.status(404);
  }
};

module.exports = { updateService };
