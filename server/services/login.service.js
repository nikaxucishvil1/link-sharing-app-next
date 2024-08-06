const bcrypt = require("bcrypt");
const userModel = require("../db/module");
const jwt = require("jsonwebtoken");



const loginService = async (req, res) => {
  try {
    const JWT_SECRET = process.env.JWT_SECRET;
    const COOKIE_NAME = process.env.COOKIE_NAME;
    const { email, password } = req.body;
    const user = await userModel.findOne({ email });
    if (!user) return res.status(400).json({ message: "User not found" });
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch)
      return res.status(400).json({ message: "password not correct" });
    const token = jwt.sign({ email: user.email }, JWT_SECRET, {
      expiresIn: "1 day",
    });

    res.cookie(COOKIE_NAME, token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      maxAge: 3600000,
    });

    res
      .status(200)
      .json({ message: "User logged in successfully", token, expiresIn: 7 });
  } catch (error) {
    res.status(404);
  }
};
module.exports = { loginService };
