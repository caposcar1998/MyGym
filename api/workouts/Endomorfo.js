
const {Ejercicios} = require("../models") 
const {EjerciciosRutinas} = require ("../models")
const {Rutinas} = require ("../models")

async function crearRutinaEndomorfo(objetivoCuerpo, diasGym, horasGym, intensidad, idUsuario, nombreUsuario){
    if (objetivoCuerpo == "Bajar de Peso"){
        await rutinaBajarDePeso(diasGym, horasGym, intensidad, idUsuario, nombreUsuario, objetivoCuerpo)
    }if (objetivoCuerpo == "Tonificar") {
        await rutinaTonificar(diasGym, horasGym, intensidad, idUsuario, nombreUsuario, objetivoCuerpo)
    } else {
        await rutinaGanarMasa(diasGym, horasGym, intensidad, idUsuario, nombreUsuario, objetivoCuerpo)
    }
}

function rutinaBajarDePeso(diasGym, horasGym, intensidad, idUsuario, nombreUsuario, objetivoCuerpo){

    intensidadEjercicios = calcularIntensidad(intensidad)
    repeticiones = intensidadEjercicios.repeticiones
    series = intensidadEjercicios.series
    tiempo = 5
    peso = 6
    tiempoCardio = 45
    calcularEjerciciosDiaHoras(diasGym, horasGym, nombreUsuario, objetivoCuerpo, idUsuario, repeticiones, series, tiempo, peso,tiempoCardio)
}

function rutinaTonificar(diasGym, horasGym, intensidad, idUsuario, nombreUsuario, objetivoCuerpo){
    intensidadEjercicios = calcularIntensidad(intensidad)
    repeticiones = intensidadEjercicios.repeticiones
    series = intensidadEjercicios.series
    tiempo = 5
    peso = 6
    tiempoCardio = 35
    calcularEjerciciosDiaHoras(diasGym, horasGym, nombreUsuario, objetivoCuerpo, idUsuario, repeticiones, series, peso,tiempoCardio)
}

function rutinaGanarMasa(diasGym, horasGym, intensidad, idUsuario, nombreUsuario, objetivoCuerpo){
    intensidadEjercicios = calcularIntensidad(intensidad)
    repeticiones = intensidadEjercicios.repeticiones
    series = intensidadEjercicios.series
    tiempo = 8
    peso = 9
    tiempoCardio = 30
    calcularEjerciciosDiaHoras(diasGym, horasGym, nombreUsuario, objetivoCuerpo, idUsuario, repeticiones, series, peso,tiempoCardio)
}


function calcularIntensidad(intensidad){
    if (intensidad == 0){
        return {repeticiones: 5, series:4}
    } else if(intensidad == 1 || intensidad == 2 || intensidad == 3){
        return {repeticiones: 8, series:4}
    } else if(intensidad == 4 || intensidad == 5 || intensidad == 6){
        return {repeticiones: 10, series:5}
    }else{
        return {repeticiones: 12, series:6}
    }
}

