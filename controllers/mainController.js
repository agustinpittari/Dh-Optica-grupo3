const fs = require('fs');
const path = require('path');
const db = require('../database/models')

const controller = {
    index:  (req, res) => {
        db.productos.findAll({
            include: ['marca', 'categoria']
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