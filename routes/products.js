var express = require('express');
var router = express.Router();
var productsController = require('../controllers/productsController')

router.get('/', productsController.products) //Pagina de todos los productos

router.get('/create', productsController.createForm) //Pagina de formulario de creacion de producto
router.post('/create', productsController.create) //Guardado de producto

router.get('/:id', productsController.productDetail) //Pagina de cada producto 

router.get('/edit/:id', productsController.edit) //Pagina de formulario de edicion
router.put('/edit/:id', productsController.update) //Pagina de almacenamiento de edicion

router.delete('/delete/:id', (req, res) => {
    res.send('eliminado')
})


module.exports = router;