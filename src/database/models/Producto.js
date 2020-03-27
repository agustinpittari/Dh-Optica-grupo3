module.exports = function(sequelize, dataTypes) {

    let alias = 'productos'

    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            alowNull: false
        },
        nombre: {
            type: dataTypes.STRING,
            alowNull: false
        },
        descripcion: {
            type: dataTypes.STRING,
            alowNull: false
        },
        categoria_id: {
            type: dataTypes.INTEGER,
            alowNull: true
        },
        precio: {
            type: dataTypes.DECIMAL(8,2),
            alowNull: true
        },
        img: {
            type: dataTypes.STRING,
            alowNull: true
        },
        marca_id: {
            type: dataTypes.INTEGER,
            alowNull: true
        }
    }

    let config = {
        tableName: 'productos',
        timestamps: false,
    }

    let productos = sequelize.define(alias, cols, config)

    productos.associate = function(models){
        productos.belongsTo(models.marcas, {
            as:'marca',
            foreignKey: 'marca_id'
        })

        productos.belongsTo(models.categorias, {
            as:'categoria',
            foreignKey: 'categoria_id'
        })
    }

    return productos
}