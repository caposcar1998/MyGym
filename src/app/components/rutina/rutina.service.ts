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
  private urlExercies= 'http://localhost:8080/ejercicio'
  private urlRutina = 'http://localhost:8080/rutina'
  private urlR= 'http://localhost:8080/rutinas';
  private urlS = 'http://localhost:8080/mandarMensaje'
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
