const hashPassword = require("../utils/hashPassword");
const userModel = require("../db/module");
const jwt = require("jsonwebtoken");

const registerService = async (req, res) => {
  try {
    const { email, password, ArrayOfLinks, sharedInfo } = req.body;
    const isTaken = await userModel.findOne({ email });
    if (isTaken) return res.status(400).json("email already taken");
    const hashedPassword = await hashPassword(password);
    const newUser = new userModel({
      email,
      password: hashedPassword,
      ArrayOfLinks,
      sharedInfo,
    });

    const token = jwt.sign({ email: newUser.email }, process.env.JWT_SECRET, {
      expiresIn: "7 days",
    });

    await newUser.save();

    res
      .status(201)
      .json({ message: "User registered successfully", token, expiresIn: 7 });
  } catch (error) {
    res.status(400).json("Email already taken");
  }
};

module.exports = { registerService };
