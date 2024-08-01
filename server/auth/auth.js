const jwt = require("jsonwebtoken");

const authenticateToken = (req, res, next) => {
  const JWT_SECRET = process.env.JWT_SECRET;
  const authHeader = req.headers.authorization;
  const token = authHeader && authHeader.split(" ")[1];

  if (token == null) return res.status(401).send("No token provided");

  jwt.verify(token, JWT_SECRET, (err, user) => {
    if (err) return res.status(403).send("Token is not valid");
    req.user = user;
    next();
  });
};

module.exports = authenticateToken;
