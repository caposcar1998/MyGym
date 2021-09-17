import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card-routines',
  templateUrl: './card-routines.component.html',
  styleUrls: ['./card-routines.component.scss']
})
export class CardRoutinesComponent implements OnInit {

  @Input()
  name: string;
  @Input()
  intensity: string;
  @Input()
  time: string;
  
  constructor() { }

  ngOnInit(): void {
  }

}
