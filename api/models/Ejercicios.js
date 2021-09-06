
module.exports = (sequelize, DataTypes) => {
    const Ejercicios = sequelize.define("Ejercicios",{
        nombre:{
            type:DataTypes.STRING,
            allowNull: false,
            validate: {
                noteEmpty: true
            }
        },
        equipo:{
            type:DataTypes.STRING,
            allowNull: false,
            validate: {
                noteEmpty: true
            }
        },
        tipo:{
            type:DataTypes.STRING,
            allowNull: false,
            validate: {
                noteEmpty: true
            }
        },
        partePrincipal:{
            type:DataTypes.INTEGER(11),
            allowNull: false,
            validate: {
                noteEmpty: true
            },
        },
        parteSecundaria:{
            type:DataTypes.INTEGER(11),
        },
        parteTerciaria:{
            type:DataTypes.INTEGER(11)
        }

        
       
               
    })

    return Ejercicios
}