const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');
const { body } = require('express-validator');
const adminSalesControllers = require('../../controllers/admin/adminSalesControllers');
const userLogged = require('../../middlewares/userLogged');
const userSuperAdmin = require('../../middlewares/userSuperAdmin');
const userSales = require('../../middlewares/userSales');

const validacionesEdit = [
    body('articulo').isEmpty().withMessage('El campo Articulo no puede estar vacio'),
    // body('articulo').isLength({min: 5}).withMessage('El campo Articulo no puede estar vacio'),
    body('descripcion').isEmpty().withMessage('El campo Descripcion no puede estar vacio'),
    // body('descripcion').isLength({min: 20}).withMessage('El campo Descripcion no puede estar vacio'),
    body('detalles').isEmpty().withMessage('El campo Detalles no puede estar vacio'),
    body('categoria').isEmpty().withMessage('El campo Categoria no puede estar vacio'),
    body('subcategoria').isEmpty().withMessage('El campo Subcategoria no puede estar vacio'),
    body('stock').isEmpty().withMessage('El campo Stock no puede estar vacio'),
    body('status').isEmpty().withMessage('El campo Estado no puede estar vacio'),
    body('sku').isEmpty().withMessage('El campo Codigo de barra no puede estar vacio'),
    body('descuento').isEmpty().withMessage('El campo Descuento no puede estar vacio'),
    body('precio').isEmpty().withMessage('El campo Precio no puede estar vacio'),
];

const validacionesCreate = [
    body('articulo').isEmpty().withMessage('El campo Articulo no puede estar vacio'),
    // body('articulo').isLength({min: 5}).withMessage('El campo Articulo no puede estar vacio'),
    body('descripcion').isEmpty().withMessage('El campo Descripcion no puede estar vacio'),
    // body('descripcion').isLength({min: 20}).withMessage('El campo Descripcion no puede estar vacio'),
    body('detalles').isEmpty().withMessage('El campo Detalles no puede estar vacio'),
    body('categoria').isEmpty().withMessage('El campo Categoria no puede estar vacio'),
    body('subcategoria').isEmpty().withMessage('El campo Subcategoria no puede estar vacio'),
    body('stock').isEmpty().withMessage('El campo Stock no puede estar vacio'),
    body('status').isEmpty().withMessage('El campo Estado no puede estar vacio'),
    body('sku').isEmpty().withMessage('El campo Codigo de barra no puede estar vacio'),
    body('descuento').isEmpty().withMessage('El campo Descuento no puede estar vacio'),
    body('precio').isEmpty().withMessage('El campo Precio no puede estar vacio'),
];

router.get('/admin/ventas', userLogged, userSales, adminSalesControllers.sales)

router.get('/admin/ventas/ventas', userLogged, userSales, adminSalesControllers.sales)
router.get('/admin/ventas/editar/:id', userLogged, userSuperAdmin, adminSalesControllers.edit);
router.put('/admin/ventas/editar/:id', userLogged, userSuperAdmin,validacionesEdit, adminSalesControllers.update);


router.delete('/admin/ventas/eliminar/:id',userLogged, userSuperAdmin, adminSalesControllers.delete);

module.exports = router;