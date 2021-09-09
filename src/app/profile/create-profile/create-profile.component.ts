import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { StepModel } from './models/step.model';
import { Observable } from 'rxjs';
import { StepsService } from './services/steps.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-create-profile',
  templateUrl: './create-profile.component.html',
  styleUrls: ['./create-profile.component.scss']
})
export class CreateProfileComponent implements OnInit {

  currentStep: Observable<StepModel>;

  constructor(
    private stepsService: StepsService,
    private router: Router) { }

  ngOnInit(): void {
    this.currentStep = this.stepsService.getCurrentStep();
  }

  onRecieveData(form: any){
    console.log(form);
  }
}


