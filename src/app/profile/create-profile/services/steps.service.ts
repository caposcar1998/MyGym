import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { StepModel } from '../models/step.model';

const STEPS = [
  { name: 'Crear perfil', stepIndex: 1, isComplete: true, description: 'Para iniciar tu camino en MyGym, requerimos de tus datos personales con el fin de poder crear rutinas personalizadas y planes de trabajo.' },
  { name: 'Datos personales', stepIndex: 2, isComplete: true, description: 'Llena los datos personales. La información requerida es confidencial.' },
  { name: 'Tipo de cuerpo', stepIndex: 3, isComplete: true, description: 'Selecciona el cuerpo que tengas o, en caso de no encontrarlo, el que más se asemeje al tuyo.' },
  { name: 'Objetivos', stepIndex: 4, isComplete: true, description: 'Selecciona los objetivos por cumplir para poder cumplir tus metas. !Estamos contigo!' }
];

@Injectable({
  providedIn: 'root'
})
export class StepsService {

  steps$: BehaviorSubject<StepModel[]> = new BehaviorSubject<StepModel[]>(STEPS);
  currentStep$: BehaviorSubject<StepModel> = new BehaviorSubject<StepModel>(null);

  constructor() {
    this.currentStep$.next(this.steps$.value[0]);
  }

  setCurrentStep(step: StepModel): void {
    this.currentStep$.next(step);
  }

  getCurrentStep(): Observable<StepModel> {
    return this.currentStep$.asObservable();
  }

  getSteps(): Observable<StepModel[]> {
    return this.steps$.asObservable();
  }

  moveToNextStep(): void {
    const index = this.currentStep$.value.stepIndex;

    if (index < this.steps$.value.length) {
      this.currentStep$.next(this.steps$.value[index]);
    }
  }

  isLastStep(): boolean {
    return this.currentStep$.value.stepIndex === this.steps$.value.length;
  }
}