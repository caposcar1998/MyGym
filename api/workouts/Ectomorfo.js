
const {Ejercicios} = require("../models") 
const {EjerciciosRutinas} = require ("../models")
const {Rutinas} = require ("../models")

async function crearRutinaEctomorfo(objetivoCuerpo, diasGym, horasGym, intensidad, idUsuario, nombreUsuario){
    if (objetivoCuerpo == "BajarPeso"){
        await rutinaBajarDePeso(diasGym, horasGym, intensidad, idUsuario, nombreUsuario, objetivoCuerpo)
    }if (objetivoCuerpo == "Tonificar") {
        await rutinaBajarDePeso(diasGym, horasGym, intensidad, idUsuario, nombreUsuario, objetivoCuerpo)
    } else {
        await rutinaBajarDePeso(diasGym, horasGym, intensidad, idUsuario, nombreUsuario, objetivoCuerpo)
    }
}

function rutinaBajarDePeso(diasGym, horasGym, intensidad, idUsuario, nombreUsuario, objetivoCuerpo){

    intensidadEjercicios = calcularIntensidad(intensidad)
    repeticiones = 6
    series = 5
    tiempo = 6
    peso = 5
    calcularEjerciciosDiaHoras(diasGym, horasGym, nombreUsuario, objetivoCuerpo, idUsuario, repeticiones, series, tiempo, peso)
}

function rutinaTonificar(){
    intensidadEjercicios = calcularIntensidad(intensidad)
    repeticiones = 8
    series = 5
    tiempo = 4
    peso = 7
    calcularEjerciciosDiaHoras(diasGym, horasGym, nombreUsuario, objetivoCuerpo, idUsuario, repeticiones, series, peso)
}

function rutinaGanarMasa(){
    intensidadEjercicios = calcularIntensidad(intensidad)
    repeticiones = 5
    series = 10
    tiempo = 8
    peso = 9
    calcularEjerciciosDiaHoras(diasGym, horasGym, nombreUsuario, objetivoCuerpo, idUsuario, repeticiones, series, peso)
}


function calcularIntensidad(intensidad){
    if (intensidad == 0){
        return {repeticiones: 5, series:3}
    } else if(intensidad == 1 || intensidad == 2 || intensidad == 3){
        return {repeticiones: 7, series:4}
    } else if(intensidad == 4 || intensidad == 5 || intensidad == 6){
        return {repeticiones: 9, series:5}
    }else{
        return {repeticiones: 10, series:6}
    }
}

