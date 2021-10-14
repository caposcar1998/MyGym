
const {Ejercicios} = require("../models") 

function crearRutinaEctomorfo(objetivoCuerpo, diasGym, horasGym, intensidad){
    if (objetivoCuerpo == "BajarPeso"){
        rutinaBajarDePeso(diasGym, horasGym, intensidad)
    }if (objetivoCuerpo == "Tonificar") {
        rutinaTonificar(diasGym, horasGym, intensidad)
    } else {
        rutinaGanarMasa(diasGym, horasGym, intensidad)
    }
}

function rutinaBajarDePeso(){
    return {peso: "Poco medio"}
}

function rutinaTonificar(){
    return {peso: "Peso medio-alto"}
}

function rutinaGanarMasa(){
    return {peso: "Peso alto"}
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

function calcularEjerciciosDiaHoras(diasGym, horasGym){
   
    if (diasGym == 1){
        if (horasGym == 1 || horasGym == 1.5){
            //Query 5 ejercicios de todo
            return {tiempoEjercicio: "8 min"}
        }else if (horasGym == 2 || horasGym == 2.5){
            //Query 8 ejercicios de todo
            return {tiempoEjercicio: "12 min"}
        }else if (horasGym == 3 || horasGym == 3.5){
            //Query 12 ejercicios de todo
            return {tiempoEjercicio: "14 min"}
        }else if (horasGym == 4 || horasGym == 4.5){
            //Query 15 ejercicios de todo
            return {tiempoEjercicio: "14 min"}
        }
    }else if (diasGym == 2){
        if (horasGym == 1 || horasGym == 1.5){
            //Query 5 arriba y 5 abajo
            return {tiempoEjercicio: "8 min"}
        }else if (horasGym == 2 || horasGym == 2.5){
            //Query 8 arriba y 8 abajo
            return {tiempoEjercicio: "12 min"}
        }else if (horasGym == 3 || horasGym == 3.5){
            //Query 12 arriba y 12 abajo
            return {tiempoEjercicio: "14 min"}
        }else if (horasGym == 4 || horasGym == 4.5){
            //Query 15 arriba y 15 abajo
            return {tiempoEjercicio: "14 min"}
        }

    }else if (diasGym == 3){
        if (horasGym == 1 || horasGym == 1.5){
            //Query 5 brazo y hombro, 5 espalda y pecho, 5 pierna
            return {tiempoEjercicio: "8 min"}
        }else if (horasGym == 2 || horasGym == 2.5){
            //Query 8 brazo y hombro, 8 espalda y pecho, 8 pierna
            return {tiempoEjercicio: "12 min"}
        }else if (horasGym == 3 || horasGym == 3.5){
            //Query 10 brazo y hombro, 10 espalda y pecho, 10 pierna
            return {tiempoEjercicio: "14 min"}
        }else if (horasGym == 4 || horasGym == 4.5){
            //Query 12 brazo y hombro, 12 espalda y pecho, 12 pierna
            return {tiempoEjercicio: "14 min"}
        }

    }else if (diasGym == 4){
        if (horasGym == 1 || horasGym == 1.5){
            //Query 5 brazo y hombro, 5 espalda, 5 pecho, 5 pierna
            return {tiempoEjercicio: "8 min"}
        }else if (horasGym == 2 || horasGym == 2.5){
            //Query 8 brazo y hombro, 8 espalda , 8 pecho, 8 pierna
            return {tiempoEjercicio: "12 min"}
        }else if (horasGym == 3 || horasGym == 3.5){
            //Query 10 brazo y hombro, 10 espalda , 10 pecho, 10 pierna
            return {tiempoEjercicio: "14 min"}
        }else if (horasGym == 4 || horasGym == 4.5){
            //Query 12 brazo y hombro, 12 espalda , 12 pecho, 12 pierna
            return {tiempoEjercicio: "14 min"}
        }

    }else if (diasGym == 5){
        if (horasGym == 1 || horasGym == 1.5){
            //Query 5 brazo , 5 hombro, 5 espalda, 5 pecho, 5 pierna
            return {tiempoEjercicio: "8 min"}
        }else if (horasGym == 2 || horasGym == 2.5){
            //Query 8 brazo , 8 hombro, 8 espalda , 8 pecho, 8 pierna
            return {tiempoEjercicio: "12 min"}
        }else if (horasGym == 3 || horasGym == 3.5){
            //Query 10 brazo , 10 hombro, 10 espalda , 10 pecho, 10 pierna
            return {tiempoEjercicio: "14 min"}
        }else if (horasGym == 4 || horasGym == 4.5){
            //Query 12 brazo , 12 hombro, 12 espalda , 12 pecho, 12 pierna
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

function ejercicioAleatorio(parteCuerpo){
    Ejercicios.findOne({ where: {partePrincipal: parteCuerpo, tipo: "Peso libre"} }).then(function(ejercicio) {
        console.log(ejercicio)

    })
}

ejercicioAleatorio("Hombros")