import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RutinaService } from './rutina.service';
import { GetEjercicios } from './models/ejercicios.model';
import { EjerciciosModel } from './models/ejercicios.model';
@Component({
  selector: 'app-rutina',
  templateUrl: './rutina.component.html',
  styleUrls: ['./rutina.component.scss']
})
export class RutinaComponent implements OnInit {
  ejercicios= [];
  todosEjercicios : any;
  ejerciciosAPasarEstiramiento : EjerciciosModel[];
  ejerciciosAPasarFortalecimiento : EjerciciosModel[];
  ejerciciosAPasarMusculo : EjerciciosModel[];
  ejerciciosAPasarCardio : EjerciciosModel[];
  ejerciciosEstiramientoSeries : String[];
  ejerciciosFortalecimientoSeries : String[];
  ejerciciosVolumenSeries : String[];
  ejerciciosCardioSeries : String[];
  repeticionesEstiramientoSeries : String[];
  repeticionesFortalecimientoSeries : String[];
  repeticionesVolumenSeries : String[];
  repeticionesCardioSeries : String[];
  tiempoEstiramientoSeries : String[];
  tiempoFortalecimientoSeries : String[];
  tiempoVolumenSeries : String[];
  tiempoCardioSeries : String[];
  emptyEstiramiento : boolean;
  emptyFortalecimiento : boolean;
  emptyVolumen : boolean;
  emptyCardio : boolean;
  constructor(private route: ActivatedRoute,private rutinaService: RutinaService, private http: HttpClient) { 
    this.ejerciciosAPasarEstiramiento = [];
    this.ejerciciosAPasarFortalecimiento = [];
    this.ejerciciosAPasarMusculo = [];
    this.ejerciciosAPasarCardio = [];
    this.ejerciciosEstiramientoSeries = [];
    this.ejerciciosFortalecimientoSeries = [];
    this.ejerciciosVolumenSeries = [];
    this.ejerciciosCardioSeries = [];
    this.repeticionesEstiramientoSeries = [];
    this.repeticionesFortalecimientoSeries = [];
    this.repeticionesVolumenSeries = [];
    this.repeticionesCardioSeries  = [];
    this.tiempoEstiramientoSeries = [];
    this.tiempoFortalecimientoSeries = [];
    this.tiempoVolumenSeries = [];
    this.tiempoCardioSeries = [];
  }
  async ngOnInit(): Promise<void> {
    const id = this.route.snapshot.params['id'];
    console.log(id)
    this.rutinaService.findExercies(id).subscribe(data=>
      {this.ejercicios = data["response"],console.log(this.ejercicios)});
    this.findEjercicios().subscribe(data=>
      {this.todosEjercicios = data.Mensaje});  
      console.log(this.todosEjercicios);
      await this.delay(400);   
    for (let i of this.ejercicios) {
      for (let j of this.todosEjercicios){
        if( i.idEjercicio == j.id){
          if(j.tipo == 'Estiramiento'){
            this.ejerciciosAPasarEstiramiento.push(j);
            this.ejerciciosEstiramientoSeries.push("Series: " + i.series );
            this.repeticionesEstiramientoSeries.push("Repeticiones: " +  i.repeticiones);
            this.tiempoEstiramientoSeries.push("Tiempo Estimado: " + i.tiempo + " minutos");
          }else if(j.tipo == 'Fortalecimiento'){
            this.ejerciciosAPasarFortalecimiento.push(j);
            this.ejerciciosFortalecimientoSeries.push("Series: " + i.series );
            this.repeticionesFortalecimientoSeries.push("Repeticiones: " +  i.repeticiones);
            this.tiempoFortalecimientoSeries.push("Tiempo Estimado: " + i.tiempo + " minutos");
          }else if(j.tipo == 'Cardio'){
            this.ejerciciosAPasarCardio.push(j);
            this.ejerciciosCardioSeries.push("Series: " + i.series );
            this.repeticionesCardioSeries.push("Repeticiones: " +  i.repeticiones);
            this.tiempoCardioSeries.push("Tiempo Estimado: " + i.tiempo + " minutos");
          }else if(j.tipo == 'Volumen'){
            this.ejerciciosAPasarMusculo.push(j);
            this.ejerciciosVolumenSeries.push("Series: " + i.series );
            this.repeticionesVolumenSeries.push("Repeticiones: " +  i.repeticiones);
            this.tiempoVolumenSeries.push("Tiempo Estimado: " + i.tiempo + " minutos");
          }
        }
      }
    }
    if(this.ejerciciosAPasarEstiramiento.length != 0){
      this.emptyEstiramiento = true;
      console.log(this.ejerciciosEstiramientoSeries);
    }
    if(this.ejerciciosAPasarCardio.length != 0){
      this.emptyCardio = true;
    }
    if(this.ejerciciosAPasarMusculo.length != 0){
      this.emptyVolumen = true;
    }
    if(this.ejerciciosAPasarFortalecimiento.length != 0){
      this.emptyFortalecimiento = true;
    }
    console.log(this.ejerciciosAPasarFortalecimiento);
  }

  findEjercicios(){
    let getUrl = "http://localhost:8080/ejercicios";
    return this.http.get<GetEjercicios>(getUrl)
  }

  delay = ms => new Promise(res => setTimeout(res, ms));
}
