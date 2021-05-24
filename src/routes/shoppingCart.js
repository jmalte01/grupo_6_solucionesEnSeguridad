const express = require('express');
const router = express.Router();
const { body } = require("express-validator");
const shoppingCartController = require('../controllers/shoppingCartController');
const userLogged = require('../middlewares/userLogged');

let validaciones = [body("cantidad").custom((value) => value > 0).withMessage("Debe agregar almenos un producto a su carrito")];

router.get('/shoppingCart', shoppingCartController.shoppingCart);
router.post('/shoppingCart/addCart', userLogged, validaciones, shoppingCartController.addCart);

module.exports = router;
