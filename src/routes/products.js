const express = require('express');
const router = express.Router();
const productsController = require('../controllers/productsController');


router.get('/catalogo', productsController.catalogo);
router.get('/productDetail/:id?', productsController.detalle);



module.exports = router;



/* let express = require('express');
const productosController = require ('../controllers/productosController.js');

let router = express.Router();

router.get('/:idProducto', productosController.detalle);

router.get('/:idProducto/comentarios/:idComentario?', productosController.detalleComentarios);

module.exports = router; */
