import { Component, OnInit, EventEmitter, Output, Input, ɵCodegenComponentFactoryResolver } from '@angular/core';
import { NgForm } from '@angular/forms';
import { StepModel } from 'src/app/components/create-profile/models/step.model';
import { Observable } from 'rxjs';
import { StepsService } from 'src/app/components/create-profile/services/steps.service';
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
    console.log("OnFilledForm" + value);
    localStorage.setItem('objetivo', JSON.stringify(value));
    this.onSubmit();
  }
  
  currentStep: Observable<StepModel>;
  constructor(private stepsService: StepsService,
    private router: Router, private steps : StepsService) { }

  onCompleteStep() {
    this.step.isComplete = true;
  }


  showButtonLabel() {
    return !this.stepsService.isLastStep() ? 'Continuar' : 'Finalizar';
  }

  onSubmit(): void {
    
    this.steps.updateUser(localStorage.getItem('personalData'),localStorage.getItem('bodyType'),localStorage.getItem('objetivo'),localStorage.getItem('id')).subscribe(data=>
      this.endCreatePorfile())

  }

  endCreatePorfile(){
    window.alert("Has finalizado con éxito! La alerta no es definitiva")
    localStorage.removeItem("personalData")
    localStorage.removeItem("bodyType")
    localStorage.removeItem("objetivo")
    window.location.reload();
  }

}
