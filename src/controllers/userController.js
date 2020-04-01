const bcrypt = require('bcrypt')
const { check, validationResult, body } = require('express-validator')
const db = require('../database/models')

module.exports = {
    index: (req, res) => {
        db.usuarios.findAll()
        .then(function(users){
            res.render('User/userList', {usuarios: users})
        })
    },
    registerForm: (req, res) => {
        res.render('User/userRegister')
    },
    register: (req, res) => {
        let errors = validationResult(req)
        
        if(errors.isEmpty()){
            
            let usuario = {
                first_name : req.body.first_name,
                last_name : req.body.last_name,
                email : req.body.email,
                gender_id: req.body.gender,
                password: bcrypt.hashSync(req.body.password, 10)
            }

            db.usuarios.create(usuario)
            .then(function () {
                res.redirect('/users')
            })
        } else {
            return res.render('User/userRegister' ,{errors: errors.errors, data: req.body})
        }
    },
    editForm: (req, res) => {
        db.usuarios.findByPk(req.params.id)
        .then(usuario => {
            res.render('User/userEdit', {usuario: usuario})
        })
    },
    edit: (req, res) => {
        db.usuarios.update({
            first_name : req.body.first_name,
                last_name : req.body.last_name,
                email : req.body.email,
                gender_id: req.body.gender,
                password: bcrypt.hashSync(req.body.password, 10)
        },
        {
            where: {
                id: req.params.id
            }
        })
        .then(users => {
            res.redirect ('/users/' + req.params.id)
        })
    },
    detail: (req, res) => {
      db.usuarios.findByPk(req.params.id)
      .then(usuario => {
        res.render('User/userDetail', {usuario: usuario})
      })
    },
    loginForm: (req, res) => {
        
    },
    login: (req, res) => {
        let errors = validationResult(req)
        
        if(errors.isEmpty()){
            db.usuarios.findOne({where: {email: req.body.email}})
            .then(function(user){
                if(!user) {
                    return res.render('User/userlogin', {
                        errors: [{msg:'El email no es valido'}]
                    })
                } 
                
                if(bcrypt.compareSync(req.body.password, user.password)){
                    delete user.password
                    req.session.usuarioLogueado = user
                } else {
                    return res.render('User/userlogin', {
                        errors: [{msg:'Credenciales invalidas'}]
                    })
                }

                if (req.body.recordame != undefined){
                    res.cookie('recordame', user.email, {maxAge: 120 * 100 * 100 * 100})
                }

                res.redirect('/users')
            })
        } else {
            return res.render('User/userLogin' ,{errors: errors.errors, data: req.body})
        }
    },

    logout: function (req, res) {
        req.session.destroy()

        return res.redirect('/users/login')
    }
}