const express = require('express');
const router = express.Router();

const mainController = require('../controllers/main');

router.get('/', mainController.index);
router.get('/carrito', mainController.carrito);

module.exports = router;
