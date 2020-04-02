const db = require('../../database/models')
const { Op } = require("sequelize");

const controller = {
    list: (req, res) => {
        db.productos.findAll({
            include: ['marcas', 'categorias']
        })
        .then(productos => {
            db.categorias.findAll()
            .then(categorias=> {
                dataProductos = []
                let array = []
                for(let i = 0; i < productos.length; i++) {
                    for(let j = 0; j < categorias.length; j++){
                        if(categorias[j].nombre == productos[i].categorias.nombre){
                            array.push(productos[i].categorias.nombre)
                        }
                    }
                    dataProductos.push({
                        id:productos[i].id,
                        name:productos[i].nombre ,
                        description:productos[i].descripcion ,
                        category: productos[i].categorias.nombre,
                        detail: "/api/products/" + productos[i].id
                    })
                }

                var repetidos = {};

                array.forEach(function(numero){
                repetidos[numero] = (repetidos[numero] || 0) + 1;
                    });

                console.log(repetidos);
                let respuesta = {
                    meta: {
                        status: 200,
                        count: productos.length,
                        url: "/api/products",
                        countByCategory: repetidos
                    },
                    data: dataProductos
    
                }
                return res.json(respuesta)
            })

        })
        .catch(function(err){
            console.log(err)
            res.send(err)
        })
    },
    find: (req, res) => {
        db.productos.findByPk(req.params.id,
            {
                include: ['marcas', 'categorias']
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
    }
    
module.exports = controller