import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CarruselService {

  private urlR = 'http://localhost:8080/rutinas'

  constructor(private http: HttpClient) { }

  findAllRutines(userId){
    let urlGet = this.urlR+"/"+userId
    return this.http.get(urlGet)
  }

}
