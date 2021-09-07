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
const {Usuarios} = require("./models");


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
// Post de registrar usuario
app.post("/signup", function (req, res) {
    return res.status(201).json({ registered: "Se ha recibido la información" });
});

// Post de mandar token
app.post("/login", function (req, res) {
    return res.status(201).json({ registered: toString(res) });
});

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