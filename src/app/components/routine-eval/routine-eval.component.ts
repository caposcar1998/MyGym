import { Component, OnInit } from '@angular/core';
import { ModalRoutineEvalService } from '../modal-routine-eval/modal-routine-eval.service';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-routine-eval',
  templateUrl: './routine-eval.component.html',
  styleUrls: ['./routine-eval.component.scss']
})
export class RoutineEvalComponent implements OnInit {

  private id: string = localStorage.getItem('id');
  evaluations = [];
  idNames = [];
  starRating = [];
  constructor(private evalService: ModalRoutineEvalService,
              private auth: AuthService) { }

  

  ngOnInit(): void {

    this.auth.user$.subscribe( (user) => (this.checkUser(user)));
  
    this.evalService.getEvaluation(this.id).subscribe(data=>
      {this.evaluations = data["response"], 
        this.evaluations.forEach(element => 
          this.evalService.getRoutine(element.idRutina).subscribe(rData=>
            this.idNames.push(rData['response']['nombre'])));
    this.idNames.forEach(element => {
      element = JSON.parse(element);
    });
    

    
            
   });

    
    
  }

  getData(user: any){
    if(user.id){
      console.log('User.id en modal' + user.id)
      this.id = user.id;
    }

  }

  checkUser(user:any){
    this.evalService.findUser(user.email).subscribe(data=> 
      this.getData(JSON.parse(data["response"])),
      err => console.log("No existe información de este usuario")
      )

  }

}
