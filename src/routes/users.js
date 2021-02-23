const express = require('express');
const router = express.Router();
const userControllers = require('../controllers/userControllers');

//ruta raiz de los productos/inicio
// ruta que muestra el registro de un usuario
router.get('/register', userControllers.register);
// ruta que muestra el login de un usuario
router.get('/login', userControllers.login);

/*******************************************
// ruta que muestra la recuperación de contraseña
router.get('/chau', userControllers.hola);
 *******************************************/

// ruta que muestra la recuperación de contraseña
router.get('/forgotPassword', userControllers.forgot);

// ruta que muestra la recuperación de contraseña
router.post('/forgotPasswordSent', userControllers.forgotMessage);

// ruta que muestra la recuperación de contraseña
router.post('/registerMessage', userControllers.registerMessage);


module.exports = router;
