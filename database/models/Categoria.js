module.exports = function(sequelize, dataTypes) {

    let alias = 'categorias'

    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            alowNull: false
        },
        nombre: {
            type: dataTypes.STRING,
            alowNull: false,
        }
    }

    let config = {
        tableName: 'categorias',
        timestamps: false
    }

    let categorias = sequelize.define(alias, cols, config)

    categorias.associate = function(models){
        categorias.hasMany(models.productos, {
            as: 'productos',
            foreignKey: 'categoria_id'
        })
    }

    return categorias
}