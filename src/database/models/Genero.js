module.exports = function(sequelize, dataTypes) {

    let alias = 'generos'

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
        tableName: 'generos',
        timestamps: false
    }

    let generos = sequelize.define(alias, cols, config)

    generos.associate = function(models){
        generos.hasMany(models.usuarios, {
            as: 'generos',
            foreignKey: 'gender_id'
        })
    }

    return generos
}