const fs = require('fs');
const path = require('path');
const productos = require('../data/productos.json')

const controller = {
    index: (req, res) => {
        res.render('index', {
            title: 'Optica DH',
            productos: productos,
    })
    },
}

module.exports = controller