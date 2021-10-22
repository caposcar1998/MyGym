import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { RutinaModel } from './models/rutina.model';
import { Router } from '@angular/router';
import { RutinasRapidasService } from './rutinas-rapidas.service';
@Component({
  selector: 'app-rutinas-rapidas',
  templateUrl: './rutinas-rapidas.component.html',
  styleUrls: ['./rutinas-rapidas.component.scss']
})
export class RutinasRapidasComponent implements OnInit {
  dataRutinas : any;
  currentRutina: Observable<RutinaModel>;
  igGen : number;

  constructor(private rutinasService:  RutinasRapidasService ,private router: Router) { }

  ngOnInit(): void {
    const id = localStorage.getItem("id");
    this.igGen = Number(id);
    this.rutinasService.getRoutines(id).subscribe(
        resp =>{ 
          (this.dataRutinas = resp.response);
          console.log(this.dataRutinas);
        }
      );
  }

  counter(i: number) {
    return new Array(i);
}

  sendToPage(id : string){
    this.router.navigate(['/rutina',id, 'ejercicios'], { queryParams: { allowEdit: id }, fragment: 'loading' })
  }
}