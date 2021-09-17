import { Component, Input, OnInit } from '@angular/core';

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

  constructor() { }

  ngOnInit(): void {
  }

}
