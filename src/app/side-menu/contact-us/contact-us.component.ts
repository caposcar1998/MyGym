import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from "@angular/material/snack-bar";
@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent implements OnInit {

  public nombre : string;
  public mail : string;
  public mensaje : string;
  public asunto : string;
  constructor(public snackBarError: MatSnackBar) { }
  ngOnInit(): void {
  }

  sendMailUser = (nombre, mail, asunto, mensaje) => {
    if(nombre <= 0 ){
      this.openErrorDialog('No hay nombre');
    }
    this.nombre = nombre
    this.mail = mail
    this.asunto = asunto
    this.mensaje = mensaje
    console.log(this.nombre)
    console.log(this.mail)
    console.log(this.asunto)
    console.log(this.mensaje)
  }

  openErrorDialog(error){
    this.snackBarError.open("Error: "+ error, "", {
      duration: 6000,
      panelClass: 'error-snackbar'
    });
  }
}

