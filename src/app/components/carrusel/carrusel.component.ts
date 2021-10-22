import { Component, OnInit } from '@angular/core';
import { CarruselService } from './carrusel.service';

@Component({
  selector: 'app-carrusel',
  templateUrl: './carrusel.component.html',
  styleUrls: ['./carrusel.component.scss']
})
export class CarruselComponent implements OnInit {

  constructor(private carruselService: CarruselService) { }

  size: string = "col-md-3";
  foto: string = "https://www.entrenamientos.com/media/cache/exercise_750/uploads/exercise/elevacion-lateral-de-hombros-con-mancuernas-2992.png"
  titulo: string ="Brazos de acero"
  tiempo: string = "60"
  descripcion: string = "Para unos brazos de acero"
  rutinas = []
  tama = 0
  personalData = {}
  bodyType = {}
  objetivo = {}
  id = "1"

  ngOnInit(): void {
    this.getAllRoutines()
  }

  createNew(): void{
    this.carruselService.getUserInfo(localStorage.getItem("id")).subscribe(data => {

      this.personalData['nombre'] = JSON.parse(data['response']).nombre
      this.bodyType['body'] = JSON.parse(data['response']).tipoCuerpo
      this.objetivo['goalm'] = JSON.parse(data['response']).objetivoCuerpo
      this.objetivo['daysForWeek'] = JSON.parse(data['response']).diasGym
      this.objetivo['hours'] = JSON.parse(data['response']).horasGym
      this.objetivo['intesity'] = JSON.parse(data['response']).intensidad
      console.log(JSON.stringify(this.personalData))
      console.log(JSON.stringify(this.bodyType))
      console.log(JSON.stringify(this.objetivo))
      this.carruselService.createRutines(JSON.stringify(this.personalData),JSON.stringify(this.bodyType),JSON.stringify(this.objetivo),localStorage.getItem("id")).subscribe(data =>{
        console.log("entra")
        console.log(localStorage.getItem("id"))
        window.location.reload()
      })

    })

  }

  getAllRoutines(){
      this.carruselService.findAllRutines(parseInt(localStorage.getItem("id"))).subscribe(data =>
        {this.rutinas = data["response"],
        console.log(this.rutinas),
        this.tama = this.rutinas.length
      }
        )
    
  }



}
