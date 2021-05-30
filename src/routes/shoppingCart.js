const express = require('express');
const router = express.Router();
const { body } = require("express-validator");
const shoppingCartController = require('../controllers/shoppingCartController');
const userLogged = require('../middlewares/userLogged');

let validaciones = [body("cantidad").custom((value) => value > 0).withMessage("Debe agregar almenos un producto a su carrito")];

router.get('/carrito', userLogged,shoppingCartController.shoppingCart);
router.post('/carrito/add', userLogged, shoppingCartController.addCart);
router.post('/carrito/eliminar', userLogged, shoppingCartController.delete);
router.post('/carrito/comprar', userLogged, shoppingCartController.shop);
// router.get('/carrito/historial', userLogged, shoppingCartController.history);
// router.get('/carrito/detalle/:id', userLogged, shoppingCartController.buyDetail);

module.exports = router;
