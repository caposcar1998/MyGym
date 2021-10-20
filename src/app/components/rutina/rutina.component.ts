import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RutinaService } from './rutina.service';

@Component({
  selector: 'app-rutina',
  templateUrl: './rutina.component.html',
  styleUrls: ['./rutina.component.scss']
})
export class RutinaComponent implements OnInit {
  
  ejercicios= []

  constructor(private route: ActivatedRoute,private rutinaService: RutinaService) { }


  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];
    console.log(id)
    this.rutinaService.findExercies(id).subscribe(data=>
      {this.ejercicios = data["response"],console.log(this.ejercicios)})
  }

}
