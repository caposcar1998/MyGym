import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  private pruebaUrl = 'http://localhost:8080/hello'; 
  private url= 'http://localhost:8080'

  constructor(  private http: HttpClient) { }

  getHola(){
    return this.http.get(this.pruebaUrl)
  }



}


