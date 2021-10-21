import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RutinaService } from './rutina.service';

@Component({
  selector: 'app-rutina',
  templateUrl: './rutina.component.html',
  styleUrls: ['./rutina.component.scss']
})
export class RutinaComponent implements OnInit {
  
  ejercicios= []

  constructor(private route: ActivatedRoute,private rutinaService: RutinaService) { }


  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];
    this.rutinaService.findExercies(id).subscribe(data=>
      {this.ejercicios = data["response"] ,this.anadirValoresFaltantes()})
      

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

}
