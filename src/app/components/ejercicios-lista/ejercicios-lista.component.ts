import { Component, OnInit } from '@angular/core';
import { EjerciciosService } from './ejercicios.service';

@Component({
  selector: 'app-ejercicios-lista',
  templateUrl: './ejercicios-lista.component.html',
  styleUrls: ['./ejercicios-lista.component.scss']
})
export class EjerciciosListaComponent implements OnInit {
  profileJson: string = "hola"
  crearUsuario: any;
  existeUsuario: string = "No existe"
  foto: string = "https://www.entrenamientos.com/media/cache/exercise_750/uploads/exercise/elevacion-lateral-de-hombros-con-mancuernas-2992.png"
  titulo: string ="Brazos de acero"
  tiempo: string = "60"
  descripcion: string = "Para unos brazos de acero"
  lista:any[];
  constructor(private ejercicioService: EjerciciosService) { }

  ngOnInit(): void {
    this.getUsers()
    
  }


  getUsers(){
    this.ejercicioService.findEjercicios().subscribe(data=>
      {this.lista = data["Mensaje"],console.log(this.lista)}
      ), err => console.log("Error")
  }

  

  

  /*
  this.homeService.findUser(profile.email).subscribe(data=>
    this.checkIfExists(JSON.parse(data["response"]).nombre,JSON.parse(data["response"]).id),
    err => console.log("No existe este usuario")
    )
*/
}
