import { Component, OnInit, Input, ViewEncapsulation, NgModule, EventEmitter, Output} from '@angular/core';
import { StepModel } from '../models/step.model';
import { Observable } from 'rxjs';
import { StepsService } from '../services/steps.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-step-template',
  templateUrl: './step-template.component.html',
  styleUrls: ['./step-template.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class StepTemplateComponent implements OnInit {

  @Input() step: StepModel;
  @Output() onCompletedForm = new EventEmitter<any>();
  currentStep: Observable<StepModel>;
  constructor(private stepsService: StepsService,
    private router: Router) { }

  onCompleteStep() {
    this.step.isComplete = true;
  }

  ngOnInit(): void {
    this.currentStep = this.stepsService.getCurrentStep();
  }

  sendForm(form: any):void {
    this.onCompletedForm.emit(form);
    
  } 

  onNextStep() {
    
    this.stepsService.moveToNextStep();
  
  }

  showButtonLabel() {
    return !this.stepsService.isLastStep() ? 'Continuar' : 'Finalizar';
  }


}