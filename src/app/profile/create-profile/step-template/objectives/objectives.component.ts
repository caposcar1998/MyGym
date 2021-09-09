import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import { StepModel } from 'src/app/profile/create-profile/models/step.model';
import { Observable } from 'rxjs';
import { StepsService } from 'src/app/profile/create-profile/services/steps.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-objectives',
  templateUrl: './objectives.component.html',
  styleUrls: ['./objectives.component.scss']
})
export class ObjectivesComponent implements OnInit {

  @Output() onCompletedForm = new EventEmitter<any>();
  @Input() step: StepModel;

  

  ngOnInit(): void {
    this.currentStep = this.stepsService.getCurrentStep();
  }
  
  onFilledForm(form: NgForm){
    const value = form.value;
    this.onCompletedForm.emit(value);
  }
  
  currentStep: Observable<StepModel>;
  constructor(private stepsService: StepsService,
    private router: Router) { }

  onCompleteStep() {
    this.step.isComplete = true;
  }


  onNextStep() {
    
    this.onSubmit();
 
  }


  showButtonLabel() {
    return !this.stepsService.isLastStep() ? 'Continuar' : 'Finalizar';
  }

  onSubmit(): void {
    this.router.navigate(['/home']);
    window.alert("Has finalizado con éxito! La alerta no es definitiva")
  }


}
