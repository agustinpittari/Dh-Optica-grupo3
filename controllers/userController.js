const fs = require('fs');
const path = require('path');
const bcrypt = require('bcrypt')
const { check, validationResult, body } = require('express-validator')
const models = require('../database/models')

const usersFilePath = path.join(__dirname, '../data/users.json');
const users = JSON.parse(fs.readFileSync(usersFilePath, 'utf-8'));

module.exports = {
    index: (req, res) => {
        models.usuarios.findAll()
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

            models.usuarios.create(usuario)
            .then(function () {
                res.redirect('/users')
            })
        } else {
            return res.render('User/userRegister' ,{errors: errors.errors, data: req.body})
        }
        
        
    },
    editForm: (req, res) => {
        let usuario = users.find(function(u){
            return u.id == req.params.id
        })
        
        res.render('User/userEdit', {usuario: usuario})
    },
    edit: (req, res) => {
        let arrayIndex
        
        let user = users.find(function (p, index) {
            if (p.id == req.params.id) {
                arrayIndex = index
                return true
            }
            
            return false
        })
        
        let editado = {
            ...user,
            first_name : req.body.first_name,
            last_name : req.body.last_name,
            email : req.body.email,
            gender: req.body.gender,
            password: bcrypt.hashSync(req.body.password, 10)
        }
        
        users[arrayIndex] = editado
        
        fs.writeFileSync(usersFilePath, JSON.stringify(users))
        
        res.redirect('/users/' + req.params.id)
    },
    detail: (req, res) => {
        let usuario = users.find(function(u){
            return u.id == req.params.id
        })
        res.render('User/userDetail', {usuario: usuario})
    },
    loginForm: (req, res) => {
        res.render('User/userLogin')
        
    },
    login: (req, res) => {
        let errors = validationResult(req)
        
        if(errors.isEmpty()){
            models.usuarios.findOne({where: {email: req.body.email}})
            .then(function(user){
                if(! user) {
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
                    res.cookie('recordame', user.email, {maxAge: 120000})
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