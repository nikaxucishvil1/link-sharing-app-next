const { registerService } = require("./register.service");
const { loginService } = require("./login.service");
const { protectedService } = require("./protected.service");
const { sharedService } = require("./shared.service");
const { updateService } = require("./update.service");
const chokidar = require("chokidar");
const cors = require("cors");

module.exports = {
  cors,
  chokidar,
  registerService,
  loginService,
  protectedService,
  sharedService,
  updateService,
};
