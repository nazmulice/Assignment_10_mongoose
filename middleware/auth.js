const jwt = require("jsonwebtoken");
require("dotenv").config();

exports.authUser = (req, res, next) => {
  try {
    const { token } = req.headers;
    const secretKey = process.env.JWT_SECRET;
    const decoded = jwt.verify(token, secretKey);

    req.user = decoded;
    next();
  } catch (error) {
    res.status(401).json({ message: "Unauthorized User" });
  }
};
