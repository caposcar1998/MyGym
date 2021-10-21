

module.exports = (sequelize, DataTypes) => {
    const EvaluacionRutinas = sequelize.define("EvaluacionRutinas",{
        calificacion:{
            type:DataTypes.INTEGER,
            allowNull: false,

        },
        cansancio:{
            type:DataTypes.INTEGER,
            allowNull: false,

        },
        dificultad:{
            type:DataTypes.INTEGER,
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
        idUsuario:{
            type:DataTypes.INTEGER(11),
            allowNull: false,
            references:{
                model: "usuarios",
                key: "id"
            },
        },
                      
    })

    return EvaluacionRutinas
}