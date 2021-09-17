import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-ejercicios',
  templateUrl: './card-ejercicios.component.html',
  styleUrls: ['./card-ejercicios.component.scss']
})
export class CardEjerciciosComponent implements OnInit {

  @Input()
  size: string;
  @Input()
  foto: string;
  @Input()
  nombre: string;
  @Input()
  equipo: string;
  @Input()
  descripcion: string;
  @Input()
  principal: string;
  @Input()
  secundaria: string;
  @Input()
  terciaria: string;
  @Input()
  tipo: string;


  constructor() { }

  ngOnInit(): void {
  }

}