function calcularEjerciciosDiaHoras(diasGym, horasGym, nombreUsuario, tipoRutina, idUsuario, repeticiones, series, tiempo, peso,tiempoCardio){
   
    if (diasGym == 1){
        if (horasGym == 1 || horasGym == 1.5){
            //Query 5 ejercicios de todo
            idUsuario,tiempo, intensidad,foto,dia,parteCuerpo
            crearRutina(idUsuario, diasGym, horasGym, tiempo, repeticiones,"Todos los musculos", "https://i.ytimg.com/vi/0PumJ_Z0MuQ/maxresdefault.jpg").then(res => {
                ejercicioAleatorio("Hombros", res.id,repeticiones, series, tiempo, peso).then(() => {console.log("entra")})
                ejercicioAleatorio("Pectorales", res.id, repeticiones, series, tiempo, peso).then(() => {console.log("entra")})
                ejercicioAleatorio("Biceps", res.id, repeticiones, series, tiempo, peso).then(() => {console.log("entra")})
                ejercicioAleatorio("Pectorales", res.id, repeticiones, series, tiempo, peso).then(() => {console.log("entra")})
                ejercicioAleatorio("Cuadriceps", res.id, repeticiones, series, tiempo, peso).then(() => {console.log("entra")})
                agregarCardio(tiempoCardio, res.id).then(() => console.log("entra"))
            })

        }else if (horasGym == 2 || horasGym == 2.5){
            //Query 8 ejercicios de todo            
            crearRutina(idUsuario, diasGym, horasGym, tiempo, repeticiones,"Todos los musculos", "https://i.ytimg.com/vi/0PumJ_Z0MuQ/maxresdefault.jpg").then(res => {
                ejercicioAleatorio("Hombros", res.id,repeticiones, series, tiempo, peso).then(() => {console.log("entra")})
                ejercicioAleatorio("Pectorales", res.id, repeticiones, series, tiempo, peso).then(() => {console.log("entra")})
                ejercicioAleatorio("Biceps", res.id, repeticiones, series, tiempo, peso).then(() => {console.log("entra")})
                ejercicioAleatorio("Pectorales", res.id, repeticiones, series, tiempo, peso).then(() => {console.log("entra")})
                ejercicioAleatorio("Tríceps", res.id, repeticiones, series, tiempo, peso).then(() => {console.log("entra")})
                ejercicioAleatorio("Glúteos", res.id, repeticiones, series, tiempo, peso).then(() => {console.log("entra")})
                ejercicioAleatorio("Abdomen", res.id, repeticiones, series, tiempo, peso).then(() => {console.log("entra")})
                ejercicioAleatorio("Hombros", res.id,repeticiones, series, tiempo, peso).then(() => {console.log("entra")})
                agregarCardio(tiempoCardio, res.id).then(() => console.log("entra"))
            })
        }else if (horasGym == 3 || horasGym == 3.5){
            //Query 12 ejercicios de todo
            crearRutina(idUsuario, diasGym, horasGym, tiempo, repeticiones,"Todos los musculos", "https://i.ytimg.com/vi/0PumJ_Z0MuQ/maxresdefault.jpg").then(res => {
                ejercicioAleatorio("Hombros", res.id,repeticiones, series, tiempo, peso).then(() => {console.log("entra")})
                ejercicioAleatorio("Pectorales", res.id, repeticiones, series, tiempo, peso).then(() => {console.log("entra")})
                ejercicioAleatorio("Biceps", res.id, repeticiones, series, tiempo, peso).then(() => {console.log("entra")})
                ejercicioAleatorio("Pectorales", res.id, repeticiones, series, tiempo, peso).then(() => {console.log("entra")})
                ejercicioAleatorio("Tríceps", res.id, repeticiones, series, tiempo, peso).then(() => {console.log("entra")})
                ejercicioAleatorio("Glúteos", res.id, repeticiones, series, tiempo, peso).then(() => {console.log("entra")})
                ejercicioAleatorio("Abdomen", res.id, repeticiones, series, tiempo, peso).then(() => {console.log("entra")})
                ejercicioAleatorio("Hombros", res.id,repeticiones, series, tiempo, peso).then(() => {console.log("entra")})
                ejercicioAleatorio("Tríceps", res.id, repeticiones, series, tiempo, peso).then(() => {console.log("entra")})
                ejercicioAleatorio("Glúteos", res.id, repeticiones, series, tiempo, peso).then(() => {console.log("entra")})
                ejercicioAleatorio("Abdomen", res.id, repeticiones, series, tiempo, peso).then(() => {console.log("entra")})
                ejercicioAleatorio("Hombros", res.id,repeticiones, series, tiempo, peso).then(() => {console.log("entra")})
                agregarCardio(tiempoCardio, res.id).then(() => console.log("entra"))
            })
        }else if (horasGym == 4 || horasGym == 4.5){
            //Query 15 ejercicios de todo
            crearRutina(idUsuario, diasGym, horasGym, tiempo, repeticiones,"Todos los musculos", "https://i.ytimg.com/vi/0PumJ_Z0MuQ/maxresdefault.jpg").then(res => {
                ejercicioAleatorio("Hombros", res.id,repeticiones, series, tiempo, peso).then(() => {console.log("entra")})
                ejercicioAleatorio("Pectorales", res.id, repeticiones, series, tiempo, peso).then(() => {console.log("entra")})
                ejercicioAleatorio("Biceps", res.id, repeticiones, series, tiempo, peso).then(() => {console.log("entra")})
                ejercicioAleatorio("Pectorales", res.id, repeticiones, series, tiempo, peso).then(() => {console.log("entra")})
                ejercicioAleatorio("Tríceps", res.id, repeticiones, series, tiempo, peso).then(() => {console.log("entra")})
                ejercicioAleatorio("Glúteos", res.id, repeticiones, series, tiempo, peso).then(() => {console.log("entra")})
                ejercicioAleatorio("Abdomen", res.id, repeticiones, series, tiempo, peso).then(() => {console.log("entra")})
                ejercicioAleatorio("Hombros", res.id,repeticiones, series, tiempo, peso).then(() => {console.log("entra")})
                ejercicioAleatorio("Tríceps", res.id, repeticiones, series, tiempo, peso).then(() => {console.log("entra")})
                ejercicioAleatorio("Glúteos", res.id, repeticiones, series, tiempo, peso).then(() => {console.log("entra")})
                ejercicioAleatorio("Abdomen", res.id, repeticiones, series, tiempo, peso).then(() => {console.log("entra")})
                ejercicioAleatorio("Hombros", res.id,repeticiones, series, tiempo, peso).then(() => {console.log("entra")})
                ejercicioAleatorio("Glúteos", res.id, repeticiones, series, tiempo, peso).then(() => {console.log("entra")})
                ejercicioAleatorio("Abdomen", res.id, repeticiones, series, tiempo, peso).then(() => {console.log("entra")})
                ejercicioAleatorio("Hombros", res.id,repeticiones, series, tiempo, peso).then(() => {console.log("entra")})
                agregarCardio(tiempoCardio, res.id).then(() => console.log("entra"))
            })
        }
    }else if (diasGym == 2){
        if (horasGym == 1 || horasGym == 1.5){
            //Query 5 arriba y 5 abajo
            crearRutina(idUsuario, diasGym, horasGym, tiempo, repeticiones,"Tren superior","https://cf.ltkcdn.net/ejercicio/images/std/255707-800x533r1-Upper-Body-Workout.jpg").then(res => {
                ejercicioAleatorio("Hombros", res.id,repeticiones, series, tiempo, peso).then(() => {console.log("entra")})
                ejercicioAleatorio("Pectorales", res.id, repeticiones, series, tiempo, peso).then(() => {console.log("entra")})
                ejercicioAleatorio("Biceps", res.id, repeticiones, series, tiempo, peso).then(() => {console.log("entra")})
                ejercicioAleatorio("Pectorales", res.id, repeticiones, series, tiempo, peso).then(() => {console.log("entra")})
                ejercicioAleatorio("Cuadriceps", res.id, repeticiones, series, tiempo, peso).then(() => {console.log("entra")})
                agregarCardio(tiempoCardio, res.id).then(() => console.log("entra"))
            })
            crearRutina(idUsuario, diasGym, horasGym, tiempo, repeticiones,"Pierna y abdomen","https://i.blogs.es/c8d354/autocarga/450_1000.jpg").then(res => {
                ejercicioAleatorio("Abdomen", res.id, repeticiones, series, tiempo, peso).then(() => {console.log("entra")})
                ejercicioAleatorio("Cuadriceps", res.id, repeticiones, series, tiempo, peso).then(() => {console.log("entra")})
                ejercicioAleatorio("Todo", res.id).then(() => {console.log("entra")})
                ejercicioAleatorio("Cuadriceps", res.id, repeticiones, series, tiempo, peso).then(() => {console.log("entra")})
                ejercicioAleatorio("Cuadriceps", res.id, repeticiones, series, tiempo, peso).then(() => {console.log("entra")})
                agregarCardio(tiempoCardio, res.id).then(() => console.log("entra"))
            })
        }else if (horasGym == 2 || horasGym == 2.5){
            //Query 8 arriba y 8 abajo
            crearRutina(idUsuario, diasGym, horasGym, tiempo, repeticiones,"Tren superior","https://cf.ltkcdn.net/ejercicio/images/std/255707-800x533r1-Upper-Body-Workout.jpg").then(res => {
                ejercicioAleatorio("Hombros", res.id,repeticiones, series, tiempo, peso).then(() => {console.log("entra")})
                ejercicioAleatorio("Pectorales", res.id, repeticiones, series, tiempo, peso).then(() => {console.log("entra")})
                ejercicioAleatorio("Biceps", res.id, repeticiones, series, tiempo, peso).then(() => {console.log("entra")})
                ejercicioAleatorio("Pectorales", res.id, repeticiones, series, tiempo, peso).then(() => {console.log("entra")})
                ejercicioAleatorio("Cuadriceps", res.id, repeticiones, series, tiempo, peso).then(() => {console.log("entra")})
                ejercicioAleatorio("Biceps", res.id, repeticiones, series, tiempo, peso).then(() => {console.log("entra")})
                ejercicioAleatorio("Pectorales", res.id, repeticiones, series, tiempo, peso).then(() => {console.log("entra")})
                ejercicioAleatorio("Cuadriceps", res.id, repeticiones, series, tiempo, peso).then(() => {console.log("entra")})
                agregarCardio(tiempoCardio, res.id).then(() => console.log("entra"))
            })
            crearRutina(idUsuario, diasGym, horasGym, tiempo, repeticiones,"Pierna y abdomen","https://i.blogs.es/c8d354/autocarga/450_1000.jpg").then(res => {
                ejercicioAleatorio("Abdomen", res.id, repeticiones, series, tiempo, peso).then(() => {console.log("entra")})
                ejercicioAleatorio("Cuadriceps", res.id, repeticiones, series, tiempo, peso).then(() => {console.log("entra")})
                ejercicioAleatorio("Todo", res.id).then(() => {console.log("entra")})
                ejercicioAleatorio("Cuadriceps", res.id, repeticiones, series, tiempo, peso).then(() => {console.log("entra")})
                ejercicioAleatorio("Cuadriceps", res.id, repeticiones, series, tiempo, peso).then(() => {console.log("entra")})
                ejercicioAleatorio("Biceps", res.id, repeticiones, series, tiempo, peso).then(() => {console.log("entra")})
                ejercicioAleatorio("Pectorales", res.id, repeticiones, series, tiempo, peso).then(() => {console.log("entra")})
                ejercicioAleatorio("Cuadriceps", res.id, repeticiones, series, tiempo, peso).then(() => {console.log("entra")})
                agregarCardio(tiempoCardio, res.id).then(() => console.log("entra"))
            })
        }else if (horasGym == 3 || horasGym == 3.5){
            crearRutina(idUsuario, diasGym, horasGym, tiempo, repeticiones,"Tren superior","https://cf.ltkcdn.net/ejercicio/images/std/255707-800x533r1-Upper-Body-Workout.jpg").then(res => {
                ejercicioAleatorio("Abdomen", res.id, repeticiones, series, tiempo, peso).then(() => {console.log("entra")})
                ejercicioAleatorio("Cuadriceps", res.id, repeticiones, series, tiempo, peso).then(() => {console.log("entra")})
                ejercicioAleatorio("Todo", res.id).then(() => {console.log("entra")})
                ejercicioAleatorio("Cuadriceps", res.id, repeticiones, series, tiempo, peso).then(() => {console.log("entra")})
                ejercicioAleatorio("Cuadriceps", res.id, repeticiones, series, tiempo, peso).then(() => {console.log("entra")})
                ejercicioAleatorio("Biceps", res.id, repeticiones, series, tiempo, peso).then(() => {console.log("entra")})
                ejercicioAleatorio("Pectorales", res.id, repeticiones, series, tiempo, peso).then(() => {console.log("entra")})
                ejercicioAleatorio("Cuadriceps", res.id, repeticiones, series, tiempo, peso).then(() => {console.log("entra")})
                ejercicioAleatorio("Pectorales", res.id, repeticiones, series, tiempo, peso).then(() => {console.log("entra")})
                ejercicioAleatorio("Cuadriceps", res.id, repeticiones, series, tiempo, peso).then(() => {console.log("entra")})
                agregarCardio(tiempoCardio, res.id).then(() => console.log("entra"))
            })
            crearRutina(idUsuario, diasGym, horasGym, tiempo, repeticiones,"Pierna y abdomen","https://i.blogs.es/c8d354/autocarga/450_1000.jpg").then(res => {
                ejercicioAleatorio("Abdomen", res.id, repeticiones, series, tiempo, peso).then(() => {console.log("entra")})
                ejercicioAleatorio("Cuadriceps", res.id, repeticiones, series, tiempo, peso).then(() => {console.log("entra")})
                ejercicioAleatorio("Todo", res.id).then(() => {console.log("entra")})
                ejercicioAleatorio("Cuadriceps", res.id, repeticiones, series, tiempo, peso).then(() => {console.log("entra")})
                ejercicioAleatorio("Cuadriceps", res.id, repeticiones, series, tiempo, peso).then(() => {console.log("entra")})
                ejercicioAleatorio("Biceps", res.id, repeticiones, series, tiempo, peso).then(() => {console.log("entra")})
                ejercicioAleatorio("Pectorales", res.id, repeticiones, series, tiempo, peso).then(() => {console.log("entra")})
                ejercicioAleatorio("Cuadriceps", res.id, repeticiones, series, tiempo, peso).then(() => {console.log("entra")})
                ejercicioAleatorio("Pectorales", res.id, repeticiones, series, tiempo, peso).then(() => {console.log("entra")})
                ejercicioAleatorio("Cuadriceps", res.id, repeticiones, series, tiempo, peso).then(() => {console.log("entra")})
                agregarCardio(tiempoCardio, res.id).then(() => console.log("entra"))
            })
            
        }else if (horasGym == 4 || horasGym == 4.5){
            //Query 15 arriba y 15 abajo
            crearRutina(idUsuario, diasGym, horasGym, tiempo, repeticiones,"Tren superior","https://cf.ltkcdn.net/ejercicio/images/std/255707-800x533r1-Upper-Body-Workout.jpg").then(res => {
                ejercicioAleatorio("Abdomen", res.id, repeticiones, series, tiempo, peso).then(() => {console.log("entra")})
                ejercicioAleatorio("Cuadriceps", res.id, repeticiones, series, tiempo, peso).then(() => {console.log("entra")})
                ejercicioAleatorio("Todo", res.id).then(() => {console.log("entra")})
                ejercicioAleatorio("Cuadriceps", res.id, repeticiones, series, tiempo, peso).then(() => {console.log("entra")})
                ejercicioAleatorio("Cuadriceps", res.id, repeticiones, series, tiempo, peso).then(() => {console.log("entra")})
                ejercicioAleatorio("Biceps", res.id, repeticiones, series, tiempo, peso).then(() => {console.log("entra")})
                ejercicioAleatorio("Pectorales", res.id, repeticiones, series, tiempo, peso).then(() => {console.log("entra")})
                ejercicioAleatorio("Cuadriceps", res.id, repeticiones, series, tiempo, peso).then(() => {console.log("entra")})
                ejercicioAleatorio("Pectorales", res.id, repeticiones, series, tiempo, peso).then(() => {console.log("entra")})
                ejercicioAleatorio("Cuadriceps", res.id, repeticiones, series, tiempo, peso).then(() => {console.log("entra")})
                ejercicioAleatorio("Biceps", res.id, repeticiones, series, tiempo, peso).then(() => {console.log("entra")})
                ejercicioAleatorio("Pectorales", res.id, repeticiones, series, tiempo, peso).then(() => {console.log("entra")})
                ejercicioAleatorio("Cuadriceps", res.id, repeticiones, series, tiempo, peso).then(() => {console.log("entra")})
                ejercicioAleatorio("Pectorales", res.id, repeticiones, series, tiempo, peso).then(() => {console.log("entra")})
                ejercicioAleatorio("Cuadriceps", res.id, repeticiones, series, tiempo, peso).then(() => {console.log("entra")})
                agregarCardio(tiempoCardio, res.id).then(() => console.log("entra"))
            })
            crearRutina(idUsuario, diasGym, horasGym, tiempo, repeticiones,"Pierna y abdomen","https://i.blogs.es/c8d354/autocarga/450_1000.jpg").then(res => {
                ejercicioAleatorio("Abdomen", res.id, repeticiones, series, tiempo, peso).then(() => {console.log("entra")})
                ejercicioAleatorio("Cuadriceps", res.id, repeticiones, series, tiempo, peso).then(() => {console.log("entra")})
                ejercicioAleatorio("Todo", res.id).then(() => {console.log("entra")})
                ejercicioAleatorio("Cuadriceps", res.id, repeticiones, series, tiempo, peso).then(() => {console.log("entra")})
                ejercicioAleatorio("Cuadriceps", res.id, repeticiones, series, tiempo, peso).then(() => {console.log("entra")})
                ejercicioAleatorio("Biceps", res.id, repeticiones, series, tiempo, peso).then(() => {console.log("entra")})
                ejercicioAleatorio("Pectorales", res.id, repeticiones, series, tiempo, peso).then(() => {console.log("entra")})
                ejercicioAleatorio("Cuadriceps", res.id, repeticiones, series, tiempo, peso).then(() => {console.log("entra")})
                ejercicioAleatorio("Pectorales", res.id, repeticiones, series, tiempo, peso).then(() => {console.log("entra")})
                ejercicioAleatorio("Cuadriceps", res.id, repeticiones, series, tiempo, peso).then(() => {console.log("entra")})
                ejercicioAleatorio("Biceps", res.id, repeticiones, series, tiempo, peso).then(() => {console.log("entra")})
                ejercicioAleatorio("Pectorales", res.id, repeticiones, series, tiempo, peso).then(() => {console.log("entra")})
                ejercicioAleatorio("Cuadriceps", res.id, repeticiones, series, tiempo, peso).then(() => {console.log("entra")})
                ejercicioAleatorio("Pectorales", res.id, repeticiones, series, tiempo, peso).then(() => {console.log("entra")})
                ejercicioAleatorio("Cuadriceps", res.id, repeticiones, series, tiempo, peso).then(() => {console.log("entra")})
                agregarCardio(tiempoCardio, res.id).then(() => console.log("entra"))
            })
        }

    }else if (diasGym == 3){
        if (horasGym == 1 || horasGym == 1.5){
            //Query 5 brazo y hombro, 5 espalda y pecho, 5 pierna
            crearRutina(idUsuario, diasGym, horasGym, tiempo, repeticiones,"Brazo y hombro","https://i.ytimg.com/vi/YYHjaVexUg0/maxresdefault.jpg").then(res => {
                ejercicioAleatorio("Hombros", res.id,repeticiones, series, tiempo, peso).then(() => {console.log("entra")})
                ejercicioAleatorio("Cuadriceps", res.id, repeticiones, series, tiempo, peso).then(() => {console.log("entra")})
                ejercicioAleatorio("Bíceps", res.id).then(() => {console.log("entra")})
                ejercicioAleatorio("Biceps", res.id, repeticiones, series, tiempo, peso).then(() => {console.log("entra")})
                ejercicioAleatorio("Bíceps", res.id).then(() => {console.log("entra")})
                agregarCardio(tiempoCardio, res.id).then(() => console.log("entra"))
            })
            crearRutina(idUsuario, diasGym, horasGym, tiempo, repeticiones,"Pectorales","https://blog.smartfit.com.mx/wp-content/uploads/2020/10/ejercicios-espalda-baja-gimnasio-destacada.png").then(res => {
                ejercicioAleatorio("Pectorales", res.id, repeticiones, series, tiempo, peso).then(() => {console.log("entra")})
                ejercicioAleatorio("Pectorales", res.id, repeticiones, series, tiempo, peso).then(() => {console.log("entra")})
                ejercicioAleatorio("Pectorales", res.id, repeticiones, series, tiempo, peso).then(() => {console.log("entra")})
                ejercicioAleatorio("Pectorales", res.id, repeticiones, series, tiempo, peso).then(() => {console.log("entra")})
                ejercicioAleatorio("Abdomen", res.id, repeticiones, series, tiempo, peso).then(() => {console.log("entra")})
                agregarCardio(tiempoCardio, res.id).then(() => console.log("entra"))
            })
            crearRutina(idUsuario, diasGym, horasGym, tiempo, repeticiones,"Pierna y abdomen","https://e00-elmundo.uecdn.es/assets/multimedia/imagenes/2019/07/12/15629301078089.jpg").then(res => {
                ejercicioAleatorio("Abdomen", res.id, repeticiones, series, tiempo, peso).then(() => {console.log("entra")})
                ejercicioAleatorio("Cuadriceps", res.id, repeticiones, series, tiempo, peso).then(() => {console.log("entra")})
                ejercicioAleatorio("Todo", res.id).then(() => {console.log("entra")})
                ejercicioAleatorio("Cuadriceps", res.id, repeticiones, series, tiempo, peso).then(() => {console.log("entra")})
                ejercicioAleatorio("Cuadriceps", res.id, repeticiones, series, tiempo, peso).then(() => {console.log("entra")})
                agregarCardio(tiempoCardio, res.id).then(() => console.log("entra"))
            })
            return {tiempoEjercicio: "8 min"}
        }else if (horasGym == 2 || horasGym == 2.5){
            //Query 8 brazo y hombro, 8 espalda y pecho, 8 pierna
            crearRutina(idUsuario, diasGym, horasGym, tiempo, repeticiones,"Brazo y hombro","https://i.ytimg.com/vi/YYHjaVexUg0/maxresdefault.jpg").then(res => {
                ejercicioAleatorio("Hombros", res.id,repeticiones, series, tiempo, peso).then(() => {console.log("entra")})
                ejercicioAleatorio("Cuadriceps", res.id, repeticiones, series, tiempo, peso).then(() => {console.log("entra")})
                ejercicioAleatorio("Bíceps", res.id).then(() => {console.log("entra")})
                ejercicioAleatorio("Biceps", res.id, repeticiones, series, tiempo, peso).then(() => {console.log("entra")})
                ejercicioAleatorio("Bíceps", res.id).then(() => {console.log("entra")})
                ejercicioAleatorio("Bíceps", res.id).then(() => {console.log("entra")})
                ejercicioAleatorio("Biceps", res.id, repeticiones, series, tiempo, peso).then(() => {console.log("entra")})
                ejercicioAleatorio("Bíceps", res.id).then(() => {console.log("entra")})
                agregarCardio(tiempoCardio, res.id).then(() => console.log("entra"))
            })
            crearRutina(idUsuario, diasGym, horasGym, tiempo, repeticiones,"Pectorales","https://blog.smartfit.com.mx/wp-content/uploads/2020/10/ejercicios-espalda-baja-gimnasio-destacada.png").then(res => {
                ejercicioAleatorio("Pectorales", res.id, repeticiones, series, tiempo, peso).then(() => {console.log("entra")})
                ejercicioAleatorio("Pectorales", res.id, repeticiones, series, tiempo, peso).then(() => {console.log("entra")})
                ejercicioAleatorio("Pectorales", res.id, repeticiones, series, tiempo, peso).then(() => {console.log("entra")})
                ejercicioAleatorio("Pectorales", res.id, repeticiones, series, tiempo, peso).then(() => {console.log("entra")})
                ejercicioAleatorio("Abdomen", res.id, repeticiones, series, tiempo, peso).then(() => {console.log("entra")})
                ejercicioAleatorio("Bíceps", res.id).then(() => {console.log("entra")})
                ejercicioAleatorio("Biceps", res.id, repeticiones, series, tiempo, peso).then(() => {console.log("entra")})
                ejercicioAleatorio("Bíceps", res.id).then(() => {console.log("entra")})
                agregarCardio(tiempoCardio, res.id).then(() => console.log("entra"))
            })
            crearRutina(idUsuario, diasGym, horasGym, tiempo, repeticiones,"Pierna y abdomen","https://e00-elmundo.uecdn.es/assets/multimedia/imagenes/2019/07/12/15629301078089.jpg").then(res => {
                ejercicioAleatorio("Abdomen", res.id, repeticiones, series, tiempo, peso).then(() => {console.log("entra")})
                ejercicioAleatorio("Cuadriceps", res.id, repeticiones, series, tiempo, peso).then(() => {console.log("entra")})
                ejercicioAleatorio("Todo", res.id).then(() => {console.log("entra")})
                ejercicioAleatorio("Cuadriceps", res.id, repeticiones, series, tiempo, peso).then(() => {console.log("entra")})
                ejercicioAleatorio("Cuadriceps", res.id, repeticiones, series, tiempo, peso).then(() => {console.log("entra")})
                ejercicioAleatorio("Bíceps", res.id).then(() => {console.log("entra")})
                ejercicioAleatorio("Biceps", res.id, repeticiones, series, tiempo, peso).then(() => {console.log("entra")})
                ejercicioAleatorio("Bíceps", res.id).then(() => {console.log("entra")})
                agregarCardio(tiempoCardio, res.id).then(() => console.log("entra"))
            })
            return {tiempoEjercicio: "12 min"}
        }else if (horasGym == 3 || horasGym == 3.5){
            //Query 10 brazo y hombro, 10 espalda y pecho, 10 pierna
            crearRutina(idUsuario, diasGym, horasGym, tiempo, repeticiones,"Brazo y hombro","https://i.ytimg.com/vi/YYHjaVexUg0/maxresdefault.jpg").then(res => {
                ejercicioAleatorio("Hombros", res.id,repeticiones, series, tiempo, peso).then(() => {console.log("entra")})
                ejercicioAleatorio("Cuadriceps", res.id, repeticiones, series, tiempo, peso).then(() => {console.log("entra")})
                ejercicioAleatorio("Bíceps", res.id).then(() => {console.log("entra")})
                ejercicioAleatorio("Biceps", res.id, repeticiones, series, tiempo, peso).then(() => {console.log("entra")})
                ejercicioAleatorio("Bíceps", res.id).then(() => {console.log("entra")})
                ejercicioAleatorio("Bíceps", res.id).then(() => {console.log("entra")})
                ejercicioAleatorio("Biceps", res.id, repeticiones, series, tiempo, peso).then(() => {console.log("entra")})
                ejercicioAleatorio("Bíceps", res.id).then(() => {console.log("entra")})
                ejercicioAleatorio("Biceps", res.id, repeticiones, series, tiempo, peso).then(() => {console.log("entra")})
                ejercicioAleatorio("Bíceps", res.id).then(() => {console.log("entra")})
                agregarCardio(tiempoCardio, res.id).then(() => console.log("entra"))
            })
            crearRutina(idUsuario, diasGym, horasGym, tiempo, repeticiones,"Pectorales","https://blog.smartfit.com.mx/wp-content/uploads/2020/10/ejercicios-espalda-baja-gimnasio-destacada.png"
            ).then(res => {
                ejercicioAleatorio("Pectorales", res.id, repeticiones, series, tiempo, peso).then(() => {console.log("entra")})
                ejercicioAleatorio("Pectorales", res.id, repeticiones, series, tiempo, peso).then(() => {console.log("entra")})
                ejercicioAleatorio("Pectorales", res.id, repeticiones, series, tiempo, peso).then(() => {console.log("entra")})
                ejercicioAleatorio("Pectorales", res.id, repeticiones, series, tiempo, peso).then(() => {console.log("entra")})
                ejercicioAleatorio("Abdomen", res.id, repeticiones, series, tiempo, peso).then(() => {console.log("entra")})
                ejercicioAleatorio("Bíceps", res.id).then(() => {console.log("entra")})
                ejercicioAleatorio("Biceps", res.id, repeticiones, series, tiempo, peso).then(() => {console.log("entra")})
                ejercicioAleatorio("Bíceps", res.id).then(() => {console.log("entra")})
                ejercicioAleatorio("Biceps", res.id, repeticiones, series, tiempo, peso).then(() => {console.log("entra")})
                ejercicioAleatorio("Bíceps", res.id).then(() => {console.log("entra")})
                agregarCardio(tiempoCardio, res.id).then(() => console.log("entra"))
            })
            crearRutina(idUsuario, diasGym, horasGym, tiempo, repeticiones,"Pierna y abdomen","https://e00-elmundo.uecdn.es/assets/multimedia/imagenes/2019/07/12/15629301078089.jpg").then(res => {
                ejercicioAleatorio("Abdomen", res.id, repeticiones, series, tiempo, peso).then(() => {console.log("entra")})
                ejercicioAleatorio("Cuadriceps", res.id, repeticiones, series, tiempo, peso).then(() => {console.log("entra")})
                ejercicioAleatorio("Todo", res.id).then(() => {console.log("entra")})
                ejercicioAleatorio("Cuadriceps", res.id, repeticiones, series, tiempo, peso).then(() => {console.log("entra")})
                ejercicioAleatorio("Cuadriceps", res.id, repeticiones, series, tiempo, peso).then(() => {console.log("entra")})
                ejercicioAleatorio("Bíceps", res.id).then(() => {console.log("entra")})
                ejercicioAleatorio("Biceps", res.id, repeticiones, series, tiempo, peso).then(() => {console.log("entra")})
                ejercicioAleatorio("Bíceps", res.id).then(() => {console.log("entra")})
                ejercicioAleatorio("Biceps", res.id, repeticiones, series, tiempo, peso).then(() => {console.log("entra")})
                ejercicioAleatorio("Bíceps", res.id).then(() => {console.log("entra")})
                agregarCardio(tiempoCardio, res.id).then(() => console.log("entra"))
            })
            return {tiempoEjercicio: "14 min"}
        }else if (horasGym == 4 || horasGym == 4.5){
            crearRutina(idUsuario, diasGym, horasGym, tiempo, repeticiones,"Brazo","https://i.ytimg.com/vi/YYHjaVexUg0/maxresdefault.jpg").then(res => {
                ejercicioAleatorio("Hombros", res.id,repeticiones, series, tiempo, peso).then(() => {console.log("entra")})
                ejercicioAleatorio("Cuadriceps", res.id, repeticiones, series, tiempo, peso).then(() => {console.log("entra")})
                ejercicioAleatorio("Bíceps", res.id).then(() => {console.log("entra")})
                ejercicioAleatorio("Biceps", res.id, repeticiones, series, tiempo, peso).then(() => {console.log("entra")})
                ejercicioAleatorio("Bíceps", res.id).then(() => {console.log("entra")})
                ejercicioAleatorio("Bíceps", res.id).then(() => {console.log("entra")})
                ejercicioAleatorio("Biceps", res.id, repeticiones, series, tiempo, peso).then(() => {console.log("entra")})
                ejercicioAleatorio("Bíceps", res.id).then(() => {console.log("entra")})
                ejercicioAleatorio("Biceps", res.id, repeticiones, series, tiempo, peso).then(() => {console.log("entra")})
                ejercicioAleatorio("Bíceps", res.id).then(() => {console.log("entra")})
                ejercicioAleatorio("Biceps", res.id, repeticiones, series, tiempo, peso).then(() => {console.log("entra")})
                ejercicioAleatorio("Bíceps", res.id).then(() => {console.log("entra")})
                agregarCardio(tiempoCardio, res.id).then(() => console.log("entra"))
            })
            crearRutina(idUsuario, diasGym, horasGym, tiempo, repeticiones,"Pectorales","https://blog.smartfit.com.mx/wp-content/uploads/2020/10/ejercicios-espalda-baja-gimnasio-destacada.png").then(res => {
                ejercicioAleatorio("Pectorales", res.id, repeticiones, series, tiempo, peso).then(() => {console.log("entra")})
                ejercicioAleatorio("Pectorales", res.id, repeticiones, series, tiempo, peso).then(() => {console.log("entra")})
                ejercicioAleatorio("Pectorales", res.id, repeticiones, series, tiempo, peso).then(() => {console.log("entra")})
                ejercicioAleatorio("Pectorales", res.id, repeticiones, series, tiempo, peso).then(() => {console.log("entra")})
                ejercicioAleatorio("Abdomen", res.id, repeticiones, series, tiempo, peso).then(() => {console.log("entra")})
                ejercicioAleatorio("Bíceps", res.id).then(() => {console.log("entra")})
                ejercicioAleatorio("Biceps", res.id, repeticiones, series, tiempo, peso).then(() => {console.log("entra")})
                ejercicioAleatorio("Bíceps", res.id).then(() => {console.log("entra")})
                ejercicioAleatorio("Biceps", res.id, repeticiones, series, tiempo, peso).then(() => {console.log("entra")})
                ejercicioAleatorio("Bíceps", res.id).then(() => {console.log("entra")})
                ejercicioAleatorio("Biceps", res.id, repeticiones, series, tiempo, peso).then(() => {console.log("entra")})
                ejercicioAleatorio("Bíceps", res.id).then(() => {console.log("entra")})
                agregarCardio(tiempoCardio, res.id).then(() => console.log("entra"))
            })
            crearRutina(idUsuario, diasGym, horasGym, tiempo, repeticiones,"Pierna","https://e00-elmundo.uecdn.es/assets/multimedia/imagenes/2019/07/12/15629301078089.jpg").then(res => {
                ejercicioAleatorio("Abdomen", res.id, repeticiones, series, tiempo, peso).then(() => {console.log("entra")})
                ejercicioAleatorio("Cuadriceps", res.id, repeticiones, series, tiempo, peso).then(() => {console.log("entra")})
                ejercicioAleatorio("Todo", res.id).then(() => {console.log("entra")})
                ejercicioAleatorio("Cuadriceps", res.id, repeticiones, series, tiempo, peso).then(() => {console.log("entra")})
                ejercicioAleatorio("Cuadriceps", res.id, repeticiones, series, tiempo, peso).then(() => {console.log("entra")})
                ejercicioAleatorio("Bíceps", res.id).then(() => {console.log("entra")})
                ejercicioAleatorio("Biceps", res.id, repeticiones, series, tiempo, peso).then(() => {console.log("entra")})
                ejercicioAleatorio("Bíceps", res.id).then(() => {console.log("entra")})
                ejercicioAleatorio("Biceps", res.id, repeticiones, series, tiempo, peso).then(() => {console.log("entra")})
                ejercicioAleatorio("Bíceps", res.id).then(() => {console.log("entra")})
                ejercicioAleatorio("Biceps", res.id, repeticiones, series, tiempo, peso).then(() => {console.log("entra")})
                ejercicioAleatorio("Bíceps", res.id).then(() => {console.log("entra")})
                agregarCardio(tiempoCardio, res.id).then(() => console.log("entra"))
            })
            return {tiempoEjercicio: "14 min"}
        }

    }else if (diasGym == 4){
        if (horasGym == 1 || horasGym == 1.5){
            crearRutina(idUsuario, diasGym, horasGym, tiempo, repeticiones,"Brazo","https://i.ytimg.com/vi/YYHjaVexUg0/maxresdefault.jpg").then(res => {
                ejercicioAleatorio("Hombros", res.id,repeticiones, series, tiempo, peso).then(() => {console.log("entra")})
                ejercicioAleatorio("Hombros", res.id, repeticiones, series, tiempo, peso).then(() => {console.log("entra")})
                ejercicioAleatorio("Bíceps", res.id).then(() => {console.log("entra")})
                ejercicioAleatorio("Biceps", res.id, repeticiones, series, tiempo, peso).then(() => {console.log("entra")})
                ejercicioAleatorio("Bíceps", res.id).then(() => {console.log("entra")})
                agregarCardio(tiempoCardio, res.id).then(() => console.log("entra"))
            })
            crearRutina(idUsuario, diasGym, horasGym, tiempo, repeticiones,"Pectorales","https://www.cambiatufisico.com/wp-content/uploads/rutina-pecho-pectoral-superior.jpg").then(res => {
                ejercicioAleatorio("Pectorales", res.id, repeticiones, series, tiempo, peso).then(() => {console.log("entra")})
                ejercicioAleatorio("Pectorales", res.id, repeticiones, series, tiempo, peso).then(() => {console.log("entra")})
                ejercicioAleatorio("Pectorales", res.id, repeticiones, series, tiempo, peso).then(() => {console.log("entra")})
                ejercicioAleatorio("Pectorales", res.id, repeticiones, series, tiempo, peso).then(() => {console.log("entra")})
                ejercicioAleatorio("Abdomen", res.id, repeticiones, series, tiempo, peso).then(() => {console.log("entra")})
                agregarCardio(tiempoCardio, res.id).then(() => console.log("entra"))
            })
            crearRutina(idUsuario, diasGym, horasGym, tiempo, repeticiones,"Pierna","https://e00-elmundo.uecdn.es/assets/multimedia/imagenes/2019/07/12/15629301078089.jpg").then(res => {
                ejercicioAleatorio("Abdomen", res.id, repeticiones, series, tiempo, peso).then(() => {console.log("entra")})
                ejercicioAleatorio("Cuadriceps", res.id, repeticiones, series, tiempo, peso).then(() => {console.log("entra")})
                ejercicioAleatorio("Todo", res.id).then(() => {console.log("entra")})
                ejercicioAleatorio("Cuadriceps", res.id, repeticiones, series, tiempo, peso).then(() => {console.log("entra")})
                ejercicioAleatorio("Cuadriceps", res.id, repeticiones, series, tiempo, peso).then(() => {console.log("entra")})
                agregarCardio(tiempoCardio, res.id).then(() => console.log("entra"))
            })
            crearRutina(idUsuario, diasGym, horasGym, tiempo, repeticiones,"Abdomen","https://www.runtastic.com/blog/wp-content/uploads/2018/02/Copy-of-thumbnail_blog_1200x800-5-1024x683.jpg").then(res => {
                ejercicioAleatorio("Abdomen", res.id, repeticiones, series, tiempo, peso).then(() => {console.log("entra")})
                ejercicioAleatorio("Abdomen", res.id, repeticiones, series, tiempo, peso).then(() => {console.log("entra")})
                ejercicioAleatorio("Todo", res.id).then(() => {console.log("entra")})
                ejercicioAleatorio("Abdomen", res.id, repeticiones, series, tiempo, peso).then(() => {console.log("entra")})
                ejercicioAleatorio("Abdomen", res.id, repeticiones, series, tiempo, peso).then(() => {console.log("entra")})
                agregarCardio(tiempoCardio, res.id).then(() => console.log("entra"))
            })
            //Query 5 brazo y hombro, 5 espalda, 5 pecho, 5 pierna
            return {tiempoEjercicio: "8 min"}
        }else if (horasGym == 2 || horasGym == 2.5){
            //Query 8 brazo y hombro, 8 espalda , 8 pecho, 8 pierna
            crearRutina(idUsuario, diasGym, horasGym, tiempo, repeticiones,"Brazo","https://i.ytimg.com/vi/YYHjaVexUg0/maxresdefault.jpg").then(res => {
                ejercicioAleatorio("Hombros", res.id,repeticiones, series, tiempo, peso).then(() => {console.log("entra")})
                ejercicioAleatorio("Cuadriceps", res.id, repeticiones, series, tiempo, peso).then(() => {console.log("entra")})
                ejercicioAleatorio("Bíceps", res.id).then(() => {console.log("entra")})
                ejercicioAleatorio("Biceps", res.id, repeticiones, series, tiempo, peso).then(() => {console.log("entra")})
                ejercicioAleatorio("Bíceps", res.id).then(() => {console.log("entra")})
                ejercicioAleatorio("Bíceps", res.id).then(() => {console.log("entra")})
                ejercicioAleatorio("Biceps", res.id, repeticiones, series, tiempo, peso).then(() => {console.log("entra")})
                ejercicioAleatorio("Bíceps", res.id).then(() => {console.log("entra")})
                agregarCardio(tiempoCardio, res.id).then(() => console.log("entra"))
            })
            crearRutina(idUsuario, diasGym, horasGym, tiempo, repeticiones,"Pectorales","https://www.cambiatufisico.com/wp-content/uploads/rutina-pecho-pectoral-superior.jpg").then(res => {
                ejercicioAleatorio("Pectorales", res.id, repeticiones, series, tiempo, peso).then(() => {console.log("entra")})
                ejercicioAleatorio("Pectorales", res.id, repeticiones, series, tiempo, peso).then(() => {console.log("entra")})
                ejercicioAleatorio("Pectorales", res.id, repeticiones, series, tiempo, peso).then(() => {console.log("entra")})
                ejercicioAleatorio("Pectorales", res.id, repeticiones, series, tiempo, peso).then(() => {console.log("entra")})
                ejercicioAleatorio("Abdomen", res.id, repeticiones, series, tiempo, peso).then(() => {console.log("entra")})
                ejercicioAleatorio("Bíceps", res.id).then(() => {console.log("entra")})
                ejercicioAleatorio("Biceps", res.id, repeticiones, series, tiempo, peso).then(() => {console.log("entra")})
                ejercicioAleatorio("Bíceps", res.id).then(() => {console.log("entra")})
                agregarCardio(tiempoCardio, res.id).then(() => console.log("entra"))
            })
            crearRutina(idUsuario, diasGym, horasGym, tiempo, repeticiones,"Pierna","https://e00-elmundo.uecdn.es/assets/multimedia/imagenes/2019/07/12/15629301078089.jpg"
            ).then(res => {
                ejercicioAleatorio("Abdomen", res.id, repeticiones, series, tiempo, peso).then(() => {console.log("entra")})
                ejercicioAleatorio("Cuadriceps", res.id, repeticiones, series, tiempo, peso).then(() => {console.log("entra")})
                ejercicioAleatorio("Todo", res.id).then(() => {console.log("entra")})
                ejercicioAleatorio("Cuadriceps", res.id, repeticiones, series, tiempo, peso).then(() => {console.log("entra")})
                ejercicioAleatorio("Cuadriceps", res.id, repeticiones, series, tiempo, peso).then(() => {console.log("entra")})
                ejercicioAleatorio("Bíceps", res.id).then(() => {console.log("entra")})
                ejercicioAleatorio("Biceps", res.id, repeticiones, series, tiempo, peso).then(() => {console.log("entra")})
                ejercicioAleatorio("Bíceps", res.id).then(() => {console.log("entra")})
                agregarCardio(tiempoCardio, res.id).then(() => console.log("entra"))
            })
            crearRutina(idUsuario, diasGym, horasGym, tiempo, repeticiones,"Abdomen","https://www.runtastic.com/blog/wp-content/uploads/2018/02/Copy-of-thumbnail_blog_1200x800-5-1024x683.jpg").then(res => {
                ejercicioAleatorio("Abdomen", res.id, repeticiones, series, tiempo, peso).then(() => {console.log("entra")})
                ejercicioAleatorio("Abdomen", res.id, repeticiones, series, tiempo, peso).then(() => {console.log("entra")})
                ejercicioAleatorio("Todo", res.id).then(() => {console.log("entra")})
                ejercicioAleatorio("Abdomen", res.id, repeticiones, series, tiempo, peso).then(() => {console.log("entra")})
                ejercicioAleatorio("Abdomen", res.id, repeticiones, series, tiempo, peso).then(() => {console.log("entra")})
                ejercicioAleatorio("Bíceps", res.id).then(() => {console.log("entra")})
                ejercicioAleatorio("Biceps", res.id, repeticiones, series, tiempo, peso).then(() => {console.log("entra")})
                ejercicioAleatorio("Bíceps", res.id).then(() => {console.log("entra")})
                agregarCardio(tiempoCardio, res.id).then(() => console.log("entra"))
            })
            return {tiempoEjercicio: "12 min"}
        }else if (horasGym == 3 || horasGym == 3.5){
            //Query 10 brazo y hombro, 10 espalda , 10 pecho, 10 pierna
            crearRutina(idUsuario, diasGym, horasGym, tiempo, repeticiones,"Brazo","https://i.ytimg.com/vi/YYHjaVexUg0/maxresdefault.jpg").then(res => {
                ejercicioAleatorio("Abdomen", res.id, repeticiones, series, tiempo, peso).then(() => {console.log("entra")})
                ejercicioAleatorio("Abdomen", res.id, repeticiones, series, tiempo, peso).then(() => {console.log("entra")})
                ejercicioAleatorio("Todo", res.id).then(() => {console.log("entra")})
                ejercicioAleatorio("Abdomen", res.id, repeticiones, series, tiempo, peso).then(() => {console.log("entra")})
                ejercicioAleatorio("Abdomen", res.id, repeticiones, series, tiempo, peso).then(() => {console.log("entra")})
                ejercicioAleatorio("Bíceps", res.id).then(() => {console.log("entra")})
                ejercicioAleatorio("Biceps", res.id, repeticiones, series, tiempo, peso).then(() => {console.log("entra")})
                ejercicioAleatorio("Bíceps", res.id).then(() => {console.log("entra")})
                agregarCardio(tiempoCardio, res.id).then(() => console.log("entra"))
            })
            crearRutina(idUsuario, diasGym, horasGym, tiempo, repeticiones,"Abdomen","https://www.cambiatufisico.com/wp-content/uploads/rutina-pecho-pectoral-superior.jpg").then(res => {
                ejercicioAleatorio("Abdomen", res.id, repeticiones, series, tiempo, peso).then(() => {console.log("entra")})
                ejercicioAleatorio("Abdomen", res.id, repeticiones, series, tiempo, peso).then(() => {console.log("entra")})
                ejercicioAleatorio("Todo", res.id).then(() => {console.log("entra")})
                ejercicioAleatorio("Abdomen", res.id, repeticiones, series, tiempo, peso).then(() => {console.log("entra")})
                ejercicioAleatorio("Abdomen", res.id, repeticiones, series, tiempo, peso).then(() => {console.log("entra")})
                ejercicioAleatorio("Bíceps", res.id).then(() => {console.log("entra")})
                ejercicioAleatorio("Biceps", res.id, repeticiones, series, tiempo, peso).then(() => {console.log("entra")})
                ejercicioAleatorio("Bíceps", res.id).then(() => {console.log("entra")})
                ejercicioAleatorio("Biceps", res.id, repeticiones, series, tiempo, peso).then(() => {console.log("entra")})
                ejercicioAleatorio("Bíceps", res.id).then(() => {console.log("entra")})
                agregarCardio(tiempoCardio, res.id).then(() => console.log("entra"))
            })
            crearRutina(idUsuario, diasGym, horasGym, tiempo, repeticiones,"Biceps","https://e00-elmundo.uecdn.es/assets/multimedia/imagenes/2019/07/12/15629301078089.jpg").then(res => {
                ejercicioAleatorio("Abdomen", res.id, repeticiones, series, tiempo, peso).then(() => {console.log("entra")})
                ejercicioAleatorio("Abdomen", res.id, repeticiones, series, tiempo, peso).then(() => {console.log("entra")})
                ejercicioAleatorio("Todo", res.id).then(() => {console.log("entra")})
                ejercicioAleatorio("Abdomen", res.id, repeticiones, series, tiempo, peso).then(() => {console.log("entra")})
                ejercicioAleatorio("Abdomen", res.id, repeticiones, series, tiempo, peso).then(() => {console.log("entra")})
                ejercicioAleatorio("Bíceps", res.id).then(() => {console.log("entra")})
                ejercicioAleatorio("Biceps", res.id, repeticiones, series, tiempo, peso).then(() => {console.log("entra")})
                ejercicioAleatorio("Bíceps", res.id).then(() => {console.log("entra")})
                ejercicioAleatorio("Biceps", res.id, repeticiones, series, tiempo, peso).then(() => {console.log("entra")})
                ejercicioAleatorio("Bíceps", res.id).then(() => {console.log("entra")})
                agregarCardio(tiempoCardio, res.id).then(() => console.log("entra"))
            })
            return {tiempoEjercicio: "14 min"}
        }else if (horasGym == 4 || horasGym == 4.5){
            //Query 12 brazo y hombro, 12 espalda , 12 pecho, 12 pierna
            crearRutina(idUsuario, diasGym, horasGym, tiempo, repeticiones,"Brazo","https://www.runtastic.com/blog/wp-content/uploads/2018/02/Copy-of-thumbnail_blog_1200x800-5-1024x683.jpg").then(res => {
                ejercicioAleatorio("Abdomen", res.id, repeticiones, series, tiempo, peso).then(() => {console.log("entra")})
                ejercicioAleatorio("Abdomen", res.id, repeticiones, series, tiempo, peso).then(() => {console.log("entra")})
                ejercicioAleatorio("Todo", res.id).then(() => {console.log("entra")})
                ejercicioAleatorio("Abdomen", res.id, repeticiones, series, tiempo, peso).then(() => {console.log("entra")})
                ejercicioAleatorio("Abdomen", res.id, repeticiones, series, tiempo, peso).then(() => {console.log("entra")})
                ejercicioAleatorio("Bíceps", res.id).then(() => {console.log("entra")})
                ejercicioAleatorio("Biceps", res.id, repeticiones, series, tiempo, peso).then(() => {console.log("entra")})
                ejercicioAleatorio("Bíceps", res.id).then(() => {console.log("entra")})
                ejercicioAleatorio("Biceps", res.id, repeticiones, series, tiempo, peso).then(() => {console.log("entra")})
                ejercicioAleatorio("Bíceps", res.id).then(() => {console.log("entra")})
                agregarCardio(tiempoCardio, res.id).then(() => console.log("entra"))
            })
            crearRutina(idUsuario, diasGym, horasGym, tiempo, repeticiones,"Espalda","https://blog.smartfit.com.mx/wp-content/uploads/2020/10/ejercicios-espalda-baja-gimnasio-destacada.png").then(res => {
                ejercicioAleatorio("Abdomen", res.id, repeticiones, series, tiempo, peso).then(() => {console.log("entra")})
                ejercicioAleatorio("Abdomen", res.id, repeticiones, series, tiempo, peso).then(() => {console.log("entra")})
                ejercicioAleatorio("Todo", res.id).then(() => {console.log("entra")})
                ejercicioAleatorio("Abdomen", res.id, repeticiones, series, tiempo, peso).then(() => {console.log("entra")})
                ejercicioAleatorio("Abdomen", res.id, repeticiones, series, tiempo, peso).then(() => {console.log("entra")})
                ejercicioAleatorio("Bíceps", res.id).then(() => {console.log("entra")})
                ejercicioAleatorio("Biceps", res.id, repeticiones, series, tiempo, peso).then(() => {console.log("entra")})
                ejercicioAleatorio("Bíceps", res.id).then(() => {console.log("entra")})
                ejercicioAleatorio("Biceps", res.id, repeticiones, series, tiempo, peso).then(() => {console.log("entra")})
                ejercicioAleatorio("Bíceps", res.id).then(() => {console.log("entra")})
                agregarCardio(tiempoCardio, res.id).then(() => console.log("entra"))
            })
            crearRutina(idUsuario, diasGym, horasGym, tiempo, repeticiones,"Abdomen","https://www.runtastic.com/blog/wp-content/uploads/2018/02/Copy-of-thumbnail_blog_1200x800-5-1024x683.jpg").then(res => {
                ejercicioAleatorio("Abdomen", res.id, repeticiones, series, tiempo, peso).then(() => {console.log("entra")})
                ejercicioAleatorio("Abdomen", res.id, repeticiones, series, tiempo, peso).then(() => {console.log("entra")})
                ejercicioAleatorio("Todo", res.id).then(() => {console.log("entra")})
                ejercicioAleatorio("Abdomen", res.id, repeticiones, series, tiempo, peso).then(() => {console.log("entra")})
                ejercicioAleatorio("Abdomen", res.id, repeticiones, series, tiempo, peso).then(() => {console.log("entra")})
                ejercicioAleatorio("Bíceps", res.id).then(() => {console.log("entra")})
                ejercicioAleatorio("Biceps", res.id, repeticiones, series, tiempo, peso).then(() => {console.log("entra")})
                ejercicioAleatorio("Bíceps", res.id).then(() => {console.log("entra")})
                ejercicioAleatorio("Biceps", res.id, repeticiones, series, tiempo, peso).then(() => {console.log("entra")})
                ejercicioAleatorio("Bíceps", res.id).then(() => {console.log("entra")})
                agregarCardio(tiempoCardio, res.id).then(() => console.log("entra"))
            })
            return {tiempoEjercicio: "14 min"}
        }

    }else{
        if (horasGym == 1 || horasGym == 1.5){
            //Query 5 brazo , 5 hombro, 5 espalda, 5 pecho, 5 pierna
            crearRutina(idUsuario, diasGym, horasGym, tiempo, repeticiones,"brazo","https://i.ytimg.com/vi/YYHjaVexUg0/maxresdefault.jpg").then(res => {
                ejercicioAleatorio("Biceps", res.id, repeticiones, series, tiempo, peso).then(() => {console.log("entra")})
                ejercicioAleatorio("Biceps", res.id, repeticiones, series, tiempo, peso).then(() => {console.log("entra")})
                ejercicioAleatorio("Biceps", res.id, repeticiones, series, tiempo, peso).then(() => {console.log("entra")})
                ejercicioAleatorio("Biceps", res.id, repeticiones, series, tiempo, peso).then(() => {console.log("entra")})
                ejercicioAleatorio("Biceps", res.id, repeticiones, series, tiempo, peso).then(() => {console.log("entra")})
                agregarCardio(tiempoCardio, res.id).then(() => console.log("entra"))
            })
            crearRutina(idUsuario, diasGym, horasGym, tiempo, repeticiones,"Pectorales","https://www.cambiatufisico.com/wp-content/uploads/rutina-pecho-pectoral-superior.jpg").then(res => {
                ejercicioAleatorio("Pectorales", res.id, repeticiones, series, tiempo, peso).then(() => {console.log("entra")})
                ejercicioAleatorio("Pectorales", res.id, repeticiones, series, tiempo, peso).then(() => {console.log("entra")})
                ejercicioAleatorio("Pectorales", res.id, repeticiones, series, tiempo, peso).then(() => {console.log("entra")})
                ejercicioAleatorio("Pectorales", res.id, repeticiones, series, tiempo, peso).then(() => {console.log("entra")})
                ejercicioAleatorio("Pectorales", res.id, repeticiones, series, tiempo, peso).then(() => {console.log("entra")})
                agregarCardio(tiempoCardio, res.id).then(() => console.log("entra"))
            })
            crearRutina(idUsuario, diasGym, horasGym, tiempo, repeticiones,"Pierna","https://e00-elmundo.uecdn.es/assets/multimedia/imagenes/2019/07/12/15629301078089.jpg").then(res => {
                ejercicioAleatorio("Cuadriceps", res.id, repeticiones, series, tiempo, peso).then(() => {console.log("entra")})
                ejercicioAleatorio("Cuadriceps", res.id, repeticiones, series, tiempo, peso).then(() => {console.log("entra")})
                ejercicioAleatorio("Cuadriceps", res.id, repeticiones, series, tiempo, peso).then(() => {console.log("entra")})
                ejercicioAleatorio("Cuadriceps", res.id, repeticiones, series, tiempo, peso).then(() => {console.log("entra")})
                ejercicioAleatorio("Cuadriceps", res.id, repeticiones, series, tiempo, peso).then(() => {console.log("entra")})
                agregarCardio(tiempoCardio, res.id).then(() => console.log("entra"))
            })
            crearRutina(idUsuario, diasGym, horasGym, tiempo, repeticiones,"Todos los musculos", "https://i.ytimg.com/vi/0PumJ_Z0MuQ/maxresdefault.jpg").then(res => {
                ejercicioAleatorio("Todo", res.id).then(() => {console.log("entra")})
                ejercicioAleatorio("Todo", res.id).then(() => {console.log("entra")})
                ejercicioAleatorio("Todo", res.id).then(() => {console.log("entra")})
                ejercicioAleatorio("Todo", res.id).then(() => {console.log("entra")})
                ejercicioAleatorio("Todo", res.id).then(() => {console.log("entra")})
                agregarCardio(tiempoCardio, res.id).then(() => console.log("entra"))
            })
            crearRutina(idUsuario, diasGym, horasGym, tiempo, repeticiones,"Abdomen","https://www.runtastic.com/blog/wp-content/uploads/2018/02/Copy-of-thumbnail_blog_1200x800-5-1024x683.jpg").then(res => {
                ejercicioAleatorio("Abdomen", res.id, repeticiones, series, tiempo, peso).then(() => {console.log("entra")})
                ejercicioAleatorio("Abdomen", res.id, repeticiones, series, tiempo, peso).then(() => {console.log("entra")})
                ejercicioAleatorio("Abdomen", res.id, repeticiones, series, tiempo, peso).then(() => {console.log("entra")})
                ejercicioAleatorio("Abdomen", res.id, repeticiones, series, tiempo, peso).then(() => {console.log("entra")})
                ejercicioAleatorio("Abdomen", res.id, repeticiones, series, tiempo, peso).then(() => {console.log("entra")})
                agregarCardio(tiempoCardio, res.id).then(() => console.log("entra"))
            })
            return {tiempoEjercicio: "8 min"}
        }else if (horasGym == 2 || horasGym == 2.5){
            //Query 8 brazo , 8 hombro, 8 espalda , 8 pecho, 8 pierna
            crearRutina(idUsuario, diasGym, horasGym, tiempo, repeticiones,"brazo","https://i.ytimg.com/vi/YYHjaVexUg0/maxresdefault.jpg").then(res => {
                ejercicioAleatorio("Biceps", res.id, repeticiones, series, tiempo, peso).then(() => {console.log("entra")})
                ejercicioAleatorio("Biceps", res.id, repeticiones, series, tiempo, peso).then(() => {console.log("entra")})
                ejercicioAleatorio("Biceps", res.id, repeticiones, series, tiempo, peso).then(() => {console.log("entra")})
                ejercicioAleatorio("Biceps", res.id, repeticiones, series, tiempo, peso).then(() => {console.log("entra")})
                ejercicioAleatorio("Biceps", res.id, repeticiones, series, tiempo, peso).then(() => {console.log("entra")})
                ejercicioAleatorio("Biceps", res.id, repeticiones, series, tiempo, peso).then(() => {console.log("entra")})
                ejercicioAleatorio("Biceps", res.id, repeticiones, series, tiempo, peso).then(() => {console.log("entra")})
                ejercicioAleatorio("Biceps", res.id, repeticiones, series, tiempo, peso).then(() => {console.log("entra")})
                agregarCardio(tiempoCardio, res.id).then(() => console.log("entra"))
            })
            crearRutina(idUsuario, diasGym, horasGym, tiempo, repeticiones,"Pectorales","https://www.cambiatufisico.com/wp-content/uploads/rutina-pecho-pectoral-superior.jpg").then(res => {
                ejercicioAleatorio("Pectorales", res.id, repeticiones, series, tiempo, peso).then(() => {console.log("entra")})
                ejercicioAleatorio("Pectorales", res.id, repeticiones, series, tiempo, peso).then(() => {console.log("entra")})
                ejercicioAleatorio("Pectorales", res.id, repeticiones, series, tiempo, peso).then(() => {console.log("entra")})
                ejercicioAleatorio("Pectorales", res.id, repeticiones, series, tiempo, peso).then(() => {console.log("entra")})
                ejercicioAleatorio("Pectorales", res.id, repeticiones, series, tiempo, peso).then(() => {console.log("entra")})
                ejercicioAleatorio("Pectorales", res.id, repeticiones, series, tiempo, peso).then(() => {console.log("entra")})
                ejercicioAleatorio("Pectorales", res.id, repeticiones, series, tiempo, peso).then(() => {console.log("entra")})
                ejercicioAleatorio("Pectorales", res.id, repeticiones, series, tiempo, peso).then(() => {console.log("entra")})
                agregarCardio(tiempoCardio, res.id).then(() => console.log("entra"))
            })
            crearRutina(idUsuario, diasGym, horasGym, tiempo, repeticiones,"Pierna","https://e00-elmundo.uecdn.es/assets/multimedia/imagenes/2019/07/12/15629301078089.jpg").then(res => {
                ejercicioAleatorio("Cuadriceps", res.id, repeticiones, series, tiempo, peso).then(() => {console.log("entra")})
                ejercicioAleatorio("Cuadriceps", res.id, repeticiones, series, tiempo, peso).then(() => {console.log("entra")})
                ejercicioAleatorio("Cuadriceps", res.id, repeticiones, series, tiempo, peso).then(() => {console.log("entra")})
                ejercicioAleatorio("Cuadriceps", res.id, repeticiones, series, tiempo, peso).then(() => {console.log("entra")})
                ejercicioAleatorio("Cuadriceps", res.id, repeticiones, series, tiempo, peso).then(() => {console.log("entra")})
                ejercicioAleatorio("Cuadriceps", res.id, repeticiones, series, tiempo, peso).then(() => {console.log("entra")})
                ejercicioAleatorio("Cuadriceps", res.id, repeticiones, series, tiempo, peso).then(() => {console.log("entra")})
                ejercicioAleatorio("Cuadriceps", res.id, repeticiones, series, tiempo, peso).then(() => {console.log("entra")})
                agregarCardio(tiempoCardio, res.id).then(() => console.log("entra"))
            })
            crearRutina(idUsuario, diasGym, horasGym, tiempo, repeticiones,"Todos los musculos", "https://i.ytimg.com/vi/0PumJ_Z0MuQ/maxresdefault.jpg").then(res => {
                ejercicioAleatorio("Todo", res.id).then(() => {console.log("entra")})
                ejercicioAleatorio("Todo", res.id).then(() => {console.log("entra")})
                ejercicioAleatorio("Todo", res.id).then(() => {console.log("entra")})
                ejercicioAleatorio("Todo", res.id).then(() => {console.log("entra")})
                ejercicioAleatorio("Todo", res.id).then(() => {console.log("entra")})
                ejercicioAleatorio("Todo", res.id).then(() => {console.log("entra")})
                ejercicioAleatorio("Todo", res.id).then(() => {console.log("entra")})
                ejercicioAleatorio("Todo", res.id).then(() => {console.log("entra")})
                agregarCardio(tiempoCardio, res.id).then(() => console.log("entra"))
            })
            crearRutina(idUsuario, diasGym, horasGym, tiempo, repeticiones,"Abdomen","https://www.runtastic.com/blog/wp-content/uploads/2018/02/Copy-of-thumbnail_blog_1200x800-5-1024x683.jpg").then(res => {
                ejercicioAleatorio("Abdomen", res.id, repeticiones, series, tiempo, peso).then(() => {console.log("entra")})
                ejercicioAleatorio("Abdomen", res.id, repeticiones, series, tiempo, peso).then(() => {console.log("entra")})
                ejercicioAleatorio("Abdomen", res.id, repeticiones, series, tiempo, peso).then(() => {console.log("entra")})
                ejercicioAleatorio("Abdomen", res.id, repeticiones, series, tiempo, peso).then(() => {console.log("entra")})
                ejercicioAleatorio("Abdomen", res.id, repeticiones, series, tiempo, peso).then(() => {console.log("entra")})
                ejercicioAleatorio("Abdomen", res.id, repeticiones, series, tiempo, peso).then(() => {console.log("entra")})
                ejercicioAleatorio("Abdomen", res.id, repeticiones, series, tiempo, peso).then(() => {console.log("entra")})
                ejercicioAleatorio("Abdomen", res.id, repeticiones, series, tiempo, peso).then(() => {console.log("entra")})
                agregarCardio(tiempoCardio, res.id).then(() => console.log("entra"))
            })
            return {tiempoEjercicio: "12 min"}
        }else if (horasGym == 3 || horasGym == 3.5){
            //Query 10 brazo , 10 hombro, 10 espalda , 10 pecho, 10 pierna
            crearRutina(idUsuario, diasGym, horasGym, tiempo, repeticiones,"Brazo","https://i.ytimg.com/vi/YYHjaVexUg0/maxresdefault.jpg").then(res => {
                ejercicioAleatorio("Biceps", res.id, repeticiones, series, tiempo, peso).then(() => {console.log("entra")})
                ejercicioAleatorio("Biceps", res.id, repeticiones, series, tiempo, peso).then(() => {console.log("entra")})
                ejercicioAleatorio("Biceps", res.id, repeticiones, series, tiempo, peso).then(() => {console.log("entra")})
                ejercicioAleatorio("Biceps", res.id, repeticiones, series, tiempo, peso).then(() => {console.log("entra")})
                ejercicioAleatorio("Biceps", res.id, repeticiones, series, tiempo, peso).then(() => {console.log("entra")})
                ejercicioAleatorio("Biceps", res.id, repeticiones, series, tiempo, peso).then(() => {console.log("entra")})
                ejercicioAleatorio("Biceps", res.id, repeticiones, series, tiempo, peso).then(() => {console.log("entra")})
                ejercicioAleatorio("Biceps", res.id, repeticiones, series, tiempo, peso).then(() => {console.log("entra")})
                ejercicioAleatorio("Biceps", res.id, repeticiones, series, tiempo, peso).then(() => {console.log("entra")})
                ejercicioAleatorio("Biceps", res.id, repeticiones, series, tiempo, peso).then(() => {console.log("entra")})
                agregarCardio(tiempoCardio, res.id).then(() => console.log("entra"))
            })
            crearRutina(idUsuario, diasGym, horasGym, tiempo, repeticiones,"Pectorales","https://www.cambiatufisico.com/wp-content/uploads/rutina-pecho-pectoral-superior.jpg").then(res => {
                ejercicioAleatorio("Pectorales", res.id, repeticiones, series, tiempo, peso).then(() => {console.log("entra")})
                ejercicioAleatorio("Pectorales", res.id, repeticiones, series, tiempo, peso).then(() => {console.log("entra")})
                ejercicioAleatorio("Pectorales", res.id, repeticiones, series, tiempo, peso).then(() => {console.log("entra")})
                ejercicioAleatorio("Pectorales", res.id, repeticiones, series, tiempo, peso).then(() => {console.log("entra")})
                ejercicioAleatorio("Pectorales", res.id, repeticiones, series, tiempo, peso).then(() => {console.log("entra")})
                ejercicioAleatorio("Pectorales", res.id, repeticiones, series, tiempo, peso).then(() => {console.log("entra")})
                ejercicioAleatorio("Pectorales", res.id, repeticiones, series, tiempo, peso).then(() => {console.log("entra")})
                ejercicioAleatorio("Pectorales", res.id, repeticiones, series, tiempo, peso).then(() => {console.log("entra")})
                ejercicioAleatorio("Pectorales", res.id, repeticiones, series, tiempo, peso).then(() => {console.log("entra")})
                ejercicioAleatorio("Pectorales", res.id, repeticiones, series, tiempo, peso).then(() => {console.log("entra")})
                agregarCardio(tiempoCardio, res.id).then(() => console.log("entra"))
            })
            crearRutina(idUsuario, diasGym, horasGym, tiempo, repeticiones,"Pierna","https://e00-elmundo.uecdn.es/assets/multimedia/imagenes/2019/07/12/15629301078089.jpg").then(res => {
                ejercicioAleatorio("Cuadriceps", res.id, repeticiones, series, tiempo, peso).then(() => {console.log("entra")})
                ejercicioAleatorio("Cuadriceps", res.id, repeticiones, series, tiempo, peso).then(() => {console.log("entra")})
                ejercicioAleatorio("Cuadriceps", res.id, repeticiones, series, tiempo, peso).then(() => {console.log("entra")})
                ejercicioAleatorio("Cuadriceps", res.id, repeticiones, series, tiempo, peso).then(() => {console.log("entra")})
                ejercicioAleatorio("Cuadriceps", res.id, repeticiones, series, tiempo, peso).then(() => {console.log("entra")})
                ejercicioAleatorio("Cuadriceps", res.id, repeticiones, series, tiempo, peso).then(() => {console.log("entra")})
                ejercicioAleatorio("Cuadriceps", res.id, repeticiones, series, tiempo, peso).then(() => {console.log("entra")})
                ejercicioAleatorio("Cuadriceps", res.id, repeticiones, series, tiempo, peso).then(() => {console.log("entra")})
                ejercicioAleatorio("Cuadriceps", res.id, repeticiones, series, tiempo, peso).then(() => {console.log("entra")})
                ejercicioAleatorio("Cuadriceps", res.id, repeticiones, series, tiempo, peso).then(() => {console.log("entra")})
                agregarCardio(tiempoCardio, res.id).then(() => console.log("entra"))
            })
            crearRutina(idUsuario, diasGym, horasGym, tiempo, repeticiones,"Todos los musculos", "https://i.ytimg.com/vi/0PumJ_Z0MuQ/maxresdefault.jpg").then(res => {
                ejercicioAleatorio("Todo", res.id).then(() => {console.log("entra")})
                ejercicioAleatorio("Todo", res.id).then(() => {console.log("entra")})
                ejercicioAleatorio("Todo", res.id).then(() => {console.log("entra")})
                ejercicioAleatorio("Todo", res.id).then(() => {console.log("entra")})
                ejercicioAleatorio("Todo", res.id).then(() => {console.log("entra")})
                ejercicioAleatorio("Todo", res.id).then(() => {console.log("entra")})
                ejercicioAleatorio("Todo", res.id).then(() => {console.log("entra")})
                ejercicioAleatorio("Todo", res.id).then(() => {console.log("entra")})
                ejercicioAleatorio("Todo", res.id).then(() => {console.log("entra")})
                ejercicioAleatorio("Todo", res.id).then(() => {console.log("entra")})
                agregarCardio(tiempoCardio, res.id).then(() => console.log("entra"))
            })
            crearRutina(idUsuario, diasGym, horasGym, tiempo, repeticiones,"Abdomen","https://www.runtastic.com/blog/wp-content/uploads/2018/02/Copy-of-thumbnail_blog_1200x800-5-1024x683.jpg").then(res => {
                ejercicioAleatorio("Abdomen", res.id, repeticiones, series, tiempo, peso).then(() => {console.log("entra")})
                ejercicioAleatorio("Abdomen", res.id, repeticiones, series, tiempo, peso).then(() => {console.log("entra")})
                ejercicioAleatorio("Abdomen", res.id, repeticiones, series, tiempo, peso).then(() => {console.log("entra")})
                ejercicioAleatorio("Abdomen", res.id, repeticiones, series, tiempo, peso).then(() => {console.log("entra")})
                ejercicioAleatorio("Abdomen", res.id, repeticiones, series, tiempo, peso).then(() => {console.log("entra")})
                ejercicioAleatorio("Abdomen", res.id, repeticiones, series, tiempo, peso).then(() => {console.log("entra")})
                ejercicioAleatorio("Abdomen", res.id, repeticiones, series, tiempo, peso).then(() => {console.log("entra")})
                ejercicioAleatorio("Abdomen", res.id, repeticiones, series, tiempo, peso).then(() => {console.log("entra")})
                ejercicioAleatorio("Abdomen", res.id, repeticiones, series, tiempo, peso).then(() => {console.log("entra")})
                ejercicioAleatorio("Abdomen", res.id, repeticiones, series, tiempo, peso).then(() => {console.log("entra")})
                agregarCardio(tiempoCardio, res.id).then(() => console.log("entra"))
            })
            return {tiempoEjercicio: "14 min"}
        }else if (horasGym == 4 || horasGym == 4.5){
            //Query 12 brazo , 12 hombro, 12 espalda , 12 pecho, 12 pierna
            crearRutina(idUsuario, diasGym, horasGym, tiempo, repeticiones,"Brazo","https://i.ytimg.com/vi/YYHjaVexUg0/maxresdefault.jpg").then(res => {
                ejercicioAleatorio("Biceps", res.id, repeticiones, series, tiempo, peso).then(() => {console.log("entra")})
                ejercicioAleatorio("Biceps", res.id, repeticiones, series, tiempo, peso).then(() => {console.log("entra")})
                ejercicioAleatorio("Biceps", res.id, repeticiones, series, tiempo, peso).then(() => {console.log("entra")})
                ejercicioAleatorio("Biceps", res.id, repeticiones, series, tiempo, peso).then(() => {console.log("entra")})
                ejercicioAleatorio("Biceps", res.id, repeticiones, series, tiempo, peso).then(() => {console.log("entra")})
                ejercicioAleatorio("Biceps", res.id, repeticiones, series, tiempo, peso).then(() => {console.log("entra")})
                ejercicioAleatorio("Biceps", res.id, repeticiones, series, tiempo, peso).then(() => {console.log("entra")})
                ejercicioAleatorio("Biceps", res.id, repeticiones, series, tiempo, peso).then(() => {console.log("entra")})
                ejercicioAleatorio("Biceps", res.id, repeticiones, series, tiempo, peso).then(() => {console.log("entra")})
                ejercicioAleatorio("Biceps", res.id, repeticiones, series, tiempo, peso).then(() => {console.log("entra")})
                ejercicioAleatorio("Biceps", res.id, repeticiones, series, tiempo, peso).then(() => {console.log("entra")})
                ejercicioAleatorio("Biceps", res.id, repeticiones, series, tiempo, peso).then(() => {console.log("entra")})
                agregarCardio(tiempoCardio, res.id).then(() => console.log("entra"))
            })
            crearRutina(idUsuario, diasGym, horasGym, tiempo, repeticiones,"Pectorales","https://www.cambiatufisico.com/wp-content/uploads/rutina-pecho-pectoral-superior.jpg").then(res => {
                ejercicioAleatorio("Pectorales", res.id, repeticiones, series, tiempo, peso).then(() => {console.log("entra")})
                ejercicioAleatorio("Pectorales", res.id, repeticiones, series, tiempo, peso).then(() => {console.log("entra")})
                ejercicioAleatorio("Pectorales", res.id, repeticiones, series, tiempo, peso).then(() => {console.log("entra")})
                ejercicioAleatorio("Pectorales", res.id, repeticiones, series, tiempo, peso).then(() => {console.log("entra")})
                ejercicioAleatorio("Pectorales", res.id, repeticiones, series, tiempo, peso).then(() => {console.log("entra")})
                ejercicioAleatorio("Pectorales", res.id, repeticiones, series, tiempo, peso).then(() => {console.log("entra")})
                ejercicioAleatorio("Pectorales", res.id, repeticiones, series, tiempo, peso).then(() => {console.log("entra")})
                ejercicioAleatorio("Pectorales", res.id, repeticiones, series, tiempo, peso).then(() => {console.log("entra")})
                ejercicioAleatorio("Pectorales", res.id, repeticiones, series, tiempo, peso).then(() => {console.log("entra")})
                ejercicioAleatorio("Pectorales", res.id, repeticiones, series, tiempo, peso).then(() => {console.log("entra")})
                ejercicioAleatorio("Pectorales", res.id, repeticiones, series, tiempo, peso).then(() => {console.log("entra")})
                ejercicioAleatorio("Pectorales", res.id, repeticiones, series, tiempo, peso).then(() => {console.log("entra")})
                ejercicioAleatorio("Pectorales", res.id, repeticiones, series, tiempo, peso).then(() => {console.log("entra")})
                agregarCardio(tiempoCardio, res.id).then(() => console.log("entra"))
            })
            crearRutina(idUsuario, diasGym, horasGym, tiempo, repeticiones,"Pierna","https://e00-elmundo.uecdn.es/assets/multimedia/imagenes/2019/07/12/15629301078089.jpg").then(res => {
                ejercicioAleatorio("Cuadriceps", res.id, repeticiones, series, tiempo, peso).then(() => {console.log("entra")})
                ejercicioAleatorio("Cuadriceps", res.id, repeticiones, series, tiempo, peso).then(() => {console.log("entra")})
                ejercicioAleatorio("Cuadriceps", res.id, repeticiones, series, tiempo, peso).then(() => {console.log("entra")})
                ejercicioAleatorio("Cuadriceps", res.id, repeticiones, series, tiempo, peso).then(() => {console.log("entra")})
                ejercicioAleatorio("Cuadriceps", res.id, repeticiones, series, tiempo, peso).then(() => {console.log("entra")})
                ejercicioAleatorio("Cuadriceps", res.id, repeticiones, series, tiempo, peso).then(() => {console.log("entra")})
                ejercicioAleatorio("Cuadriceps", res.id, repeticiones, series, tiempo, peso).then(() => {console.log("entra")})
                ejercicioAleatorio("Cuadriceps", res.id, repeticiones, series, tiempo, peso).then(() => {console.log("entra")})
                ejercicioAleatorio("Cuadriceps", res.id, repeticiones, series, tiempo, peso).then(() => {console.log("entra")})
                ejercicioAleatorio("Cuadriceps", res.id, repeticiones, series, tiempo, peso).then(() => {console.log("entra")})
                ejercicioAleatorio("Cuadriceps", res.id, repeticiones, series, tiempo, peso).then(() => {console.log("entra")})
                ejercicioAleatorio("Cuadriceps", res.id, repeticiones, series, tiempo, peso).then(() => {console.log("entra")})
                agregarCardio(tiempoCardio, res.id).then(() => console.log("entra"))
            })
            crearRutina(idUsuario, diasGym, horasGym, tiempo, repeticiones,"Todo", "https://i.ytimg.com/vi/0PumJ_Z0MuQ/maxresdefault.jpg").then(res => {
                ejercicioAleatorio("Todo", res.id).then(() => {console.log("entra")})
                ejercicioAleatorio("Todo", res.id).then(() => {console.log("entra")})
                ejercicioAleatorio("Todo", res.id).then(() => {console.log("entra")})
                ejercicioAleatorio("Todo", res.id).then(() => {console.log("entra")})
                ejercicioAleatorio("Todo", res.id).then(() => {console.log("entra")})
                ejercicioAleatorio("Todo", res.id).then(() => {console.log("entra")})
                ejercicioAleatorio("Todo", res.id).then(() => {console.log("entra")})
                ejercicioAleatorio("Todo", res.id).then(() => {console.log("entra")})
                ejercicioAleatorio("Todo", res.id).then(() => {console.log("entra")})
                ejercicioAleatorio("Todo", res.id).then(() => {console.log("entra")})
                ejercicioAleatorio("Todo", res.id).then(() => {console.log("entra")})
                ejercicioAleatorio("Todo", res.id).then(() => {console.log("entra")})
                agregarCardio(tiempoCardio, res.id).then(() => console.log("entra"))
                
            })
            crearRutina(idUsuario, diasGym, horasGym, tiempo, repeticiones,"Abdomen","https://www.runtastic.com/blog/wp-content/uploads/2018/02/Copy-of-thumbnail_blog_1200x800-5-1024x683.jpg").then(res => {
                ejercicioAleatorio("Abdomen", res.id, repeticiones, series, tiempo, peso).then(() => {console.log("entra")})
                ejercicioAleatorio("Abdomen", res.id, repeticiones, series, tiempo, peso).then(() => {console.log("entra")})
                ejercicioAleatorio("Abdomen", res.id, repeticiones, series, tiempo, peso).then(() => {console.log("entra")})
                ejercicioAleatorio("Abdomen", res.id, repeticiones, series, tiempo, peso).then(() => {console.log("entra")})
                ejercicioAleatorio("Abdomen", res.id, repeticiones, series, tiempo, peso).then(() => {console.log("entra")})
                ejercicioAleatorio("Abdomen", res.id, repeticiones, series, tiempo, peso).then(() => {console.log("entra")})
                ejercicioAleatorio("Abdomen", res.id, repeticiones, series, tiempo, peso).then(() => {console.log("entra")})
                ejercicioAleatorio("Abdomen", res.id, repeticiones, series, tiempo, peso).then(() => {console.log("entra")})
                ejercicioAleatorio("Abdomen", res.id, repeticiones, series, tiempo, peso).then(() => {console.log("entra")})
                ejercicioAleatorio("Abdomen", res.id, repeticiones, series, tiempo, peso).then(() => {console.log("entra")})
                ejercicioAleatorio("Abdomen", res.id, repeticiones, series, tiempo, peso).then(() => {console.log("entra")})
                ejercicioAleatorio("Abdomen", res.id, repeticiones, series, tiempo, peso).then(() => {console.log("entra")})
                agregarCardio(tiempoCardio, res.id).then(() => console.log("entra"))
            })
            return {tiempoEjercicio: "14 min"}
        }


}
}

