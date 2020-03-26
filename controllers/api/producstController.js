const db = require('../../database/models')
const { Op } = require("sequelize");

const controller = {
    list: (req, res) => {
        db.productos.findAll({
            include: ['marca', 'categoria']
        })
        .then(productos => {
            dataProductos = []
            for(let i = 0; i < productos.length; i++) {
                productos[i].setDataValue("endpoint", "/api/products/" + productos[i].id)

                dataProductos.push({
                    id:productos[i].id,
                    name:productos[i].nombre ,
                    description:productos[i].descripcion ,
                    category: productos[i].categoria.nombre

                })
            }
            let respuesta = {
                meta: {
                    status: 200,
                    count: productos.length,
                    url: "/api/products",
                    countByCategory: '',
                },
                data: dataProductos

            }
            return res.json(respuesta)
        })
        .catch(function(err){
            console.log(err)
            res.send(err)
        })
    },
    find: (req, res) => {
        db.productos.findByPk(req.params.id,
            {
                include: ['marca', 'categoria']
            })
        .then(producto => {
            let respuesta = {
                meta: {
                    status: 200,
                    url: "/api/products/" + req.params.id
                },
                data: {
                    producto
                }
            }

            return res.json(respuesta)
        })
        .catch(function(err){
            console.log(err)
            res.send(err)
        })
    },
    store: (req, res) => {
        db.productos.create({
            nombre : req.body.nombre,
            descripcion : req.body.descripcion,
            categoria_id : req.body.categoria,
            marca_id: req.body.marca,
            precio : req.body.precio
        })
        .then(user => {
            res.json({status:200})
        })
        .catch(function(err){
            console.log(err)
            res.send(err)
        })   
    },
    }
    
module.exports = controller