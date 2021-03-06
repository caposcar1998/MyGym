import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import { StepModel } from 'src/app/components/create-profile/models/step.model';
import { Observable } from 'rxjs';
import { StepsService } from 'src/app/components/create-profile/services/steps.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-body-type',
  templateUrl: './body-type.component.html',
  styleUrls: ['./body-type.component.scss']
})
export class BodyTypeComponent implements OnInit {

  @Output() onCompletedForm = new EventEmitter<any>();
  @Input() step: StepModel;


  ngOnInit(): void {
    this.currentStep = this.stepsService.getCurrentStep();
  }
  
  onFilledForm(form: NgForm){
    const value = form.value;
    localStorage.setItem('bodyType', JSON.stringify(value));
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

  onSubmit(): void {
    this.router.navigate(['/home']);
  }
}
