import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import { StepModel } from 'src/app/components/create-profile/models/step.model';
import { Observable } from 'rxjs';
import { StepsService } from 'src/app/components/create-profile/services/steps.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-personal-data',
  templateUrl: './personal-data.component.html',
  styleUrls: ['./personal-data.component.scss']
})
export class PersonalDataComponent implements OnInit {

  @Output() onCompletedForm = new EventEmitter<any>();
  @Input() step: StepModel;

  ngOnInit(): void {
    
    this.currentStep = this.stepsService.getCurrentStep();
  }
  
  onFilledForm(form: NgForm){
    const value = form.value;
    console.log(value);
    localStorage.setItem('personalData', JSON.stringify(value));
  }
  
  currentStep: Observable<StepModel>;
  constructor(private stepsService: StepsService,
    private router: Router) { }

  onCompleteStep() {
    this.step.isComplete = true;
  }

  onNextStep() {
    this.stepsService.moveToNextStep();
  }

  showButtonLabel() {
    return !this.stepsService.isLastStep() ? 'Continuar' : 'Finalizar';
  }


}
