var express = require("express");
var bodyParser = require("body-parser");
var app = express();
var db = require("./models")
app.use(bodyParser.json());
const cors= require("cors")
const nodemailer = require('nodemailer');
const transporter = nodemailer.createTransport({
    name:"smtp.gmail.com",
    host: 'smtp.gmail.com',
    port: 587,
    auth: {
        user: 'oscardevcaposcar@gmail.com',
        pass: 'labichota'
    }
});

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
    EvaluacionRutinas.findOne({ where: {idRutina: idRutina, idUsuario: idUsuario} }).then(function(eval){
        if(!eval){
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
        }else{
            EvaluacionRutinas.update({
                calificacion: calificacion,
                cansancio : cansancio,
                dificultad : dificultad,
                idRutina: idRutina,
                idUsuario: idUsuario
                }, 
                {where: {id:eval.id}
                }).then((eval)=>{
                    res.status(201).json({response: "Actualizado con éxito"})
                }).catch((error)=>{
                    res.status(500).json({Error: error})
                })
        }
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

app.get("/usuariosId/:idUsuario",function(req,res){
    const idUsuario = req.params.idUsuario 
    Usuarios.findOne({ where: {id: idUsuario} }).then(function(user) {
        if (user != null){
            const resultUser = JSON.stringify(user)
            res.status(200).json({response:resultUser})
        } else {
            res.status(404).json({response:"Usuario no encontrado"})
        }

    })
})

app.delete('/rutinas/rutina/:idRutina', function(req, res){
    const idToDelete = req.params.idRutina;
    console.log("Id to delete: " + idToDelete);

    EjerciciosRutinas.destroy({where: {idRutina: idToDelete}}).then(()=>{
        res.status(201).json({response: 'Rutina destruida'})

    }).catch((error)=>{
        res.status(500).json({error: error});
    })



   
})

app.delete('/rutinas/:idRutina', function(req,res){
    const idToDelete = req.params.idRutina;
    Rutinas.destroy({
        where: {id: idToDelete},force: true
    }).then(()=>{
        res.status(201).json({response: 'Rutina destruida'})
    }).catch((error)=>{
        res.status(500).json({error: error});
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

app.get("/ejercicio/:id",function(req,res){
    const id = req.params.id
    Ejercicios.findOne({ where: {id: id} }).then(function(ejercicio) {
        if (ejercicio != null){
            res.status(200).json({response:ejercicio})
        } else {
            res.status(404).json({response:"Ejercicio no encontrado"})
        }

    })
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


app.get("/evaluacionrutinas/:idUsuario", function(req,res){
    const id = req.params.idUsuario
    EvaluacionRutinas.findAll({ where: {idUsuario: id} }).then(function(evaluacion){
        if(evaluacion != null){
            res.status(200).json({ response:evaluacion })
        } else {
            res.status(404).json({response: "Evaluación no encontrada"})
        }
    })
})

app.get("/rutina/:idRutina", function(req,res){
    const id = req.params.idRutina
    Rutinas.findOne({ where: {id: id} }).then(function(rutina) {
        if (rutina != null){
            res.status(200).json({response:rutina})
        } else {
            res.status(404).json({response:"rutina no encontrado"})
        }

    })
})

app.post("/mandarMensaje", function(req,res){
    const {to,subject,text, html} = req.body
    const mailData = {
        from: 'oscardevcaposcar@gmail.com',  // sender address
          to: to,   // list of receivers
          subject: subject,
          text: text,
          html: html,
        };

    transporter.sendMail(mailData, (error, info) =>{
        if (error) {
            res.status(500).json({response:error})
        }
        res.status(201).json({response:"Correo enviado"})
    })
})





app.post("/rutinas/nuevaRutina",function(req,res){
    console.log("body")
    console.log(req.body)
    const id = req.body.idUsuario
    console.log(id)
    const nombre = req.body.nombre

    const tipoCuerpo = req.body.tipoCuerpo
    const diasGym = req.body.diasGym
    const horasGym = req.body.horasGym
    const intensidad = req.body.intensidad

    const objetivoCuerpo = req.body.objetivoCuerpo

    console.log(tipoCuerpo)

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
       

        //Generar rutina

        
})