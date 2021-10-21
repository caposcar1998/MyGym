import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-ejercicios-rutinas',
  templateUrl: './card-ejercicios-rutinas.component.html',
  styleUrls: ['./card-ejercicios-rutinas.component.scss']
})
export class CardEjerciciosRutinasComponent implements OnInit {

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
  @Input()
  repeticiones: string;
  @Input()
  series: string;
  @Input()
  tiempo: string;

  constructor() { }

  ngOnInit(): void {
  }

}
