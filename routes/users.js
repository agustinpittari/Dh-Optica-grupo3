const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = require('path');
const bcrypt = require('bcrypt')
const { check, validationResult, body } = require('express-validator')

const userController = require('../controllers/userController')
const usersFilePath = path.join(__dirname, '../data/users.json');
const users = JSON.parse(fs.readFileSync(usersFilePath, 'utf-8'));
const guestMiddleware = require('../middlewares/guestMiddleware')
const authMiddleware = require('../middlewares/authMiddleware')


let userCreateValidation = [
    check('first_name').isLength({min: 1}).withMessage('Debes ingresar un nombre'),
    check('last_name').isLength({min: 1}).withMessage('Debes ingresar un apellido'),
    check('password').isLength({min: 6}).withMessage('La contraseña debe tener al menos 6 caracteres'),
    check('email').isEmail().withMessage('Debe ingresar un email valido'),
    body('email').custom(value => {
        for (let i = 0; i < users.length; i++ ){
            if( value == users[i].email){
                return false
            }
        }
        return true
    }).withMessage('El email ya esta en uso')
]
let userLoginValidation = [
    check('password').isLength({min: 6}).withMessage('La contraseña debe tener al menos 6 caracteres'),
    check('email').isEmail().withMessage('Debe ingresar un email valido'),
]

/* GET users listing. */
router.get('/', authMiddleware, userController.index);

router.get('/register', guestMiddleware, userController.registerForm)//Ruta que muestra formulario de creacion de usuario
router.post('/register',userCreateValidation, userController.register)//Ruta para almacenar el usuario 

router.get('/edit/:id', authMiddleware, userController.editForm)//Formulario de edicion
router.put('/edit/:id', userController.edit) //Guardado de usuario editado

router.get('/login', userController.loginForm)//Login de usuario
router.post('/login', userLoginValidation, userController.login)//validacion de login


router.get('/:id', userController.detail)//Detalle de usuario

module.exports = router;
