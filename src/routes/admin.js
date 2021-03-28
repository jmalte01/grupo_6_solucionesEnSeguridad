const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');

const adminControllers = require('../controllers/adminControllers');
<<<<<<< HEAD
<<<<<<< HEAD
const userLogged = require('../middlewares/userLogged');
=======
>>>>>>> parent of b695305 (registro y login en progreso)
=======
>>>>>>> parent of b695305 (registro y login en progreso)

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, path.resolve(__dirname, '../../public/img'));
    },
    filename: function (req, file, cb) {
      cb(null, 'producto-'+Date.now()+path.extname(file.originalname))
  }
})
   
  const upload = multer({ storage })


<<<<<<< HEAD
<<<<<<< HEAD
router.get('/admin/administrar', userLogged, adminControllers.index);
router.get('/admin/crear', userLogged, adminControllers.crear);
router.post('/admin/crear',upload.single('imagen'), adminControllers.save);
router.get('/admin/editar/:id?', userLogged, adminControllers.editar);
=======
router.get('/admin/administrar', adminControllers.index);
router.get('/admin/crear', adminControllers.crear);
router.post('/admin/crear',upload.single('imagen'), adminControllers.save);
router.get('/admin/editar/:id?', adminControllers.editar);
>>>>>>> parent of b695305 (registro y login en progreso)
=======
router.get('/admin/administrar', adminControllers.index);
router.get('/admin/crear', adminControllers.crear);
router.post('/admin/crear',upload.single('imagen'), adminControllers.save);
router.get('/admin/editar/:id?', adminControllers.editar);
>>>>>>> parent of b695305 (registro y login en progreso)
router.put('/admin/editar/:id',upload.single('imagen'), adminControllers.update);
router.delete('/admin/delete/:id', adminControllers.delete);
module.exports = router;


