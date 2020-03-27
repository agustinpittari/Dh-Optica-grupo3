var express = require('express');
var router = express.Router();
var productsController = require('../../controllers/api/producstController')


/* GET home page. */
router.get('/', productsController.list);

router.get('/:id', productsController.find)



module.exports = router;
