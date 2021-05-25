const express = require('express');
const router = express.Router();
const productsApiController = require('../../controllers/api/productsApiControllers');


router.get('/', productsApiController.list);
router.get('/:id', productsApiController.detail);

module.exports = router;