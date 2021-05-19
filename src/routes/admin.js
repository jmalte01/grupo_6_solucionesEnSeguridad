const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');
const { body } = require('express-validator');
const adminControllers = require('../controllers/adminControllers');
const userLogged = require('../middlewares/userLogged');

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, path.resolve(__dirname, '../../public/img'));
    },
    filename: function (req, file, cb) {
      cb(null, 'producto-'+Date.now()+path.extname(file.originalname))
  }
})
const upload = multer({ storage })

const validacionesCreateEdit = [
    body('articulo').notEmpty().withMessage('El campo Articulo no puede estar vacio'),
    body('descripcion').notEmpty().withMessage('El campo Descripcion no puede estar vacio'),
    body('detalles').notEmpty().withMessage('El campo Detalles no puede estar vacio'),
    body('categoria').notEmpty().withMessage('El campo Categoria no puede estar vacio'),
    body('subcategoria').notEmpty().withMessage('El campo Subcategoria no puede estar vacio'),
    body('stock')
    .notEmpty().withMessage('El campo Stock no puede estar vacio')
    .isNumeric().withMessage('El campo Precio solo puede contener numeros'),
    body('status').notEmpty().withMessage('El campo Status no puede estar vacio'),
    body('sku').notEmpty().withMessage('El campo Codigo de barra no puede estar vacio'),
    body('descuento')
    .notEmpty().withMessage('El campo Descuento no puede estar vacio')
    .isNumeric().withMessage('El campo Precio solo puede contener numeros'),
    body('precio')
    .notEmpty().withMessage('El campo Precio no puede estar vacio')
    .isNumeric().withMessage('El campo Precio solo puede contener numeros'),
    body('imagen').custom((value, {req}) =>{
        let extension = (path.extname(req.file)).toLowerCase();
        switch (extension) {
            case '.jpg':
                return true;
            case '.jpeg':
                return true;
            case  '.png':
                return true;
            default:
                return false;
        }
        // if(req.file != undefined){
        //   return true
        // }
        //   return false;
  }).withMessage('Debe elegir una imagen en formato: .JPG ó JPEG ó PNG')
];


router.get('/admin/administrar', userLogged, adminControllers.index);
router.get('/admin/crear', userLogged, adminControllers.crear);
router.post('/admin/crear', validacionesCreateEdit , upload.single('imagen'), adminControllers.save);
router.get('/admin/editar/:id?', userLogged, adminControllers.editar);
router.put('/admin/editar/:id', validacionesCreateEdit, upload.single('imagen'), adminControllers.update);
router.delete('/admin/delete/:id', adminControllers.delete);
module.exports = router;


