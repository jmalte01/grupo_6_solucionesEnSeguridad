const express = require('express');
const router = express.Router();

const shoppingCartController = require('../controllers/shoppingCartController');
const userLogged = require('../middlewares/userLogged');

router.get('/carrito', shoppingCartController.shoppingCart);
router.post('/carrito/añadirCarrito', userLogged, shoppingCartController.addCart);

module.exports = router;
