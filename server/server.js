const express = require("express");
const connectToDB = require("./db/db");
const authenticateToken = require("./auth/auth");
require("dotenv").config();
const {
  cors,
  registerService,
  loginService,
  protectedService,
  sharedService,
  updateService,
  chokidar,
} = require("./services/common");

const watcher = chokidar.watch("path/to/watch", {
  ignored: /node_modules/,
  persistent: true,
});

watcher.on("change", (path) => {
  console.log(`File ${path} has been changed`);
});

const app = express();

app.use(express.json());

app.use(cors());

connectToDB();

app.post("/register", registerService);

app.post("/login", loginService);

app.get("/protected", authenticateToken, protectedService);

app.get("/shared", sharedService);

app.put("/update/:id", updateService);

app.listen(3000, () => {
  console.log("server running on http://localhost:3000");
});
