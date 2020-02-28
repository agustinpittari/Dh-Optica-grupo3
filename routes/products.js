var express = require('express');
var router = express.Router();
var productsController = require('../controllers/productsController')

const guestMiddleware = require('../middlewares/guestMiddleware')
const authMiddleware = require('../middlewares/authMiddleware')

router.get('/', productsController.products) //Todos los productos

router.get('/search', productsController.search)

router.get('/create', authMiddleware, productsController.createForm) //Formulario de creacion de producto
router.post('/create', productsController.storage) //Guardado de producto

router.get('/:id', productsController.productDetail) //Detalle de producto 

router.get('/edit/:id', authMiddleware, productsController.edit) //Formulario de edicion
router.put('/edit/:id', productsController.update) //Almacenamiento de edicion

router.delete('/delete/:id', authMiddleware, productsController.delete)


module.exports = router;