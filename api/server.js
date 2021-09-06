var express = require("express");
var bodyParser = require("body-parser");
var app = express();
var db = require("./models")
app.use(bodyParser.json());
const {Usuarios} = require("./models")


var distDir = __dirname + "/dist/";
app.use(express.static(distDir));


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