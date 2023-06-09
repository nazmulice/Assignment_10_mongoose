const express = require("express");
const router = express.Router();
const { authUser } = require("../middleware/auth.js");
const {
  getProduct,
  jwtToken,
  verifyToken,
} = require("../controller/product.controller");

router.get("/products", getProduct);

router.get("/jwt", jwtToken);

router.get("/verify", authUser, verifyToken);

module.exports = router;
