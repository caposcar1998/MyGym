import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { RutinaModel } from './models/rutina.model';
import { GetRutinas } from './models/rutina.model';
import { Router } from '@angular/router';
@Component({
  selector: 'app-rutinas-rapidas',
  templateUrl: './rutinas-rapidas.component.html',
  styleUrls: ['./rutinas-rapidas.component.scss']
})
export class RutinasRapidasComponent implements OnInit {
  private url= 'http://localhost:8080';
  dataRutinas : any;
  currentRutina: Observable<RutinaModel>;
  igGen : number;
  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
    const id = localStorage.getItem("id");
    this.igGen = Number(id);
    this.getRoutines(id).subscribe(
        resp =>{ 
          (this.dataRutinas = resp.response);
          console.log(this.dataRutinas);
        }
      );
  }

  counter(i: number) {
    return new Array(i);
}
  getRoutines(id:string){
    let getUrl = this.url+"/"+"rutinas/" + id;
    return this.http.get<GetRutinas>(getUrl);
  }

  sendToPage(id : string){
    this.router.navigate(['/rutina',id, 'ejercicios'], { queryParams: { allowEdit: id }, fragment: 'loading' })
  }
}