module.exports = (sequelize, DataTypes) => {
    const Usuarios = sequelize.define("Usuarios",{
        nombre:{
            type:DataTypes.STRING,
            allowNull: false,
            validate: {
                noteEmpty: true
            }
        },
        apellido:{
            type:DataTypes.STRING,
            allowNull: false,
            validate: {
                noteEmpty: true
            }
        },
        edad:{
            type:DataTypes.INTEGER,
            allowNull: false,
            validate: {
                noteEmpty: true
            }
        },
        tipoCuerpo:{
            type:DataTypes.STRING,
            allowNull: false,
            validate: {
                noteEmpty: true
            }
        },
        diasGym:{
            type:DataTypes.INTEGER,
            allowNull: false,
            validate: {
                noteEmpty: true
            }
        },
        horasGym:{
            type:DataTypes.INTEGER,
            allowNull: false,
            validate: {
                noteEmpty: true
            }
        },
        intensidad:{
            type:DataTypes.STRING,
            allowNull: false,
            validate: {
                noteEmpty: true
            }
        },
        objetivoCuerpo:{
            type:DataTypes.STRING,
            allowNull: false,
            validate: {
                noteEmpty: true
            }
        },
        foto:{
            type:DataTypes.STRING,
            allowNull: true,
            validate: {
                noteEmpty: true
            }
        },
        idAuth:{
            type:DataTypes.STRING,
            allowNull: false,
            validate: {
                noteEmpty: true
            }
        }        
    })

    return Usuarios
}