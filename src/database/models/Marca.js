module.exports = function(sequelize, dataTypes) {

    let alias = 'marcas'

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
        tableName: 'marcas',
        timestamps: false
    }

    let marcas = sequelize.define(alias, cols, config)

    marcas.associate = function(models){
        marcas.hasMany(models.productos, {
            as: 'productos',
            foreignKey: 'marca_id'
        })
    }

    return marcas
}