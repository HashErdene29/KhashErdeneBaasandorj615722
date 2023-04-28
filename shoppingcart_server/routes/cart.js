const express = require('express');
const router = express.Router();

const { addToCart, updateCart, getCartList, emptyCart } = require('../controller/cart');
const { authMiddleware } = require('../middleware/authentication');

router.post("/cart/add", authMiddleware, addToCart);
router.post("/cart/empty/:userid", authMiddleware, emptyCart);

router.post("/cart/update", authMiddleware, updateCart);
router.get("/cart/all/:userid", authMiddleware, getCartList);

module.exports = router;