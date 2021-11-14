import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { environment } from '../../../environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class RutinaService {
  idRutina : number =  this.activeRoute.snapshot.params.id;
  dataRutinas : any;
  ejercicios : any[]
  private url= environment.apiUrl+'ejerciciosrutinas'
  private urlExercies= environment.apiUrl+'ejercicio'
  private urlRutina = environment.apiUrl+'rutina'
  private urlR= environment.apiUrl+'rutinas';
  private urlS = environment.apiUrl+'mandarMensaje'
  constructor(private http: HttpClient, private activeRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.findExercies(String(this.idRutina)).subscribe(
        resp =>{ 
          (this.dataRutinas = resp);
          console.log(this.dataRutinas);
        }
      );
  }

  removeRoutine(idRoutine:String){
    console.log("A eliminar Rutina con id: " + idRoutine);
    let deleteUrl = this.urlR+'/rutina/'+idRoutine;
    console.log(deleteUrl)
    this.http.delete(deleteUrl);
    let deleteAll = this.urlR+"/"+idRoutine
    return this.http.delete(deleteAll)
  }

  findExercies(idEntrada:String){
    let getUrl = this.url+"/"+idEntrada;
    return this.http.get(getUrl)
  }

  findOneExercise(id:String){
    let getUrl = this.urlExercies+"/"+id;
    return this.http.get(getUrl);
  }

  findOneRoutine(id:String){
    let getUrl = this.urlRutina+"/"+id
    return this.http.get(getUrl)
  }

  sendMessage(mail,subject,body,htmlBody){
    let urlPost = this.urlS
    return this.http.post(urlPost,{
      "to":mail,
      "subject":subject,
      "text":body,
      "html":htmlBody,
    })
  }

}
