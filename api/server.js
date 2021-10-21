var express = require("express");
var bodyParser = require("body-parser");
var app = express();
var db = require("./models")
app.use(bodyParser.json());
const cors= require("cors")
var corsOptions = {
    origin:"*",
    optionSuccessStatus: 200,
}
const {Usuarios} = require("./models")
const {Ejercicios} = require("./models") 
const ectomorfo = require("./workouts/Ectomorfo.js")
const endomorfo = require("./workouts/Endomorfo.js")
const mesoformo = require("./workouts/Mesomorfo.js")
const {Rutinas} = require("./models")
const {EjerciciosRutinas} = require("./models");
const { EvaluacionRutinas } = require("./models");

var distDir = __dirname + "/dist/";
app.use(express.static(distDir));
app.use(cors(corsOptions));
app.options("*",cors())

db.sequelize.sync().then((req)=>{
    var server = app.listen(process.env.PORT || 8080, function () {
        var port = server.address().port;
        console.log("App now running on port", port);
    });
})

app.post("/usuarios",function(req,res){
    const correo = req.body.correo
    const idAuth = req.body.idAuth
    Usuarios.create({
        correo: correo,
        idAuth: idAuth
    }).then((users)=>{
        res.status(201).json({response:"Creado con éxito"})
    }).catch((error)=>{
        res.status(500).json({Error:error})
    })
});

app.post("/evaluacionrutinas", function(req,res){
    const calificacion = req.body.calificacion;
    const cansancio = req.body.cansancio;
    const dificultad = req.body.dificultad;
    const idRutina = req.body.idRutina;
    const idUsuario = req.body.idUsuario;
    console.log('Calif: ' + calificacion);
    console.log('Cansancio: ' + cansancio);
    console.log('dificultad: ' + dificultad);
    console.log("IdRutina " + idRutina);
    console.log("idUsuar " + idUsuario);
    EvaluacionRutinas.create({
        calificacion: calificacion,
        cansancio : cansancio,
        dificultad : dificultad,
        idRutina: idRutina,
        idUsuario: idUsuario
    }).then((eval)=>{
        res.status(201).json({response: "Creado con éxito"})
    }).catch((error)=>{
        res.status(500).json({Error: error})
    })
});


app.get("/usuarios/:correo",function(req,res){
    //Para borrar la referencia de la rutina al calificarla
    const paraCorreo = req.params.correo 
    Usuarios.findOne({ where: {correo: paraCorreo} }).then(function(user) {
        if (user != null){
            const resultUser = JSON.stringify(user)
            res.status(200).json({response:resultUser})
        } else {
            res.status(404).json({response:"Usuario no encontrado"})
        }

    })
})

app.delete('/rutinas/rutina/:idRutina', function(req, res){
    console.log("Rutina delete");
    const idToDelete = req.params.idRutina
    Rutinas.findOne({where: {id: idToDelete}}).then(function(routine) {
        if(routine){
            Rutinas.destroy(routine);
            res.status(200).json({response: "Se ha eliminado correctamente el usuario"});
        }else{
            res.status(500).json({response:"Error al eliminar rutina"});
        }
    }) 
        
})

app.post("/usuarios/:correo",function(req,res){
    const correo = req.body.correo
    const idAuth = req.body.idAuth
    const paraCorreo = req.params.correo
    Usuarios.findOne({ where: {correo: paraCorreo} }).then(function(project) {
        if(!project){
            Usuarios.create({
                correo: correo,
                idAuth: idAuth
            }).then((users)=>{
                res.status(201).json({response:"Creado con éxito"})
            }).catch((error)=>{
                res.status(500).json({Error:error})
            })
        }else{
            console.log(" existe")
            res.status(200).json({Mensaje:"Existe el usuario"})
        }
    })
})



app.put("/usuarios/:idUsuario",function(req,res){
    const id = req.params.idUsuario
    const nombre = req.body.nombre
    const apellido = req.body.apellido
    const edad = req.body.edad
    const tipoCuerpo = req.body.tipoCuerpo
    const diasGym = req.body.diasGym
    const horasGym = req.body.horasGym
    const intensidad = req.body.intensidad
    const foto = req.body.intensidad
    const objetivoCuerpo = req.body.objetivoCuerpo
    Usuarios.update(
        {
        nombre:nombre,
        apellido:apellido,
        edad:edad,
        tipoCuerpo:tipoCuerpo,
        diasGym:diasGym,
        horasGym:horasGym,
        intensidad:intensidad,
        foto:foto,
        objetivoCuerpo:objetivoCuerpo
        }, 
        {where: {id:id}
        })
        .then(()=>{
            if (tipoCuerpo == "Ectomorfo"){
                ectomorfo.crearRutinaEctomorfo(objetivoCuerpo, diasGym, horasGym, intensidad, id, nombre).then(resu =>
                 {res.status(200).json({Mensaje:"se crea"})}
                 )
             } else if (tipoCuerpo == "Endomorfo"){
                 endomorfo.crearRutinaEndomorfo(objetivoCuerpo, diasGym, horasGym, intensidad, id, nombre).then(resu =>
                     {res.status(200).json({Mensaje:"se crea"})}
                     )
             } else{
                 mesoformo.crearRutinaMesoformo(objetivoCuerpo, diasGym, horasGym, intensidad, id, nombre).then(resu =>
                     {res.status(200).json({Mensaje:"se crea"})}
                     )
             }
        })
        .catch((err)=>{res.status(500).json({Error:err})})

        //Generar rutina

        
})

app.get("/ejercicios",function(req,res){
    Ejercicios.findAll()
    .then((ejercicios)=>{res.status(200).json({Mensaje:ejercicios})})
    .catch((err)=>{res.status(500).json({Error:err})})
    
    
})

app.get("/rutinas/rutina/:idUsuario",function(req,res){
    const id = req.params.idUsuario
    Rutinas.findOne({ where: {idUsuario: id} }).then(function(ejercicio) {
        if (ejercicio != null){
            res.status(200).json({response:ejercicio})
        } else {
            res.status(404).json({response:"Ejercicio no encontrado"})
        }

    })
})

app.get("/rutinas/:idUsuario",function(req,res){
    const id = req.params.idUsuario
    Rutinas.findAll({ where: {idUsuario: id} }).then(function(ejercicio) {
        if (ejercicio != null){
            res.status(200).json({response:ejercicio})
        } else {
            res.status(404).json({response:"Ejercicio no encontrado"})
        }

    })
})

app.get("/ejerciciosrutinas/:idRutina",function(req,res){
    const id = req.params.idRutina
    EjerciciosRutinas.findAll({ where: {idRutina: id} }).then(function(ejercicio) {
        if (ejercicio != null){
            res.status(200).json({response:ejercicio})
        } else {
            res.status(404).json({response:"Ejercicio no encontrado"})
        }

    })
})

// app.get("/evalucionesRutinas/:idUsuario", function(req,res){
//     const id = req.params.idUsuario
//     EvaluacionRutinas.findAll({ where: {idUsuario: id} }).then(function(evaluacion){
//         if(evaluacion != null){
//             res.status(200).json({ response:evaluacion })
//         } else {
//             res.status(404).json({response: "Evaluación no encontrada"})
//         }
//     })
// 