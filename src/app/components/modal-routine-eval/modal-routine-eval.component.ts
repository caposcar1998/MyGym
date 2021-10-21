import { Component, OnInit, Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap'

@Component({
  selector: 'app-modal-routine-eval',
  templateUrl: './modal-routine-eval.component.html',
  styleUrls: ['./modal-routine-eval.component.scss']
})
export class ModalRoutineEvalComponent implements OnInit {

  private modalRef: NgbModalRef;
  constructor(public modalService:NgbModal) { }

  ngOnInit(): void {
  }

  openM(content){
    this.modalRef = this.modalService.open(content);
    
  }

  onFilledForm(form: NgForm){
    const value = form.value;
    console.log("Evaluar rutina: " + form)
    this.modalRef.close()
  }

}
