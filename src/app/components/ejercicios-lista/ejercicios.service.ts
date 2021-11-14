import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class EjerciciosService {

  private url= environment.apiUrl

  constructor(private http: HttpClient) { }

  findEjercicios(){
    let getUrl = this.url+"ejercicios";
    return this.http.get(getUrl)
  }
}
