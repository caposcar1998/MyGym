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
const {Rutinas} = require("./models");
const {EjerciciosRutinas} = require("./models")
const {Ejercicios} = require("./models")


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

app.post("/rutinas",function(req,res){
    const id = req.body.idUsuario
    const intensidad = req.body.intensidad
    const tipoCuerpo = req.body.tipoCuerpo
    const diasGym = req.body.diasGym
    const horasGym = req.body.horasGym 
    const objetivoCuerpo = req.body.objetivoCuerpo   

    let generadas = []
    let nombreRutinas
    let intensidadRutina
    let tiempoRutina = horasGym
    let fotoRutina
    let idNuevaRutina

    if (intensidad <= 5 && tipoCuerpo == "Ectomorfo" ){
        objetivoCuerpo == "Bajar de peso" ? intensidadRutina = 4 : objetivoCuerpo == "Ganar volumen" ? intensidadRutina = 8:
        objetivoCuerpo == "Ganar masa muscular" ? intensidadRutina = 10 : intensidadRutina = 3
    }
    if (intensidad > 5 && tipoCuerpo == "Ectomorfo" ){
        objetivoCuerpo == "Bajar de peso" ? intensidadRutina = 5 : objetivoCuerpo == "Ganar volumen" ? intensidadRutina = 9:
        objetivoCuerpo == "Ganar masa muscular" ? intensidadRutina = 9 : intensidadRutina = 5
    }
    if (intensidad <= 5 && tipoCuerpo == "Endomorfo" ){
        objetivoCuerpo == "Bajar de peso" ? intensidadRutina = 10 : objetivoCuerpo == "Ganar volumen" ? intensidadRutina = 5:
        objetivoCuerpo == "Ganar masa muscular" ? intensidadRutina = 2 : intensidadRutina = 7
    }
    if (intensidad > 5 && tipoCuerpo == "Endomorfo" ){
        objetivoCuerpo == "Bajar de peso" ? intensidadRutina = 8 : objetivoCuerpo == "Ganar volumen" ? intensidadRutina = 4:
        objetivoCuerpo == "Ganar masa muscular" ? intensidadRutina = 4 : intensidadRutina = 6
    }
    if (intensidad <= 5 && tipoCuerpo == "Mesoformo" ){
        objetivoCuerpo == "Bajar de peso" ? intensidadRutina = 6 : objetivoCuerpo == "Ganar volumen" ? intensidadRutina = 10:
        objetivoCuerpo == "Ganar masa muscular" ? intensidadRutina = 9 : intensidadRutina = 10
    }
    if (intensidad > 5 && tipoCuerpo == "Endomorfo" ){
        objetivoCuerpo == "Bajar de peso" ? intensidadRutina = 8 : objetivoCuerpo == "Ganar volumen" ? intensidadRutina = 9:
        objetivoCuerpo == "Ganar masa muscular" ? intensidadRutina = 9 : intensidadRutina = 8
    }

    if (diasGym == 1){
        nombreRutinas = "All in one"

        fotoRutina = "https://www.foodspring.es/magazine/wp-content/uploads/2020/11/sixpack-uebung-2.jpg"
        Rutinas.create({
            nombre:nombreRutinas,
            intensidad:intensidadRutina,
            tiempo:tiempoRutina,
            idUsuario:id,
            foto:fotoRutina,
            video:"",
        }).then(rutina =>{
            crearRutinasUno(req,res,rutina.id,tiempoRutina,tipoCuerpo,intensidad)
        })
    } else if (diasGym == 2) {
        nombreRutinas = "Dos x Dos"
        generadas.push("Arriba")
        generadas.push("Debajo")
        fotoRutina = "https://www.dir.cat/blog/wp-content/uploads/2018/01/rutina-ejercicios-abdominales.jpg"
    } else if (diasGym == 3 ) {
        nombreRutinas = "Triple perfecta"
        generadas.push("Brazos")
        generadas.push("Tronco")
        generadas.push("Piernas")
        fotoRutina = "https://imagenes.20minutos.es/files/image_656_370/uploads/imagenes/2020/03/03/hiit.jpeg"
    } else if (diasGym == 4){
        nombreRutinas = "Constancia"
        generadas.push("Brazos")
        generadas.push("Pierna")
        generadas.push("Tronco")
        generadas.push("Espalda")
        fotoRutina = "https://www.instyle.es/medio/2020/04/03/fitness-con-mas-de-50-anos_30a11507_812x541.jpg"
    } else if (diasGym == 5){
        nombreRutinas = "El gym es mi templo"
        generadas.push("Brazos")
        generadas.push("Pierna")
        generadas.push("Pecho")
        generadas.push("Abdomen")
        generadas.push("Espalda")
        fotoRutina = "https://media.revistagq.com/photos/6128869e8a49f53b4b9cfe35/16:9/w_1280,c_limit/exercises-for-men.jpg"
    } else if (diasGym == 6){
        nombreRutinas = "¿Cuál cruda?"
        generadas.push("Brazos")
        generadas.push("Pierna")
        generadas.push("Pecho")
        generadas.push("Abdomen")
        generadas.push("Espalda")
        generadas.push("Cardio")
        fotoRutina = "https://t1.uc.ltmcdn.com/images/6/2/5/rutina_de_ejercicios_para_hacer_en_casa_para_mujeres_45526_600.jpg"
    } else {
        nombreRutinas = "Perrote mayor"
        generadas.push("Brazos")
        generadas.push("Pierna")
        generadas.push("Pecho")
        generadas.push("Abdomen")
        generadas.push("Espalda")
        generadas.push("Cardio")
        generadas.push("Brazos")
        fotoRutina = "https://s03.s3c.es/imag/_v0/770x420/0/e/6/barras-praderas-pruebas-de-coronavirus.jpg"
    }

        
        

})


