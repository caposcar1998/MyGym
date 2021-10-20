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

  ngOnInit(): void {
    this.getAllRoutines()
  }

  getAllRoutines(){
      this.carruselService.findAllRutines(parseInt(localStorage.getItem("id"))).subscribe(data =>
        {this.rutinas = data["response"],
        console.log(this.rutinas)
      }
        )
    
  }

}