function calcularEjerciciosDiaHoras(diasGym, horasGym, nombreUsuario, tipoRutina, idUsuario, repeticiones, series, tiempo, peso){
   
    if (diasGym == 1){
        if (horasGym == 1 || horasGym == 1.5){
            //Query 5 ejercicios de todo
            crearRutina(nombreUsuario, tipoRutina, idUsuario, diasGym, horasGym).then(res => {
                ejercicioAleatorio("Hombros", res.id,repeticiones, series, tiempo, peso).then(() => {console.log("entra")})
                ejercicioAleatorio("Pectorales", res.id, repeticiones, series, tiempo, peso).then(() => {console.log("entra")})
                ejercicioAleatorio("Biceps", res.id, repeticiones, series, tiempo, peso).then(() => {console.log("entra")})
                ejercicioAleatorio("Pectorales", res.id, repeticiones, series, tiempo, peso).then(() => {console.log("entra")})
                ejercicioAleatorio("Cuadriceps", res.id, repeticiones, series, tiempo, peso).then(() => {console.log("entra")})
    
            })

        }else if (horasGym == 2 || horasGym == 2.5){
            //Query 8 ejercicios de todo            
            crearRutina(nombreUsuario, tipoRutina, idUsuario, diasGym, horasGym).then(res => {
                ejercicioAleatorio("Hombros", res.id,repeticiones, series, tiempo, peso).then(() => {console.log("entra")})
                ejercicioAleatorio("Pectorales", res.id, repeticiones, series, tiempo, peso).then(() => {console.log("entra")})
                ejercicioAleatorio("Biceps", res.id, repeticiones, series, tiempo, peso).then(() => {console.log("entra")})
                ejercicioAleatorio("Pectorales", res.id, repeticiones, series, tiempo, peso).then(() => {console.log("entra")})
                ejercicioAleatorio("Tríceps", res.id, repeticiones, series, tiempo, peso).then(() => {console.log("entra")})
                ejercicioAleatorio("Glúteos", res.id, repeticiones, series, tiempo, peso).then(() => {console.log("entra")})
                ejercicioAleatorio("Abdomen", res.id, repeticiones, series, tiempo, peso).then(() => {console.log("entra")})
                ejercicioAleatorio("Hombros", res.id,repeticiones, series, tiempo, peso).then(() => {console.log("entra")})
            })
        }else if (horasGym == 3 || horasGym == 3.5){
            //Query 12 ejercicios de todo
            crearRutina(nombreUsuario, tipoRutina, idUsuario, diasGym, horasGym).then(res => {
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
            })
        }else if (horasGym == 4 || horasGym == 4.5){
            //Query 15 ejercicios de todo
            crearRutina(nombreUsuario, tipoRutina, idUsuario, diasGym, horasGym).then(res => {
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
            })
        }
    }else if (diasGym == 2){
        if (horasGym == 1 || horasGym == 1.5){
            //Query 5 arriba y 5 abajo
            crearRutina(nombreUsuario, tipoRutina, idUsuario, diasGym, horasGym).then(res => {
                ejercicioAleatorio("Hombros", res.id,repeticiones, series, tiempo, peso).then(() => {console.log("entra")})
                ejercicioAleatorio("Pectorales", res.id, repeticiones, series, tiempo, peso).then(() => {console.log("entra")})
                ejercicioAleatorio("Biceps", res.id, repeticiones, series, tiempo, peso).then(() => {console.log("entra")})
                ejercicioAleatorio("Pectorales", res.id, repeticiones, series, tiempo, peso).then(() => {console.log("entra")})
                ejercicioAleatorio("Cuadriceps", res.id, repeticiones, series, tiempo, peso).then(() => {console.log("entra")})
    
            })
            crearRutina(nombreUsuario, tipoRutina, idUsuario, diasGym, horasGym).then(res => {
                ejercicioAleatorio("Abdomen", res.id, repeticiones, series, tiempo, peso).then(() => {console.log("entra")})
                ejercicioAleatorio("Cuadriceps", res.id, repeticiones, series, tiempo, peso).then(() => {console.log("entra")})
                ejercicioAleatorio("Todo", res.id).then(() => {console.log("entra")})
                ejercicioAleatorio("Cuadriceps", res.id, repeticiones, series, tiempo, peso).then(() => {console.log("entra")})
                ejercicioAleatorio("Cuadriceps", res.id, repeticiones, series, tiempo, peso).then(() => {console.log("entra")})
    
            })
        }else if (horasGym == 2 || horasGym == 2.5){
            //Query 8 arriba y 8 abajo
            crearRutina(nombreUsuario, tipoRutina, idUsuario, diasGym, horasGym).then(res => {
                ejercicioAleatorio("Hombros", res.id,repeticiones, series, tiempo, peso).then(() => {console.log("entra")})
                ejercicioAleatorio("Pectorales", res.id, repeticiones, series, tiempo, peso).then(() => {console.log("entra")})
                ejercicioAleatorio("Biceps", res.id, repeticiones, series, tiempo, peso).then(() => {console.log("entra")})
                ejercicioAleatorio("Pectorales", res.id, repeticiones, series, tiempo, peso).then(() => {console.log("entra")})
                ejercicioAleatorio("Cuadriceps", res.id, repeticiones, series, tiempo, peso).then(() => {console.log("entra")})
                ejercicioAleatorio("Biceps", res.id, repeticiones, series, tiempo, peso).then(() => {console.log("entra")})
                ejercicioAleatorio("Pectorales", res.id, repeticiones, series, tiempo, peso).then(() => {console.log("entra")})
                ejercicioAleatorio("Cuadriceps", res.id, repeticiones, series, tiempo, peso).then(() => {console.log("entra")})
    
            })
            crearRutina(nombreUsuario, tipoRutina, idUsuario, diasGym, horasGym).then(res => {
                ejercicioAleatorio("Abdomen", res.id, repeticiones, series, tiempo, peso).then(() => {console.log("entra")})
                ejercicioAleatorio("Cuadriceps", res.id, repeticiones, series, tiempo, peso).then(() => {console.log("entra")})
                ejercicioAleatorio("Todo", res.id).then(() => {console.log("entra")})
                ejercicioAleatorio("Cuadriceps", res.id, repeticiones, series, tiempo, peso).then(() => {console.log("entra")})
                ejercicioAleatorio("Cuadriceps", res.id, repeticiones, series, tiempo, peso).then(() => {console.log("entra")})
                ejercicioAleatorio("Biceps", res.id, repeticiones, series, tiempo, peso).then(() => {console.log("entra")})
                ejercicioAleatorio("Pectorales", res.id, repeticiones, series, tiempo, peso).then(() => {console.log("entra")})
                ejercicioAleatorio("Cuadriceps", res.id, repeticiones, series, tiempo, peso).then(() => {console.log("entra")})
    
            })
        }else if (horasGym == 3 || horasGym == 3.5){
            crearRutina(nombreUsuario, tipoRutina, idUsuario, diasGym, horasGym).then(res => {
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
    
            })
            crearRutina(nombreUsuario, tipoRutina, idUsuario, diasGym, horasGym).then(res => {
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
    
            })
            
        }else if (horasGym == 4 || horasGym == 4.5){
            //Query 15 arriba y 15 abajo
            crearRutina(nombreUsuario, tipoRutina, idUsuario, diasGym, horasGym).then(res => {
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
            })
            crearRutina(nombreUsuario, tipoRutina, idUsuario, diasGym, horasGym).then(res => {
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
            })
        }

    }else if (diasGym == 3){
        if (horasGym == 1 || horasGym == 1.5){
            //Query 5 brazo y hombro, 5 espalda y pecho, 5 pierna
            crearRutina(nombreUsuario, tipoRutina, idUsuario, diasGym, horasGym).then(res => {
                ejercicioAleatorio("Hombros", res.id,repeticiones, series, tiempo, peso).then(() => {console.log("entra")})
                ejercicioAleatorio("Cuadriceps", res.id, repeticiones, series, tiempo, peso).then(() => {console.log("entra")})
                ejercicioAleatorio("Bíceps", res.id).then(() => {console.log("entra")})
                ejercicioAleatorio("Biceps", res.id, repeticiones, series, tiempo, peso).then(() => {console.log("entra")})
                ejercicioAleatorio("Bíceps", res.id).then(() => {console.log("entra")})
            })
            crearRutina(nombreUsuario, tipoRutina, idUsuario, diasGym, horasGym).then(res => {
                ejercicioAleatorio("Pectorales", res.id, repeticiones, series, tiempo, peso).then(() => {console.log("entra")})
                ejercicioAleatorio("Pectorales", res.id, repeticiones, series, tiempo, peso).then(() => {console.log("entra")})
                ejercicioAleatorio("Pectorales", res.id, repeticiones, series, tiempo, peso).then(() => {console.log("entra")})
                ejercicioAleatorio("Pectorales", res.id, repeticiones, series, tiempo, peso).then(() => {console.log("entra")})
                ejercicioAleatorio("Abdomen", res.id, repeticiones, series, tiempo, peso).then(() => {console.log("entra")})
            })
            crearRutina(nombreUsuario, tipoRutina, idUsuario, diasGym, horasGym).then(res => {
                ejercicioAleatorio("Abdomen", res.id, repeticiones, series, tiempo, peso).then(() => {console.log("entra")})
                ejercicioAleatorio("Cuadriceps", res.id, repeticiones, series, tiempo, peso).then(() => {console.log("entra")})
                ejercicioAleatorio("Todo", res.id).then(() => {console.log("entra")})
                ejercicioAleatorio("Cuadriceps", res.id, repeticiones, series, tiempo, peso).then(() => {console.log("entra")})
                ejercicioAleatorio("Cuadriceps", res.id, repeticiones, series, tiempo, peso).then(() => {console.log("entra")})
            })
            return {tiempoEjercicio: "8 min"}
        }else if (horasGym == 2 || horasGym == 2.5){
            //Query 8 brazo y hombro, 8 espalda y pecho, 8 pierna
            crearRutina(nombreUsuario, tipoRutina, idUsuario, diasGym, horasGym).then(res => {
                ejercicioAleatorio("Hombros", res.id,repeticiones, series, tiempo, peso).then(() => {console.log("entra")})
                ejercicioAleatorio("Cuadriceps", res.id, repeticiones, series, tiempo, peso).then(() => {console.log("entra")})
                ejercicioAleatorio("Bíceps", res.id).then(() => {console.log("entra")})
                ejercicioAleatorio("Biceps", res.id, repeticiones, series, tiempo, peso).then(() => {console.log("entra")})
                ejercicioAleatorio("Bíceps", res.id).then(() => {console.log("entra")})
                ejercicioAleatorio("Bíceps", res.id).then(() => {console.log("entra")})
                ejercicioAleatorio("Biceps", res.id, repeticiones, series, tiempo, peso).then(() => {console.log("entra")})
                ejercicioAleatorio("Bíceps", res.id).then(() => {console.log("entra")})
            })
            crearRutina(nombreUsuario, tipoRutina, idUsuario, diasGym, horasGym).then(res => {
                ejercicioAleatorio("Pectorales", res.id, repeticiones, series, tiempo, peso).then(() => {console.log("entra")})
                ejercicioAleatorio("Pectorales", res.id, repeticiones, series, tiempo, peso).then(() => {console.log("entra")})
                ejercicioAleatorio("Pectorales", res.id, repeticiones, series, tiempo, peso).then(() => {console.log("entra")})
                ejercicioAleatorio("Pectorales", res.id, repeticiones, series, tiempo, peso).then(() => {console.log("entra")})
                ejercicioAleatorio("Abdomen", res.id, repeticiones, series, tiempo, peso).then(() => {console.log("entra")})
                ejercicioAleatorio("Bíceps", res.id).then(() => {console.log("entra")})
                ejercicioAleatorio("Biceps", res.id, repeticiones, series, tiempo, peso).then(() => {console.log("entra")})
                ejercicioAleatorio("Bíceps", res.id).then(() => {console.log("entra")})
            })
            crearRutina(nombreUsuario, tipoRutina, idUsuario, diasGym, horasGym).then(res => {
                ejercicioAleatorio("Abdomen", res.id, repeticiones, series, tiempo, peso).then(() => {console.log("entra")})
                ejercicioAleatorio("Cuadriceps", res.id, repeticiones, series, tiempo, peso).then(() => {console.log("entra")})
                ejercicioAleatorio("Todo", res.id).then(() => {console.log("entra")})
                ejercicioAleatorio("Cuadriceps", res.id, repeticiones, series, tiempo, peso).then(() => {console.log("entra")})
                ejercicioAleatorio("Cuadriceps", res.id, repeticiones, series, tiempo, peso).then(() => {console.log("entra")})
                ejercicioAleatorio("Bíceps", res.id).then(() => {console.log("entra")})
                ejercicioAleatorio("Biceps", res.id, repeticiones, series, tiempo, peso).then(() => {console.log("entra")})
                ejercicioAleatorio("Bíceps", res.id).then(() => {console.log("entra")})
            })
            return {tiempoEjercicio: "12 min"}
        }else if (horasGym == 3 || horasGym == 3.5){
            //Query 10 brazo y hombro, 10 espalda y pecho, 10 pierna
            crearRutina(nombreUsuario, tipoRutina, idUsuario, diasGym, horasGym).then(res => {
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
            })
            crearRutina(nombreUsuario, tipoRutina, idUsuario, diasGym, horasGym).then(res => {
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
            })
            crearRutina(nombreUsuario, tipoRutina, idUsuario, diasGym, horasGym).then(res => {
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
            })
            return {tiempoEjercicio: "14 min"}
        }else if (horasGym == 4 || horasGym == 4.5){
            crearRutina(nombreUsuario, tipoRutina, idUsuario, diasGym, horasGym).then(res => {
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
            })
            crearRutina(nombreUsuario, tipoRutina, idUsuario, diasGym, horasGym).then(res => {
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
            })
            crearRutina(nombreUsuario, tipoRutina, idUsuario, diasGym, horasGym).then(res => {
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
            })
            return {tiempoEjercicio: "14 min"}
        }

    }else if (diasGym == 4){
        if (horasGym == 1 || horasGym == 1.5){
            crearRutina(nombreUsuario, tipoRutina, idUsuario, diasGym, horasGym).then(res => {
                ejercicioAleatorio("Hombros", res.id,repeticiones, series, tiempo, peso).then(() => {console.log("entra")})
                ejercicioAleatorio("Cuadriceps", res.id, repeticiones, series, tiempo, peso).then(() => {console.log("entra")})
                ejercicioAleatorio("Bíceps", res.id).then(() => {console.log("entra")})
                ejercicioAleatorio("Biceps", res.id, repeticiones, series, tiempo, peso).then(() => {console.log("entra")})
                ejercicioAleatorio("Bíceps", res.id).then(() => {console.log("entra")})

            })
            crearRutina(nombreUsuario, tipoRutina, idUsuario, diasGym, horasGym).then(res => {
                ejercicioAleatorio("Pectorales", res.id, repeticiones, series, tiempo, peso).then(() => {console.log("entra")})
                ejercicioAleatorio("Pectorales", res.id, repeticiones, series, tiempo, peso).then(() => {console.log("entra")})
                ejercicioAleatorio("Pectorales", res.id, repeticiones, series, tiempo, peso).then(() => {console.log("entra")})
                ejercicioAleatorio("Pectorales", res.id, repeticiones, series, tiempo, peso).then(() => {console.log("entra")})
                ejercicioAleatorio("Abdomen", res.id, repeticiones, series, tiempo, peso).then(() => {console.log("entra")})

            })
            crearRutina(nombreUsuario, tipoRutina, idUsuario, diasGym, horasGym).then(res => {
                ejercicioAleatorio("Abdomen", res.id, repeticiones, series, tiempo, peso).then(() => {console.log("entra")})
                ejercicioAleatorio("Cuadriceps", res.id, repeticiones, series, tiempo, peso).then(() => {console.log("entra")})
                ejercicioAleatorio("Todo", res.id).then(() => {console.log("entra")})
                ejercicioAleatorio("Cuadriceps", res.id, repeticiones, series, tiempo, peso).then(() => {console.log("entra")})
                ejercicioAleatorio("Cuadriceps", res.id, repeticiones, series, tiempo, peso).then(() => {console.log("entra")})

            })
            crearRutina(nombreUsuario, tipoRutina, idUsuario, diasGym, horasGym).then(res => {
                ejercicioAleatorio("Abdomen", res.id, repeticiones, series, tiempo, peso).then(() => {console.log("entra")})
                ejercicioAleatorio("Abdomen", res.id, repeticiones, series, tiempo, peso).then(() => {console.log("entra")})
                ejercicioAleatorio("Todo", res.id).then(() => {console.log("entra")})
                ejercicioAleatorio("Abdomen", res.id, repeticiones, series, tiempo, peso).then(() => {console.log("entra")})
                ejercicioAleatorio("Abdomen", res.id, repeticiones, series, tiempo, peso).then(() => {console.log("entra")})

            })
            //Query 5 brazo y hombro, 5 espalda, 5 pecho, 5 pierna
            return {tiempoEjercicio: "8 min"}
        }else if (horasGym == 2 || horasGym == 2.5){
            //Query 8 brazo y hombro, 8 espalda , 8 pecho, 8 pierna
            crearRutina(nombreUsuario, tipoRutina, idUsuario, diasGym, horasGym).then(res => {
                ejercicioAleatorio("Hombros", res.id,repeticiones, series, tiempo, peso).then(() => {console.log("entra")})
                ejercicioAleatorio("Cuadriceps", res.id, repeticiones, series, tiempo, peso).then(() => {console.log("entra")})
                ejercicioAleatorio("Bíceps", res.id).then(() => {console.log("entra")})
                ejercicioAleatorio("Biceps", res.id, repeticiones, series, tiempo, peso).then(() => {console.log("entra")})
                ejercicioAleatorio("Bíceps", res.id).then(() => {console.log("entra")})
                ejercicioAleatorio("Bíceps", res.id).then(() => {console.log("entra")})
                ejercicioAleatorio("Biceps", res.id, repeticiones, series, tiempo, peso).then(() => {console.log("entra")})
                ejercicioAleatorio("Bíceps", res.id).then(() => {console.log("entra")})

            })
            crearRutina(nombreUsuario, tipoRutina, idUsuario, diasGym, horasGym).then(res => {
                ejercicioAleatorio("Pectorales", res.id, repeticiones, series, tiempo, peso).then(() => {console.log("entra")})
                ejercicioAleatorio("Pectorales", res.id, repeticiones, series, tiempo, peso).then(() => {console.log("entra")})
                ejercicioAleatorio("Pectorales", res.id, repeticiones, series, tiempo, peso).then(() => {console.log("entra")})
                ejercicioAleatorio("Pectorales", res.id, repeticiones, series, tiempo, peso).then(() => {console.log("entra")})
                ejercicioAleatorio("Abdomen", res.id, repeticiones, series, tiempo, peso).then(() => {console.log("entra")})
                ejercicioAleatorio("Bíceps", res.id).then(() => {console.log("entra")})
                ejercicioAleatorio("Biceps", res.id, repeticiones, series, tiempo, peso).then(() => {console.log("entra")})
                ejercicioAleatorio("Bíceps", res.id).then(() => {console.log("entra")})

            })
            crearRutina(nombreUsuario, tipoRutina, idUsuario, diasGym, horasGym).then(res => {
                ejercicioAleatorio("Abdomen", res.id, repeticiones, series, tiempo, peso).then(() => {console.log("entra")})
                ejercicioAleatorio("Cuadriceps", res.id, repeticiones, series, tiempo, peso).then(() => {console.log("entra")})
                ejercicioAleatorio("Todo", res.id).then(() => {console.log("entra")})
                ejercicioAleatorio("Cuadriceps", res.id, repeticiones, series, tiempo, peso).then(() => {console.log("entra")})
                ejercicioAleatorio("Cuadriceps", res.id, repeticiones, series, tiempo, peso).then(() => {console.log("entra")})
                ejercicioAleatorio("Bíceps", res.id).then(() => {console.log("entra")})
                ejercicioAleatorio("Biceps", res.id, repeticiones, series, tiempo, peso).then(() => {console.log("entra")})
                ejercicioAleatorio("Bíceps", res.id).then(() => {console.log("entra")})

            })
            crearRutina(nombreUsuario, tipoRutina, idUsuario, diasGym, horasGym).then(res => {
                ejercicioAleatorio("Abdomen", res.id, repeticiones, series, tiempo, peso).then(() => {console.log("entra")})
                ejercicioAleatorio("Abdomen", res.id, repeticiones, series, tiempo, peso).then(() => {console.log("entra")})
                ejercicioAleatorio("Todo", res.id).then(() => {console.log("entra")})
                ejercicioAleatorio("Abdomen", res.id, repeticiones, series, tiempo, peso).then(() => {console.log("entra")})
                ejercicioAleatorio("Abdomen", res.id, repeticiones, series, tiempo, peso).then(() => {console.log("entra")})
                ejercicioAleatorio("Bíceps", res.id).then(() => {console.log("entra")})
                ejercicioAleatorio("Biceps", res.id, repeticiones, series, tiempo, peso).then(() => {console.log("entra")})
                ejercicioAleatorio("Bíceps", res.id).then(() => {console.log("entra")})

            })
            return {tiempoEjercicio: "12 min"}
        }else if (horasGym == 3 || horasGym == 3.5){
            //Query 10 brazo y hombro, 10 espalda , 10 pecho, 10 pierna
            crearRutina(nombreUsuario, tipoRutina, idUsuario, diasGym, horasGym).then(res => {
                ejercicioAleatorio("Abdomen", res.id, repeticiones, series, tiempo, peso).then(() => {console.log("entra")})
                ejercicioAleatorio("Abdomen", res.id, repeticiones, series, tiempo, peso).then(() => {console.log("entra")})
                ejercicioAleatorio("Todo", res.id).then(() => {console.log("entra")})
                ejercicioAleatorio("Abdomen", res.id, repeticiones, series, tiempo, peso).then(() => {console.log("entra")})
                ejercicioAleatorio("Abdomen", res.id, repeticiones, series, tiempo, peso).then(() => {console.log("entra")})
                ejercicioAleatorio("Bíceps", res.id).then(() => {console.log("entra")})
                ejercicioAleatorio("Biceps", res.id, repeticiones, series, tiempo, peso).then(() => {console.log("entra")})
                ejercicioAleatorio("Bíceps", res.id).then(() => {console.log("entra")})

            })
            crearRutina(nombreUsuario, tipoRutina, idUsuario, diasGym, horasGym).then(res => {
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
            })
            crearRutina(nombreUsuario, tipoRutina, idUsuario, diasGym, horasGym).then(res => {
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
            })
            return {tiempoEjercicio: "14 min"}
        }else if (horasGym == 4 || horasGym == 4.5){
            //Query 12 brazo y hombro, 12 espalda , 12 pecho, 12 pierna
            crearRutina(nombreUsuario, tipoRutina, idUsuario, diasGym, horasGym).then(res => {
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
            })
            crearRutina(nombreUsuario, tipoRutina, idUsuario, diasGym, horasGym).then(res => {
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
            })
            crearRutina(nombreUsuario, tipoRutina, idUsuario, diasGym, horasGym).then(res => {
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
            })
            return {tiempoEjercicio: "14 min"}
        }

    }else if (diasGym == 5){
        if (horasGym == 1 || horasGym == 1.5){
            //Query 5 brazo , 5 hombro, 5 espalda, 5 pecho, 5 pierna
            crearRutina(nombreUsuario, tipoRutina, idUsuario, diasGym, horasGym).then(res => {
                ejercicioAleatorio("Biceps", res.id, repeticiones, series, tiempo, peso).then(() => {console.log("entra")})
                ejercicioAleatorio("Biceps", res.id, repeticiones, series, tiempo, peso).then(() => {console.log("entra")})
                ejercicioAleatorio("Biceps", res.id, repeticiones, series, tiempo, peso).then(() => {console.log("entra")})
                ejercicioAleatorio("Biceps", res.id, repeticiones, series, tiempo, peso).then(() => {console.log("entra")})
                ejercicioAleatorio("Biceps", res.id, repeticiones, series, tiempo, peso).then(() => {console.log("entra")})
            })
            crearRutina(nombreUsuario, tipoRutina, idUsuario, diasGym, horasGym).then(res => {
                ejercicioAleatorio("Pectorales", res.id, repeticiones, series, tiempo, peso).then(() => {console.log("entra")})
                ejercicioAleatorio("Pectorales", res.id, repeticiones, series, tiempo, peso).then(() => {console.log("entra")})
                ejercicioAleatorio("Pectorales", res.id, repeticiones, series, tiempo, peso).then(() => {console.log("entra")})
                ejercicioAleatorio("Pectorales", res.id, repeticiones, series, tiempo, peso).then(() => {console.log("entra")})
                ejercicioAleatorio("Pectorales", res.id, repeticiones, series, tiempo, peso).then(() => {console.log("entra")})
            })
            crearRutina(nombreUsuario, tipoRutina, idUsuario, diasGym, horasGym).then(res => {
                ejercicioAleatorio("Cuadriceps", res.id, repeticiones, series, tiempo, peso).then(() => {console.log("entra")})
                ejercicioAleatorio("Cuadriceps", res.id, repeticiones, series, tiempo, peso).then(() => {console.log("entra")})
                ejercicioAleatorio("Cuadriceps", res.id, repeticiones, series, tiempo, peso).then(() => {console.log("entra")})
                ejercicioAleatorio("Cuadriceps", res.id, repeticiones, series, tiempo, peso).then(() => {console.log("entra")})
                ejercicioAleatorio("Cuadriceps", res.id, repeticiones, series, tiempo, peso).then(() => {console.log("entra")})
            })
            crearRutina(nombreUsuario, tipoRutina, idUsuario, diasGym, horasGym).then(res => {
                ejercicioAleatorio("Todo", res.id).then(() => {console.log("entra")})
                ejercicioAleatorio("Todo", res.id).then(() => {console.log("entra")})
                ejercicioAleatorio("Todo", res.id).then(() => {console.log("entra")})
                ejercicioAleatorio("Todo", res.id).then(() => {console.log("entra")})
                ejercicioAleatorio("Todo", res.id).then(() => {console.log("entra")})
            })
            crearRutina(nombreUsuario, tipoRutina, idUsuario, diasGym, horasGym).then(res => {
                ejercicioAleatorio("Abdomen", res.id, repeticiones, series, tiempo, peso).then(() => {console.log("entra")})
                ejercicioAleatorio("Abdomen", res.id, repeticiones, series, tiempo, peso).then(() => {console.log("entra")})
                ejercicioAleatorio("Abdomen", res.id, repeticiones, series, tiempo, peso).then(() => {console.log("entra")})
                ejercicioAleatorio("Abdomen", res.id, repeticiones, series, tiempo, peso).then(() => {console.log("entra")})
                ejercicioAleatorio("Abdomen", res.id, repeticiones, series, tiempo, peso).then(() => {console.log("entra")})
            })
            return {tiempoEjercicio: "8 min"}
        }else if (horasGym == 2 || horasGym == 2.5){
            //Query 8 brazo , 8 hombro, 8 espalda , 8 pecho, 8 pierna
            crearRutina(nombreUsuario, tipoRutina, idUsuario, diasGym, horasGym).then(res => {
                ejercicioAleatorio("Biceps", res.id, repeticiones, series, tiempo, peso).then(() => {console.log("entra")})
                ejercicioAleatorio("Biceps", res.id, repeticiones, series, tiempo, peso).then(() => {console.log("entra")})
                ejercicioAleatorio("Biceps", res.id, repeticiones, series, tiempo, peso).then(() => {console.log("entra")})
                ejercicioAleatorio("Biceps", res.id, repeticiones, series, tiempo, peso).then(() => {console.log("entra")})
                ejercicioAleatorio("Biceps", res.id, repeticiones, series, tiempo, peso).then(() => {console.log("entra")})
                ejercicioAleatorio("Biceps", res.id, repeticiones, series, tiempo, peso).then(() => {console.log("entra")})
                ejercicioAleatorio("Biceps", res.id, repeticiones, series, tiempo, peso).then(() => {console.log("entra")})
                ejercicioAleatorio("Biceps", res.id, repeticiones, series, tiempo, peso).then(() => {console.log("entra")})
            })
            crearRutina(nombreUsuario, tipoRutina, idUsuario, diasGym, horasGym).then(res => {
                ejercicioAleatorio("Pectorales", res.id, repeticiones, series, tiempo, peso).then(() => {console.log("entra")})
                ejercicioAleatorio("Pectorales", res.id, repeticiones, series, tiempo, peso).then(() => {console.log("entra")})
                ejercicioAleatorio("Pectorales", res.id, repeticiones, series, tiempo, peso).then(() => {console.log("entra")})
                ejercicioAleatorio("Pectorales", res.id, repeticiones, series, tiempo, peso).then(() => {console.log("entra")})
                ejercicioAleatorio("Pectorales", res.id, repeticiones, series, tiempo, peso).then(() => {console.log("entra")})
                ejercicioAleatorio("Pectorales", res.id, repeticiones, series, tiempo, peso).then(() => {console.log("entra")})
                ejercicioAleatorio("Pectorales", res.id, repeticiones, series, tiempo, peso).then(() => {console.log("entra")})
                ejercicioAleatorio("Pectorales", res.id, repeticiones, series, tiempo, peso).then(() => {console.log("entra")})
            })
            crearRutina(nombreUsuario, tipoRutina, idUsuario, diasGym, horasGym).then(res => {
                ejercicioAleatorio("Cuadriceps", res.id, repeticiones, series, tiempo, peso).then(() => {console.log("entra")})
                ejercicioAleatorio("Cuadriceps", res.id, repeticiones, series, tiempo, peso).then(() => {console.log("entra")})
                ejercicioAleatorio("Cuadriceps", res.id, repeticiones, series, tiempo, peso).then(() => {console.log("entra")})
                ejercicioAleatorio("Cuadriceps", res.id, repeticiones, series, tiempo, peso).then(() => {console.log("entra")})
                ejercicioAleatorio("Cuadriceps", res.id, repeticiones, series, tiempo, peso).then(() => {console.log("entra")})
                ejercicioAleatorio("Cuadriceps", res.id, repeticiones, series, tiempo, peso).then(() => {console.log("entra")})
                ejercicioAleatorio("Cuadriceps", res.id, repeticiones, series, tiempo, peso).then(() => {console.log("entra")})
                ejercicioAleatorio("Cuadriceps", res.id, repeticiones, series, tiempo, peso).then(() => {console.log("entra")})
            })
            crearRutina(nombreUsuario, tipoRutina, idUsuario, diasGym, horasGym).then(res => {
                ejercicioAleatorio("Todo", res.id).then(() => {console.log("entra")})
                ejercicioAleatorio("Todo", res.id).then(() => {console.log("entra")})
                ejercicioAleatorio("Todo", res.id).then(() => {console.log("entra")})
                ejercicioAleatorio("Todo", res.id).then(() => {console.log("entra")})
                ejercicioAleatorio("Todo", res.id).then(() => {console.log("entra")})
                ejercicioAleatorio("Todo", res.id).then(() => {console.log("entra")})
                ejercicioAleatorio("Todo", res.id).then(() => {console.log("entra")})
                ejercicioAleatorio("Todo", res.id).then(() => {console.log("entra")})
            })
            crearRutina(nombreUsuario, tipoRutina, idUsuario, diasGym, horasGym).then(res => {
                ejercicioAleatorio("Abdomen", res.id, repeticiones, series, tiempo, peso).then(() => {console.log("entra")})
                ejercicioAleatorio("Abdomen", res.id, repeticiones, series, tiempo, peso).then(() => {console.log("entra")})
                ejercicioAleatorio("Abdomen", res.id, repeticiones, series, tiempo, peso).then(() => {console.log("entra")})
                ejercicioAleatorio("Abdomen", res.id, repeticiones, series, tiempo, peso).then(() => {console.log("entra")})
                ejercicioAleatorio("Abdomen", res.id, repeticiones, series, tiempo, peso).then(() => {console.log("entra")})
                ejercicioAleatorio("Abdomen", res.id, repeticiones, series, tiempo, peso).then(() => {console.log("entra")})
                ejercicioAleatorio("Abdomen", res.id, repeticiones, series, tiempo, peso).then(() => {console.log("entra")})
                ejercicioAleatorio("Abdomen", res.id, repeticiones, series, tiempo, peso).then(() => {console.log("entra")})
            })
            return {tiempoEjercicio: "12 min"}
        }else if (horasGym == 3 || horasGym == 3.5){
            //Query 10 brazo , 10 hombro, 10 espalda , 10 pecho, 10 pierna
            crearRutina(nombreUsuario, tipoRutina, idUsuario, diasGym, horasGym).then(res => {
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
            })
            crearRutina(nombreUsuario, tipoRutina, idUsuario, diasGym, horasGym).then(res => {
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
            })
            crearRutina(nombreUsuario, tipoRutina, idUsuario, diasGym, horasGym).then(res => {
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
            })
            crearRutina(nombreUsuario, tipoRutina, idUsuario, diasGym, horasGym).then(res => {
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
            })
            crearRutina(nombreUsuario, tipoRutina, idUsuario, diasGym, horasGym).then(res => {
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
            })
            return {tiempoEjercicio: "14 min"}
        }else if (horasGym == 4 || horasGym == 4.5){
            //Query 12 brazo , 12 hombro, 12 espalda , 12 pecho, 12 pierna
            crearRutina(nombreUsuario, tipoRutina, idUsuario, diasGym, horasGym).then(res => {
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
            })
            crearRutina(nombreUsuario, tipoRutina, idUsuario, diasGym, horasGym).then(res => {
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
            })
            crearRutina(nombreUsuario, tipoRutina, idUsuario, diasGym, horasGym).then(res => {
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
            })
            crearRutina(nombreUsuario, tipoRutina, idUsuario, diasGym, horasGym).then(res => {
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
            })
            crearRutina(nombreUsuario, tipoRutina, idUsuario, diasGym, horasGym).then(res => {
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
            })
            return {tiempoEjercicio: "14 min"}
        }
    }else if (diasGym == 6){
        if (horasGym == 1 || horasGym == 1.5){
            //Query 5 brazo , 5 hombro, 5 espalda, 5 pecho, 5 pierna, 5 abdomen
            return {tiempoEjercicio: "8 min"}
        }else if (horasGym == 2 || horasGym == 2.5){
            //Query 8 brazo , 8 hombro, 8 espalda , 8 pecho, 8 pierna, 8 abdomen
            return {tiempoEjercicio: "12 min"}
        }else if (horasGym == 3 || horasGym == 3.5){
            //Query 10 brazo , 10 hombro, 10 espalda , 10 pecho, 10 pierna,  10 abdomen
            return {tiempoEjercicio: "14 min"}
        }else if (horasGym == 4 || horasGym == 4.5){
            //Query 12 brazo , 12 hombro, 12 espalda , 12 pecho, 12 pierna, 12 abdomen
            return {tiempoEjercicio: "14 min"}
    }else {
        if (horasGym == 1 || horasGym == 1.5){
            //Query 5 brazo , 5 hombro, 5 espalda, 5 pecho, 5 pierna, 5 abdomen, 5 de todo
            return {tiempoEjercicio: "8 min"}
        }else if (horasGym == 2 || horasGym == 2.5){
            //Query 8 brazo , 8 hombro, 8 espalda , 8 pecho, 8 pierna, 8 abdomen, 8 de todo
            return {tiempoEjercicio: "12 min"}
        }else if (horasGym == 3 || horasGym == 3.5){
            //Query 10 brazo , 10 hombro, 10 espalda , 10 pecho, 10 pierna,  10 abdomen, , 10 de todo
            return {tiempoEjercicio: "14 min"}
        }else if(horasGym == 4 || horasGym == 4.5){
            //Query 12 brazo , 12 hombro, 12 espalda , 12 pecho, 12 pierna, 12 abdomen, , 12 de todo
            return {tiempoEjercicio: "14 min"}
        }
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


async function crearRutina(nombreUsuario, tipoRutina, idUsuario, dias, horas){
    rutina = {}
    await Rutinas.create({
        nombre:nombreUsuario + ": " + tipoRutina + ":" + dias + ":" + horas,
        intensidad:4,
        tiempo:0,
        idUsuario: idUsuario
    }).then((creado)=>{
        rutina = creado
    })
    return rutina
    
}

module.exports ={
    crearRutinaEctomorfo
}









