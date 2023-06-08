const jwt = require("jsonwebtoken");
const Product = require("../models/product.model");
require("dotenv").config();

exports.getProduct = async (req, res) => {
  try {
    const productData = await Product.find({}, { _id: 0, name: 1, price: 1 });

      res.status(200).json({
          success: true,
          data: productData
      });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

// task: #3
exports.jwtToken = (req, res) => {
  try {
    const userId = 12345678910;
    const secretKey = process.env.JWT_SECRET;

    const generateToken = (userId, secretKey) => {
      return jwt.sign({ userId }, secretKey, { expiresIn: "1d" });
    };

    const token = generateToken(userId, secretKey);

    res.status(200).json({ message: token });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

// task: #4
exports.verifyToken = (req, res) => {
  try {
    res.status(200).json({ message: "JWT token verify successfully." });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
