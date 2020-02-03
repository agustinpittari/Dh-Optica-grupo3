const fs = require('fs');
const path = require('path');
const bcrypt = require('bcrypt')
const { check, validationResult, body } = require('express-validator')

const usersFilePath = path.join(__dirname, '../data/users.json');
const users = JSON.parse(fs.readFileSync(usersFilePath, 'utf-8'));

module.exports = {
    index: (req, res) => {
        res.render('User/userList', {usuarios: users})
    },
    registerForm: (req, res) => {
        res.render('User/userRegister')
    },
    register: (req, res) => {
        let errors = validationResult(req)
        
        if(errors.isEmpty()){
            
            let usuario = {
                id : users.length + 1,
                first_name : req.body.first_name,
                last_name : req.body.last_name,
                email : req.body.email,
                gender: req.body.gender,
                password: bcrypt.hashSync(req.body.password, 10)
            }
            users.push(usuario)
            
            fs.writeFileSync(usersFilePath, JSON.stringify(users))
            
            res.redirect('/users')
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
            let usuarioALoguearse
            for (let i = 0; i < users.length; i++) {
                if (req.body.email == users[i].email){
                    if(bcrypt.compareSync(req.body.password, users[i].password)){  
                        usuarioALoguearse = users[i]
                        break;
                    } 
                }
            }
            
            if(usuarioALoguearse == undefined) {
                return res.render('User/userlogin', {errors: [
                    {msg:'Credenciales invalidas'}
                ]})
            }
            
            req.session.usuarioLogueado = usuarioALoguearse

            if (req.body.recordame != undefined){
                res.cookie('recordame',
                usuarioALoguearse.email, {maxAge: 120000})
            }
            res.redirect('/users/' + req.session.usuarioLogueado.id)
        } else {
            return res.render('User/userLogin' ,{errors: errors.errors, data: req.body})
        }
    }
}