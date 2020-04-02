const db = require('../database/models')
const { Op } = require("sequelize");

const controller = {
    products: (req, res) => {
        db.productos.findAll({
            include: ['marcas', 'categorias']
        })
        .then(productos => {
            return res.render('Product/productos', {productos: productos})
        })
        .catch(function(err){
            console.log(err)
            res.send(err)
        })
    },
    search: (req, res) => {
        db.productos.findAll({
            where: {
                nombre: {
                    [Op.substring]: req.query.buscar
                }
            }
        })
        .then(resultados => {
            res.render('Product/productos', {productos: resultados})
        })
        .catch(function(err){
            console.log(err)
            res.send(err)
        })
    },
    productDetail: (req, res) => {
        db.productos.findByPk(req.params.id,
            {
                include: ['marcas', 'categorias']
            })
        .then(producto => {
            return res.render('Product/details', {
                producto: producto,
                usuarioLogueado: req.session.usuarioLogueado
            })
        })
        .catch(function(err){
            console.log(err)
            res.send(err)
        })
    },
    createForm: (req, res) => {
        db.categorias.findAll()
        .then(function(categorias){
            db.marcas.findAll()
            .then(function(marcas){
                return res.render('Product/agregar-producto', {categorias: categorias, marcas: marcas})
            })
        })
        .catch(function(err){
            console.log(err)
            res.send(err)
        })
    },
    storage: (req, res, next) => {
        let ruta = req.files[0].path
        let rutaImg = ruta.slice(7)
        
        db.productos.create({
            nombre : req.body.nombre,
            descripcion : req.body.descripcion,
            categoria_id : req.body.categoria,
            marca_id: req.body.marca,
            precio : req.body.precio,
            img: req.files[0].filename,
            img_path: rutaImg
        })
        .then(user => {
            res.redirect('/products')
        })
        .catch(function(err){
            console.log(err)
            res.send(err)
        })   
    },
    
    edit: (req, res) => {
        db.productos.findByPk(req.params.id,
            {
                include: ['marcas','categoriasdo']
            })
            .then(producto => {
                db.categorias.findAll()
                .then(function(categorias){
                    db.marcas.findAll()
                    .then(function(marcas){
                        return res.render('Product/editproduct', {producto:producto, categorias: categorias, marcas: marcas})
                    })
                })
            })
            .catch(function(err){
                console.log(err)
                res.send(err)
            }) 
        },
        
        update: (req,res, next) => {
            let ruta = req.files[0].path
            let rutaImg = ruta.slice(7)
            
            db.productos.update({
                nombre : req.body.nombre,
                descripcion : req.body.descripcion,
                categoria_id : req.body.categoria,
                marca_id: req.body.marca,
                precio : req.body.precio,
                img: req.files[0].filename,
                img_path: rutaImg
            },
            {
                where: {
                    id: req.params.id
                }
            })
            .then(producto => {
                res.redirect('/products')
            })
            .catch(function(err){
                console.log(err)
                res.send(err)
            }) 
        },
        delete: (req, res) => {
            db.productos.destroy({
                where: {
                    id: req.params.id
                }
            })
            .then(producto => {
                return res.redirect('/products')
            })
            .catch(function(err){
                console.log(err)
                res.send(err)
            }) 
        }
    }
    
    module.exports = controller