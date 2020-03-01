const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = require('path');

const userController = require('../controllers/userController')
const usersFilePath = path.join(__dirname, '../data/users.json');
const users = JSON.parse(fs.readFileSync(usersFilePath, 'utf-8'));
const guestMiddleware = require('../middlewares/guestMiddleware')
const authMiddleware = require('../middlewares/authMiddleware')
const userCreateMiddleware = require('../middlewares/userCreateMiddleware')
const userLoginMiddleware = require('../middlewares/userLoginMiddleware')



/* GET users listing. */
router.get('/', authMiddleware, userController.index);

router.get('/register', guestMiddleware, userController.registerForm)//Ruta que muestra formulario de creacion de usuario
router.post('/register',userCreateMiddleware, userController.register)//Ruta para almacenar el usuario 

router.get('/edit/:id', authMiddleware, userController.editForm)//Formulario de edicion
router.put('/edit/:id', userController.edit) //Guardado de usuario editado

router.get('/login', guestMiddleware, userController.loginForm)//Login de usuario
router.post('/login', userLoginMiddleware, userController.login)//validacion de login

router.get('/logout', userController.logout)


router.get('/:id', userController.detail)//Detalle de usuario

module.exports = router;
