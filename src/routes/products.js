const express = require('express');
const router = express.Router();
const productsController = require('../controllers/productsController');


router.get('/catalogo', productsController.catalogo);
router.get('/productDetail/:id?', productsController.detalle);
router.get('/admin/createProduct/:id?', productsController.crear);
router.get('/admin/editProduct/:id?', productsController.editar);


module.exports = router;



/* let express = require('express');
const productosController = require ('../controllers/productosController.js');

let router = express.Router();

router.get('/:idProducto', productosController.detalle);

router.get('/:idProducto/comentarios/:idComentario?', productosController.detalleComentarios);

module.exports = router; */
