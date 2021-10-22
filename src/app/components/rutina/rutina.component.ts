import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RutinaService } from './rutina.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-rutina',
  templateUrl: './rutina.component.html',
  styleUrls: ['./rutina.component.scss']
})
export class RutinaComponent implements OnInit {
  
  ejercicios= []

  id = this.route.snapshot.params['id']

  rutinaInfo = {}


  constructor(private route: ActivatedRoute,private rutinaService: RutinaService, private router: Router) { }


  ngOnInit(): void {

    
    this.rutinaService.findExercies(this.id).subscribe(data=>
      {this.ejercicios = data["response"],console.log(this.ejercicios)})

    const id = this.route.snapshot.params['id'];
    this.rutinaService.findExercies(id).subscribe(data=>
      {this.ejercicios = data["response"] ,this.anadirValoresFaltantes()})
    this.rutinaService.findOneRoutine(id).subscribe(data => {
      this.rutinaInfo = (data['response'])
    })

  }

  anadirValoresFaltantes(): void{
    this.ejercicios.forEach(val => {
      console.log(val['id'])
      this.rutinaService.findOneExercise(val.idEjercicio).subscribe(data =>{
        val["descripcion"] = data['response']['descripcion']
        val["partePrincipal"] = data['response']['partePrincipal']
        val["parteSecundaria"] = data['response']['parteSecundaria']
        val["terciaria"] = data['response']['parteTerciaria']
        val["tipo"] = data['response']['tipo']
        val["nombre"] = data['response']['nombre']
        val["equipo"] = data['response']['equipo']
        console.log(val)
      })
    })

  }

  removeRoutine(){
    localStorage.removeItem('evalData')
    this.rutinaService.removeRoutine(this.id).subscribe(data =>{
      console.log("A eliminar rutina con id: ", this.id);
      this.router.navigate(['/home']);
    });



  }

  sendRoutine(){

    this.rutinaService.sendMessage("oscarcontrerascap@gmail.com",this.rutinaInfo['nombre'],"","<h1>Tu rutina</h1>").subscribe(data =>{
      alert("Se manda la rutina al mail")
    })
  }

}