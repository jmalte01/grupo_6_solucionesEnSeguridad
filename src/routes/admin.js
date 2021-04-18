const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');

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


router.get('/admin/administrar', userLogged, adminControllers.index);
// router.get('/admin/crear', userLogged, adminControllers.crear);
// router.post('/admin/crear',upload.single('imagen'), adminControllers.save);
// router.get('/admin/editar/:id?', userLogged, adminControllers.editar);
// router.put('/admin/editar/:id',upload.single('imagen'), adminControllers.update);
// router.delete('/admin/delete/:id', adminControllers.delete);
module.exports = router;