let ejercicioAleatorio = async function (parteCuerpo, idRutina, repeticiones, series, tiempo,peso){
    ejercicio = {}
    await Ejercicios.findAll({ where: { partePrincipal: parteCuerpo } })
    .then((ejer)=>{
        ejercicio = ejer[(Math.random() * ejer.length) | 0] 
        console.log(ejercicio)
        EjerciciosRutinas.create({
            peso:peso,
            repeticiones:repeticiones,
            series:series,
            tiempo: tiempo,
            idRutina: idRutina,
            idEjercicio: ejercicio.id,
            foto: ejercicio.foto,
            video: ejercicio.video
        }).then((creado)=>{
            console.log(creado)
        })  
    })

}

async function agregarCardio(tiempoCardio, idRutina){
    await Ejercicios.findAll({ where: { partePrincipal: "Todo" } })
    .then((ejer)=>{
        ejercicio = ejer[(Math.random() * ejer.length) | 0] 
        console.log(ejercicio)
        EjerciciosRutinas.create({
            peso:0,
            repeticiones:0,
            series:0,
            tiempo: 20,
            idRutina: idRutina,
            idEjercicio: ejercicio.id,
            foto: ejercicio.foto,
            video: ejercicio.video
        }).then((creado)=>{
            console.log(creado)
        }).catch((error)=>{
            console.log(error)
        })    
    })
}






async function crearRutina(idUsuario,diasGym,horasGym,tiempo,repeticiones,dia,foto){
    console.log(foto)
    rutina = {}
    await Rutinas.create({
        nombre:dia ,
        intensidad:repeticiones,
        tiempo:tiempo,
        idUsuario: idUsuario,
        foto: foto
    }).then((creado)=>{
        rutina = creado
    })
    return rutina
    
}

module.exports ={
    crearRutinaEndomorfo
}


