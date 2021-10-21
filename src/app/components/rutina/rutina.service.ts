import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class RutinaService {
  idRutina : number =  this.activeRoute.snapshot.params.id;
  dataRutinas : any;
  ejercicios : any[]
  private url= 'http://localhost:8080/ejerciciosrutinas'
  constructor(private http: HttpClient, private activeRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.findExercies(String(this.idRutina)).subscribe(
        resp =>{ 
          (this.dataRutinas = resp);
          console.log(this.dataRutinas);
        }
      );
  }

  findExercies(idEntrada:String){
    let getUrl = this.url+"/"+idEntrada;
    return this.http.get(getUrl)
  }
}
