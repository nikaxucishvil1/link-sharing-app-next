const express = require("express");
const path = require("path");
const fs = require("fs/promises");
const connectToDB = require("./db/db");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const userModel = require("./db/module");
const hashPassword = require("./utils/hashPassword");
const cors = require("cors");
const authenticateToken = require("./auth/auth");
require("dotenv").config();

const app = express();

app.use(express.json());

app.use(cors());

connectToDB();

app.post("/register", async (req, res) => {
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
});

app.post("/login", async (req, res) => {
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
});

app.get("/protected", authenticateToken, async (req, res) => {
  try {
    const { email } = req.user;
    const user = await userModel.findOne({ email });
    res.json(user);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
});

app.get("/shared", async (req, res) => {
  try {
    const { id } = req.query;
    const user = await userModel.findById(id);
    res.send(user);
  } catch (error) {
    res.status(404).json({ message: "user not found" });
  }
});

app.put("/update/:id", async (req, res) => {
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
    res.status(404)
  }
});

app.listen(3000, () => {
  console.log("server running on http://localhost:3000");
});