function crearRutinasUno(req,res,idNuevaRutina,tiempoRutina,tipoCuerpo,intensidad){
    let repeticiones = 0
    let peso = 0
    let series = 0
    let cuartos = (tiempoRutina*60)/5
    intensidad > 5 ? series = 4 : series = 2
    intensidad > 5 ? repeticiones = 12 : repeticiones = 10
    
    Ejercicios.findAll({ where: { partePrincipal: 'Bíceps' } })
    .then((biceps)=>{
        const ejercicioBrazo =  biceps[(Math.random() * biceps.length) | 0]
    EjerciciosRutinas.create({
        peso:5,
        repeticiones:repeticiones,
        series:series,
        tiempo:cuartos,
        idRutina:idNuevaRutina,
        idEjercicio:ejercicioBrazo.id,
        foto:ejercicioBrazo.foto
    })
    .then((a)=>{
    Ejercicios.findAll({ where: { partePrincipal: 'Pectorales' } })
    .then((pecs)=>{
        const ejercicioPecho = pecs[(Math.random() * pecs.length) | 0] 
    EjerciciosRutinas.create({
        peso:5,
        repeticiones:repeticiones,
        series:series,
        tiempo:cuartos,
        idRutina:idNuevaRutina,
        idEjercicio:ejercicioPecho.id,
        foto:ejercicioPecho.foto
    })
    .then((a)=>{
    Ejercicios.findAll({ where: { partePrincipal: 'Hombros' } }) 
    .then((hom)=>{
        const ejercicioHombro = hom[(Math.random() * hom.length) | 0]
        console.log(ejercicioHombro)
    EjerciciosRutinas.create({
        peso:5,
        repeticiones:repeticiones,
        series:series,
        tiempo:cuartos,
        idRutina:idNuevaRutina,
        idEjercicio:ejercicioHombro.id,
        foto:ejercicioHombro.foto
    })
    .then((a)=>{
    Ejercicios.findAll({ where: { partePrincipal: 'Abdomen' } })
    .then((ab)=>{
       const ejercicioAbdomen = ab[(Math.random() * ab.length) | 0]
    EjerciciosRutinas.create({
    peso:5,
    repeticiones:repeticiones,
    series:series,
    tiempo:cuartos,
    idRutina:idNuevaRutina,
    idEjercicio:ejercicioAbdomen.id,
    foto:ejercicioAbdomen.foto
    })
    .then((a)=>{
    Ejercicios.findAll({ where: { partePrincipal: 'Cuadriceps' } })
    .then((cua)=>{
        const ejercicioCuadriceps = cua[(Math.random() * cua.length) | 0]
    EjerciciosRutinas.create({
        peso:5,
        repeticiones:repeticiones,
        series:series,
        tiempo:cuartos,
        idRutina:idNuevaRutina,
        idEjercicio:ejercicioCuadriceps.id,
        foto:ejercicioCuadriceps.foto
        })
        .then((a)=>{
    Ejercicios.findAll({ where: { partePrincipal: 'Todo' } })
    .then((todo)=>{
        const ejercicioCardio = todo[(Math.random() * todo.length) | 0]
        EjerciciosRutinas.create({
            peso:0,
            repeticiones:1,
            series:0,
            tiempo:cuartos,
            idRutina:idNuevaRutina,
            idEjercicio:ejercicioCardio.id,
            foto:ejercicioCardio.foto
            })
            .then((a)=>{
        res.status(201).json({response:"Rutina con ejercicios"})
    })
    })
    })
    })
    })
    })
    })
    })
    })
    })
    })
    })
}
    


    
