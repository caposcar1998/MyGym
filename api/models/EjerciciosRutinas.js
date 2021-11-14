

module.exports = (sequelize, DataTypes) => {
    const EjerciciosRutinas = sequelize.define("ejerciciosRutinas",{
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
            onUpdate: 'CASCADE',
            onDelete: 'CASCADE',
        },
        idEjercicio:{
            type:DataTypes.INTEGER(11),
            allowNull: false,
            references:{
                model: "ejercicios",
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

    return EjerciciosRutinas
}