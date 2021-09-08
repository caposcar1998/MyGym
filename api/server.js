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




app.get("/api/status", function (req, res) {
    res.status(200).json({ status: "UP" });
});

app.get("/hello", function (req, res) {
    res.status(200).json({ hola: "hola" });
});

app.get("/base",function(req, res){
    Usuarios.findAll().then((users)=>{
        res.status(200).json({usuarios:users})
    })
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