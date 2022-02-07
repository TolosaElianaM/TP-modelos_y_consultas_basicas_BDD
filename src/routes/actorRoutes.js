var express = require('express');
var router = express.Router();
const actorController = require('../controllers/actorController')

router.get('/', actorController.list);
router.get('/detail/:id', actorController.detail);

module.exports = router;