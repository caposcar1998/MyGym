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

app.get("/usuarios/:correo",function(req,res){
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
        .then((response)=>{res.status(204).json({Status:"Exito al actualizar"})})
        .catch((err)=>{res.status(500).json({Error:err})})
})