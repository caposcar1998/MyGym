import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable, Output } from '@angular/core';
import { environment } from '../../../environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class EjerciciosService {
  @Output() triggerTableExchanges: EventEmitter<any>;

  private url= environment.apiUrl

  constructor(private http: HttpClient) { 
    this.triggerTableExchanges = new EventEmitter();
  }

  findEjercicios(){
    let getUrl = this.url+"ejercicios";
    return this.http.get(getUrl)
  }
}
