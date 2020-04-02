module.exports = function(sequelize, dataTypes) {
    let alias = 'usuarios'

    let cols ={
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            alowNull: false
        },
        first_name: {
            type: dataTypes.STRING,
            alowNull: false
        },
        last_name: {
            type: dataTypes.STRING,
            alowNull: false
        },
        email: {
            type: dataTypes.STRING,
            alowNull: false
        },
        gender_id: {
            type: dataTypes.INTEGER,
            alowNull: false
        },
        password: {
            type: dataTypes.STRING,
            alowNull: false
        },
        img: {
            type: dataTypes.STRING,
            alowNull: true
        },
        img_path: {
            type: dataTypes.INTEGER,
            alowNull: true
        }
}

let config = {
    tableName: 'usuarios',
    timestamps: false,
    underscored: true
}

let usuarios = sequelize.define(alias, cols, config)

    return usuarios
}