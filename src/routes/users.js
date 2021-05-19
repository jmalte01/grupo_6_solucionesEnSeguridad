const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');
const fs = require('fs')
const bcrypt = require('bcryptjs');
const { body } = require('express-validator');
const isRemember = require('../middlewares/isRemember');
const db = require('../database/models');
let Users = db.User;

const userControllers = require(path.resolve(__dirname,'../controllers/userControllers'));

// let Users =  JSON.parse(path.resolve(__dirname, '../database/users.js'))


const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, path.resolve(__dirname, '../../public/img/usuarios'));
    },
    filename: function (req, file, cb) {
      cb(null, 'foto' + '-' + Date.now()+ path.extname(file.originalname));      
    }
});
const upload= multer({ storage });

const validacionesLogin = [

    // if (user) {
    //     if(bcrypt.compareSync(req.body.password, user.dataValues.password)) {
    //         return Promise.resolve(true);
    //     }
    //     else {
    //         return Promise.reject('Usuario o contraseña no coinciden');
    //     }
    // }

        body('email').custom((value, { req }) => {
        return Users.findOne({where: {
            email: value
        }}).then(user => {
          if (!user) {
            return Promise.reject('Usuario o contraseña no coinciden');
          } else if(bcrypt.compareSync(req.body.password, user.dataValues.password)){
            return Promise.resolve(true);
        }else{
            return Promise.reject('Usuario o contraseña no coinciden');
        }
        })
      })
    ]


const validacionesRegistro = [
    body('first_name').isLength({
        min: 1
    }).withMessage('El campo nombre no puede estar vacío'),
    body('last_name').isLength({min: 1
        }).withMessage('El campo apellido no puede estar vacío'),
    body('email').isEmail().withMessage('Agregar un email válido'),
    body('password').isLength({min: 8 }).withMessage('La contraseña debe tener un mínimo de 6 caractéres'),
    body('repeatPassword').isLength({min: 8 }).withMessage('La confirmación de la contraseña debe tener un mínimo de 6 caractéres'),
    body('repeatPassword').custom((value, {req}) =>{
        if(req.body.password == value ){
            return true    
        }else{
            return false
        }    
    }).withMessage('Las contraseñas deben ser iguales'),
    body('avatar').custom((value, {req}) =>{
        if(req.file != undefined){
            return true
        }
            return false;
    }).withMessage('Debe elegir su avatar y debe ser un archivo con formato: .JPG ó JPEG ó PNG')
]

//ruta raiz de los productos/inicio
// ruta que muestra el registro de un usuario
router.get('/register', userControllers.register);
router.post('/register',upload.single('avatar'), validacionesRegistro, userControllers.create);
// ruta que muestra el login de un usuario
router.get('/login', isRemember, userControllers.login);
router.post('/login', validacionesLogin, userControllers.access);
router.get('/logout', userControllers.logout);


/*******************************************
// ruta que muestra la recuperación de contraseña
router.get('/chau', userControllers.hola);
 *******************************************/

// ruta que muestra la recuperación de contraseña
router.get('/forgotPassword', userControllers.forgot);

// ruta que muestra la recuperación de contraseña
router.post('/forgotPasswordSent', userControllers.forgotMessage);

// ruta que muestra la recuperación de contraseña
router.get('/registerMessage', userControllers.registerMessage);


module.exports = router;
