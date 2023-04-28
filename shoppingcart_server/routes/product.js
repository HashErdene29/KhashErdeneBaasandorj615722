const express = require('express');
const router = express.Router();

const { getProductList, updateProduct } = require('../controller/product');
const { authMiddleware } = require('../middleware/authentication');

router.get("/products/all", authMiddleware, getProductList);
router.post("/products/update", authMiddleware, updateProduct);

module.exports = router;