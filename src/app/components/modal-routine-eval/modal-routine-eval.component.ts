import { Component, OnInit, Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap'
import { ModalRoutineEvalService } from './modal-routine-eval.service';
import { AuthService } from '@auth0/auth0-angular';
import { Router } from '@angular/router';
@Component({
  selector: 'app-modal-routine-eval',
  templateUrl: './modal-routine-eval.component.html',
  styleUrls: ['./modal-routine-eval.component.scss']
})
export class ModalRoutineEvalComponent implements OnInit {

  @Input()
  routineId:string;
  private id;
  private modalRef: NgbModalRef;
  private values: any =  {
    generalRating: ' ',
    isTiring: ' ',
    isEasy: ' ',
    routineId: ' ',
    userId: ' '
  };
  constructor(public modal:NgbModal, public auth: AuthService, 
    private modalService: ModalRoutineEvalService, private router: Router) { }

  ngOnInit(): void {
    this.auth.user$.subscribe( (user) => (this.checkUser(user)));
  }

  openM(content){
    this.modalRef = this.modal.open(content);
    
  }

  onFilledForm(form: NgForm){    
    this.auth.user$.subscribe( (user) => (this.checkUser(user)));
    this.modalRef.close()
    this.values.generalRating = form.value.generalRating;
    this.values.isTiring = form.value.isTiring;
    this.values.isEasy = form.value.isEasy;
    this.values.routineId = this.routineId;
    this.values.userId = this.id;
    localStorage.setItem('evalData', JSON.stringify(this.values));
    
    // console.log("Evaluar rutina: " + JSON.stringify(this.values))
    // this.modalService.addEvaluation(localStorage.getItem('evalData'), localStorage.getItem('id')).subscribe(data=>
    //   localStorage.removeItem('evalData'));
    //   window.alert("Se ha calificado la rutina"); 

    console.log("A eliminar rutina con id: ", this.routineId);
    this.modalService.removeRoutine(this.routineId);
    this.router.navigate(['/home']);
  }

  getData(user: any){
    if(user.id){
      this.id = user.id;
    }

  }

  checkUser(user:any){
    this.modalService.findUser(user.email).subscribe(data=> 
      this.getData(JSON.parse(data["response"])),
      err => console.log("No existe información de este usuario")
      )

  }

  

}
