const express = require('express');
const router = express.Router();
const quizController = require('../controllers/quizController');

router.get('/', quizController.findAll);
router.post('/', quizController.addOne);
router.get('/:id', quizController.findOne);

module.exports = router;
