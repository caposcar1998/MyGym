import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class ContactUsService {

  private urlR = environment.apiUrl+'mandarMensaje'

  constructor(private http: HttpClient) { }

  sendMessage(mail,subject,body){
    let urlPost = this.urlR
    let htmlBody = '<b>'+ body+ '</b>'
    return this.http.post(urlPost,{
      "to":mail,
      "subject":subject,
      "text":body,
      "html":htmlBody,
    })
  }
}
