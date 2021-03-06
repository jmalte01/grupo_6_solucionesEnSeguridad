const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');
const { body } = require('express-validator');
const adminShippingControllers = require('../../controllers/admin/adminShippingControllers');
const userLogged = require('../../middlewares/userLogged');
const userAdmin = require('../../middlewares/userAdmin');
const userSuperAdmin = require('../../middlewares/userSuperAdmin');
const userShipping = require('../../middlewares/userShipping');


let storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, path.resolve(__dirname, '../../public/img'));
    },
    filename: function (req, file, cb) {
      cb(null, 'producto-'+Date.now()+path.extname(file.originalname))
  }
})
const upload = multer({ storage })

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

const validacionesImagenEdit = [
body('imagen').custom((value, {req}) =>{

        if (req.file == undefined) return false;

            return true;
  }).withMessage('Debe cargar una imagen válida')
  .bail()
  .custom((value, {req}) =>{

            let filetype = req.file.mimetype
            switch (filetype) {
                case 'image/jpg':
                    return true;
                case 'image/jpeg':
                    return true;
                case  'image/png':
                    return true;
                default:
                    return false;

        }
  }).withMessage('Debe elegir una imagen en formato: .JPG ó JPEG ó PNG')
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

const validacionesImagenCreate = [
    body('imagen').custom((value, {req,}) =>{
        if(req.file == undefined){
            let filetype = req.file.mimetype
            switch (filetype) {
                case 'image/jpg':
                    return false;
                case 'image/jpeg':
                    return false;
                case  'image/png':
                    return false;
                default:
                    return true;
        }
    }}).withMessage('Debe elegir una imagen en formato: .JPG ó JPEG ó PNG')
];

router.get('/admin/envios', userLogged, userShipping, adminShippingControllers.all)
router.get('/admin/envios/pendientes', userLogged, userShipping, adminShippingControllers.pending)
router.get('/admin/envios/procesando', userLogged, userShipping, adminShippingControllers.delivered)
router.get('/admin/envios/enviando', userLogged, userShipping, adminShippingControllers.delivered)
router.get('/admin/envios/entregados', userLogged, userShipping, adminShippingControllers.delivered)
router.post('/admin/envios/buscar', userLogged, userShipping, adminShippingControllers.search)

router.get('/admin/envios/detalle/:id', userLogged, userShipping, adminShippingControllers.detail);

router.get('/admin/enviar/editar/:id', userLogged, userSuperAdmin, adminShippingControllers.edit);
router.put('/admin/enviar/editar/:id', userLogged, userSuperAdmin,validacionesEdit, adminShippingControllers.update);

router.delete('/admin/enviar/eliminar/:id',userLogged, userShipping, adminShippingControllers.delete);

module.exports = router;