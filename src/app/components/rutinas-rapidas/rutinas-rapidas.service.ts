import { Injectable } from '@angular/core';
import { GetRutinas } from './models/rutina.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RutinasRapidasService {
  private url= 'http://localhost:8080';
  constructor(private http: HttpClient) { }

  getRoutines(id:string){
    let getUrl = this.url+"/"+"rutinas/" + 1;
    return this.http.get<GetRutinas>(getUrl);
  }
  
}  