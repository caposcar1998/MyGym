
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
            type:DataTypes.STRING,
            allowNull: false,
            validate: {
                noteEmpty: true
            },
        },
        parteSecundaria:{
            type:DataTypes.STRING,
        },
        parteTerciaria:{
            type:DataTypes.STRING,
        },
        foto:{
            type:DataTypes.STRING
        },
        descripcion:{
            type:DataTypes.TEXT,
            allowNull:false,
        }

        
       
               
    })

    return Ejercicios
}