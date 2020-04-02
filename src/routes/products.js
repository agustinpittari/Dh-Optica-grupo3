const express = require('express');
const router = express.Router();
const productsController = require('../controllers/productsController')
const multer = require('multer')
const path = require('path')

var storage = multer.diskStorage({
    destination:function(req,file,cb){
        cb(null, 'public/images')
    },
    filename: function(req,file,cb){
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
    }
})
var upload = multer({storage: storage})

const authMiddleware = require('../middlewares/authMiddleware')

router.get('/', productsController.products) //Todos los productos

router.get('/search', productsController.search)

router.get('/create', authMiddleware, productsController.createForm) //Formulario de creacion de producto
router.post('/create', upload.any(),productsController.storage) //Guardado de producto

router.get('/edit/:id', authMiddleware, productsController.edit) //Formulario de edicion
router.put('/edit/:id', upload.any(),productsController.update) //Almacenamiento de edicion

router.get('/:id', productsController.productDetail) //Detalle de producto 

router.delete('/delete/:id', authMiddleware, productsController.delete)


module.exports = router;