const express = require('express');
const router = express.Router();

const userController = require('../controllers/userController')
const guestMiddleware = require('../middlewares/guestMiddleware')
const authMiddleware = require('../middlewares/authMiddleware')
const userCreateMiddleware = require('../middlewares/userCreateMiddleware')
const userLoginMiddleware = require('../middlewares/userLoginMiddleware')
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

/* GET users listing. */
router.get('/', authMiddleware, userController.index);//Lista de usuarios

router.get('/register', guestMiddleware, userController.registerForm)//Ruta que muestra formulario de creacion de usuario
router.post('/register',upload.any(),userCreateMiddleware, userController.register)//Ruta para almacenar el usuario 

router.get('/edit/:id', authMiddleware, userController.editForm)//Formulario de edicion
router.put('/edit/:id', upload.any(),userController.edit) //Guardado de usuario editado

router.get('/login', guestMiddleware, userController.loginForm)//Login de usuario
router.post('/login', userLoginMiddleware, userController.login)//validacion de login

router.get('/logout', userController.logout)//Cerrar sesion


router.get('/:id', userController.detail)//Detalle de usuario

module.exports = router;
