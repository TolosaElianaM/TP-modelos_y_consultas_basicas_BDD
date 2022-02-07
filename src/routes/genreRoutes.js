var express = require('express');
var router = express.Router();
const genreController = require('../controllers/genreController')

router.get('/', genreController.list);
router.get('/detail/:id', genreController.detail);

module.exports = router;