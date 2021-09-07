

module.exports = (sequelize, DataTypes) => {
    const EjerciciosRutinas = sequelize.define("EjerciciosRutinas",{
        peso:{
            type:DataTypes.DOUBLE,
            allowNull: false,
            validate: {
                noteEmpty: true
            }
        },
        repeticiones:{
            type:DataTypes.INTEGER,
            allowNull: false,
            validate: {
                noteEmpty: true
            }
        },
        series:{
            type:DataTypes.INTEGER,
            allowNull: false,
            validate: {
                noteEmpty: true
            }
        },
        tiempo:{
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                noteEmpty: true
            }
        },
        idRutina:{
            type:DataTypes.INTEGER(11),
            allowNull: false,
            references:{
                model: "rutinas",
                key: "id"
            },
        },
        idEjercicio:{
            type:DataTypes.INTEGER(11),
            allowNull: false,
            references:{
                model: "ejercicios",
                key: "id"
            },
        },
        foto:{
            type:DataTypes.STRING
        },
        video:{
            type:DataTypes.STRING
        }
        
       
               
    })

    return EjerciciosRutinas
}