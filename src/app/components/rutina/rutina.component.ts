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
  tableToSend = ""
  infoRoutineSend = ""
  rutinaInfo = {}
  mail = ""

  constructor(private route: ActivatedRoute,private rutinaService: RutinaService, private router: Router) { }


  ngOnInit(): void {

    
    this.rutinaService.findExercies(this.id).subscribe(data=>
      {this.ejercicios = data["response"],console.log(this.ejercicios)})

    const id = this.route.snapshot.params['id'];
    this.rutinaService.findExercies(id).subscribe(data=>
      {this.ejercicios = data["response"] ,this.anadirValoresFaltantes()})
    this.rutinaService.findOneRoutine(id).subscribe(data => {
      this.rutinaInfo = (data['response'])
      console.log(this.rutinaInfo);
    })

  }

  anadirValoresFaltantes(): void{
    this.ejercicios.forEach(val => {
      console.log(val['id'])
      this.rutinaService.findOneExercise(val.idEjercicio).subscribe(data =>{
        val["foto"] = data['response']['foto']
        val["descripcion"] = data['response']['descripcion']
        val["partePrincipal"] = data['response']['partePrincipal']
        val["parteSecundaria"] = data['response']['parteSecundaria']
        val["terciaria"] = data['response']['parteTerciaria']
        val["tipo"] = data['response']['tipo']
        val["nombre"] = data['response']['nombre']
        val["equipo"] = data['response']['equipo']
        console.log(val)
        this.infoRoutineSend = this.infoRoutineSend + `
        <tr>
        <td>${val["nombre"]}</td>
        <td>${val["descripcion"]}</td>
        <td>${val["equipo"]}</td>
        <td>${val["partePrincipal"]}</td>
        <td>${val["repeticiones"] }</td>
        <td>${val["series"] }</td>
        <td>${val["tiempo"] }</td>

      </tr>`
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

  sendRoutine(mail){
    this.tableToSend= `<table> 
    <tr>
      <th>Nombre</th>
      <th>Descripcion</th>
      <th>Equipo</th>
      <th>Parte principal</th>
      <th>Repeticiones</th>
      <th>Series</th>
      <th>Tiempo</th>
    </tr>
    ${this.infoRoutineSend}
  </table>`
  this.mail = mail
    this.rutinaService.sendMessage(this.mail,this.rutinaInfo['nombre'],"",this.tableToSend).subscribe(data =>{
      alert("Se manda la rutina al mail")
    })
  }

}