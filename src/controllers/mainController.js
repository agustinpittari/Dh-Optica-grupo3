const db = require('../database/models')

const controller = {
    index:  (req, res) => {
        db.productos.findAll({
            include: ['marcas', 'categorias']
        })
        .then(productos => {
            return res.render('index', {productos: productos})
        })
        .catch(function(err){
            console.log(err)
            res.send(err)
        })
    }
}

module.exports = controller