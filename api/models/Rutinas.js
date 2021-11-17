
module.exports = (sequelize, DataTypes) => {
    const Rutinas = sequelize.define("Rutinas",{
        nombre:{
            type:DataTypes.STRING,
            allowNull: false,
        },
        intensidad:{
            type:DataTypes.INTEGER,
            allowNull: false,
        },
        tiempo:{
            type:DataTypes.INTEGER,
            allowNull: false,
        },
        idUsuario:{
            type:DataTypes.INTEGER(11),
            allowNull: false,
            references:{
                model: "Usuarios",
                key: "id"
            },
            onUpdate: 'CASCADE',
            onDelete: 'CASCADE',
        },
        foto:{
            type:DataTypes.STRING
        },
        video:{
            type:DataTypes.STRING
        }
        
       
               
    })

    return Rutinas
}