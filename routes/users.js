var express = require('express');
var router = express.Router();
var userController = require('../controllers/userController')

/* GET users listing. */
router.get('/', userController.index);

router.get('/create', userController.createForm)//Ruta que muestra formulario de creacion de usuario
router.post('/create', userController.create)//Ruta para almacenar el usuario 

router.get('/edit/:id', userController.editForm)//Formulario de edicion
router.put('/edit/:id', userController.edit) //Guardado de usuario editado

router.get('/login', userController.loginForm)//Login de usuario
router.post('/login', userController.login)//validacion de login

router.get('/:id', userController.detail)//Detalle de usuario
module.exports = router;
