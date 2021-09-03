import { Component, OnInit } from '@angular/core';
import { AppService } from './app.service';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(private appService: AppService) {}

  hola: any ;

  hi(){
    this.appService.getHola().subscribe(data=>{
      this.hola = data
      this.hola = this.hola.hola
      console.log(this.hola.hola)
    })
  }

  title = 'myGym';

  ngOnInit(){
    this.hi()
    
  }
}
