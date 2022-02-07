var express = require('express');
var router = express.Router();
const movieController = require('../controllers/movieController')

router.get('/', movieController.list);
router.get('/new', movieController.new);
router.get('/recommended', movieController.recommended);
router.get('/detail/:id', movieController.detail);

module.exports = router;