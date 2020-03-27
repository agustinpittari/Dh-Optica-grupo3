const { check, validationResult, body } = require('express-validator')

let userCreateValidation = [
    check('first_name').isLength({min: 1}).withMessage('Debes ingresar un nombre'),
    check('last_name').isLength({min: 1}).withMessage('Debes ingresar un apellido'),
    check('password').isLength({min: 6}).withMessage('La contraseña debe tener al menos 6 caracteres'),
    check('email').isEmail().withMessage('Debe ingresar un email valido'),
    //body('email').withMessage('El email ya esta en uso')
]

module.exports = userCreateValidation