const express = require('express');
const router = express.Router();

const createUser = require("../controllers/userController");
const createProduct = require("../controllers/productController");
const createOrder = require("../controllers/orderController");
const middleware = require('../middlewares/commonMiddlewares');

router.post("/createUser", middleware, createUser);
router.post("/createProduct", createProduct);
router.post("/createOrder", middleware, createOrder);

module.exports = router;