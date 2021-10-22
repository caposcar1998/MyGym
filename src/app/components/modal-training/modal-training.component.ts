import { Component, OnInit, Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap'

@Component({
  selector: 'app-modal-training',
  templateUrl: './modal-training.component.html',
  styleUrls: ['./modal-training.component.scss']
})
export class ModalTrainingComponent implements OnInit {
  private modalRef: NgbModalRef;

  @Input()
  equipos: any;

  constructor(public modal:NgbModal) { }

  ngOnInit(): void {

  }


  openM(content){
    this.modalRef = this.modal.open(content);
    console.log(this.equipos);
  }

  onFilledForm(form: NgForm){    
    const value = form.value;

  }

  
}
