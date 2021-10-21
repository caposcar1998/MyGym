import { Component, OnInit, Input } from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap'

@Component({
  selector: 'app-modal-routine-eval',
  templateUrl: './modal-routine-eval.component.html',
  styleUrls: ['./modal-routine-eval.component.scss']
})
export class ModalRoutineEvalComponent implements OnInit {

  @Input()
  modalName: string;
  @Input()
  contentType: boolean;

  constructor(public modal:NgbModal) { }

  

  ngOnInit(): void {
  }

  openM(content){
    this.modal.open(content,{size:'m'})
  }

  onFilledForm(form: any){}

}
