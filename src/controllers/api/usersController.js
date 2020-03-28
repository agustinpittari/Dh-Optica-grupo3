const bcrypt = require('bcrypt')
const { check, validationResult, body } = require('express-validator')
const db = require('../../database/models')

module.exports = {
    list: (req, res) => {
        db.usuarios.findAll()
        .then(usuarios => {
            dataUsuarios = []
            for(let i = 0; i < usuarios.length; i++) {
                usuarios[i].setDataValue("endpoint", "/api/users/" + usuarios[i].id)

                dataUsuarios.push({
                    id:usuarios[i].id,
                    name:usuarios[i].first_name ,
                    email:usuarios[i].email ,
                    detail:'api/users/' + usuarios[i].id 
                })
            }
            let respuesta = {
                meta: {
                    status: 200,
                    count: usuarios.length,
                    url: "/api/users",
                    countByCategory: '',
                },
                data: dataUsuarios

            }
            return res.json(respuesta)
        })
        .catch(function(err){
            console.log(err)
            res.send(err)
        })
    },

    detail: (req, res) => {
        db.usuarios.findByPk(req.params.id)
        .then(usuario => {
            dataUsuario = []
            for(let i = 0; i < usuario.length; i++){
                dataUsuarios.push({
                    id:usuarios[i].id,
                    name:usuarios[i].first_name ,
                    email:usuarios[i].email ,
                    detail:'api/users/' + usuarios[i].id 
                })
            }
            let respuesta = {
                meta: {
                    status: 200,
                    url: "/api/users/" + req.params.id
                },
                data: {
                    usuario
                }
            }
            return res.json(respuesta)
        })
        .catch(function(err){
            console.log(err)
            res.send(err)
        })
    }}