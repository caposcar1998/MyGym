import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input()
  size: string;
  @Input()
  foto: string;
  @Input()
  titulo: string;
  @Input()
  tiempo: string;
  @Input()
  descripcion: string;
  @Input()
  idRutina: number;
  



  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  sendToPage(){
    this.router.navigate(['/rutina', this.idRutina, 'ejercicios'], { queryParams: { allowEdit: this.idRutina }, fragment: 'loading' })
  }


}
