
module.exports = (sequelize, DataTypes) => {
    const Rutinas = sequelize.define("Rutinas",{
        nombre:{
            type:DataTypes.STRING,
            allowNull: false,
            validate: {
                noteEmpty: true
            }
        },
        intensidad:{
            type:DataTypes.INTEGER,
            allowNull: false,
            validate: {
                noteEmpty: true
            }
        },
        tiempo:{
            type:DataTypes.INTEGER,
            allowNull: false,
            validate: {
                noteEmpty: true
            }
        },
        idUsuario:{
            type:DataTypes.INTEGER(11),
            allowNull: false,
            references:{
                model: "usuarios",
                key: "id"
            },
        }
        
       
               
    })

    return Rutinas
}