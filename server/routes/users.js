const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

router.get('/', userController.show);
router.post('/', userController.validate);

module.exports = router;
