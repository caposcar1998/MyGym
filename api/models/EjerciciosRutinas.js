

module.exports = (sequelize, DataTypes) => {
    const EjerciciosRutinas = sequelize.define("EjerciciosRutinas",{
        peso:{
            type:DataTypes.DOUBLE,
            allowNull: false,

        },
        repeticiones:{
            type:DataTypes.INTEGER,
            allowNull: false,

        },
        series:{
            type:DataTypes.INTEGER,
            allowNull: false,

        },
        tiempo:{
            type: DataTypes.INTEGER,
            allowNull: false,

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