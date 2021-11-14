module.exports = (sequelize, DataTypes) => {
    const Usuarios = sequelize.define("usuarios",{
        nombre:{
            type:DataTypes.STRING,
            allowNull: true,
        },
        correo: {
            type:DataTypes.STRING,
            allowNull: false,
        },
        apellido:{
            type:DataTypes.STRING,
            allowNull: true,
        },
        edad:{
            type:DataTypes.INTEGER,
            allowNull: true,
        },
        tipoCuerpo:{
            type:DataTypes.STRING,
            allowNull: true,
        },
        diasGym:{
            type:DataTypes.INTEGER,
            allowNull: true,
        },
        horasGym:{
            type:DataTypes.INTEGER,
            allowNull: true,
        },
        intensidad:{
            type:DataTypes.STRING,
            allowNull: true,
        },
        objetivoCuerpo:{
            type:DataTypes.STRING,
            allowNull: true,
        },
        foto:{
            type:DataTypes.STRING,
            allowNull: true,
        },
        idAuth:{
            type:DataTypes.STRING,
            allowNull: false,
        }        
    })

    return Usuarios
}