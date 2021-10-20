import { Component, OnInit, Input } from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap'

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

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

}
