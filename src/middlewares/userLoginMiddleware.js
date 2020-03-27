const { check, validationResult, body } = require('express-validator')

let userLoginValidation = [
    check('password').isLength({min: 6}).withMessage('La contraseña debe tener al menos 6 caracteres'),
    check('email').isEmail().withMessage('Debe ingresar un email valido'),
]

module.exports = userLoginValidation