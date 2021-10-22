import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EjerciciosModel } from './models/ejercicios.model';
import { RutinaDetService } from './rutina-det.service';
@Component({
  selector: 'app-rutina-det',
  templateUrl: './rutina-det.component.html',
  styleUrls: ['./rutina-det.component.scss']
})
export class RutinaDetComponent implements OnInit {

  constructor(private route: ActivatedRoute,private rutinaService: RutinaDetService, private http: HttpClient) { 


  }
  ngOnInit() {
  }

 

  delay = ms => new Promise(res => setTimeout(res, ms));
}
