const fs = require('fs');
const path = require('path');
const productsFilePath = path.join(__dirname, '../data/productos.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const controller = {
    products: (req, res) => {
        res.render('Product/productos', {productos: products})
    },
    productDetail: (req, res) => {
        let id = req.params.id
        let producto = products.find(p => p.id == id)
        res.render('Product/details', {
            producto: producto,
            usuarioLogueado: req.session.usuarioLogueado
        })
    },
    createForm: (req, res) => {
        res.render('Product/agregar-producto')
    },
    create: (req, res) => {

        let producto = {
            id : products.length + 1,
            name : req.body.name,
            description : req.body.description,
            category : req.body.category,
            color : req.body.colors,
            price : req.body.price
        }
        products.push(producto)

        fs.writeFileSync(productsFilePath, JSON.stringify(products))

        res.redirect('/products')
    },
    edit: (req, res) => {
		let producto = products.find(function (p) {
			return p.id == req.params.id
		})

        res.render('Product/editProduct', {producto: producto})
    },
    update: (req,res) => {
		let arrayIndex

		let product = products.find(function (p, index) {
			if (p.id == req.params.id) {
				arrayIndex = index
				return true
			}

			return false
		})
		
		let editado = {
			...product,
			...req.body
		}

		products[arrayIndex] = editado

		fs.writeFileSync(productsFilePath, JSON.stringify(products))

		res.redirect('/products/' + req.params.id)
    },
}

module.exports = controller