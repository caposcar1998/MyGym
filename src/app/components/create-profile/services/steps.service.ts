import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { StepModel } from '../models/step.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const STEPS = [
  { name: 'Crear perfil', stepIndex: 1, isComplete: true, description: 'Para iniciar tu camino en MyGym, requerimos de tus datos personales con el fin de poder crear rutinas personalizadas y planes de trabajo.' },
  { name: 'Datos personales', stepIndex: 2, isComplete: false, description: 'Llena los datos personales. La información requerida es confidencial.' },
  { name: 'Tipo de cuerpo', stepIndex: 3, isComplete: false, description: 'Selecciona el cuerpo que tengas o, en caso de no encontrarlo, el que más se asemeje al tuyo.' },
  { name: 'Objetivos', stepIndex: 4, isComplete: false, description: 'Selecciona los objetivos por cumplir para poder cumplir tus metas. !Estamos contigo!' }
];

@Injectable({
  providedIn: 'root'
})
export class StepsService {
  
  private url= 'http://localhost:8080/usuarios'
  steps$: BehaviorSubject<StepModel[]> = new BehaviorSubject<StepModel[]>(STEPS);
  currentStep$: BehaviorSubject<StepModel> = new BehaviorSubject<StepModel>(null);

  constructor(private http: HttpClient) {
    this.currentStep$.next(this.steps$.value[0])
    
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

  updateUser(personalData:string,bodyType:string,objetivo:string,id:string){
    const personal = JSON.parse(personalData);
    const body = JSON.parse(bodyType)
    const obj = JSON.parse(objetivo)
    let postUrl = this.url+"/"+id;
    return this.http.put(postUrl,{
      "nombre":personal.name,
      "apellido":personal.lastName,
      "edad":personal.age,
      "tipoCuerpo":body.bodyType,
      "diasGym":parseInt(obj.daysForWeek),
      "horasGym":parseFloat(obj.hours),
      "intensidad":parseInt(obj.intesity),
      "foto":personal.foto,
      "objetivoCuerpo":obj.goal
    })
  }

  createRutines(personalData:string,bodyType:string,objetivo:string,id:string){
    let postUrl = this.url+"/"+"rutinas";
    const personal = JSON.parse(personalData);
    const body = JSON.parse(bodyType)
    const obj = JSON.parse(objetivo)
    return this.http.post(postUrl,{
      "tipoCuerpo": body.bodyType,
      "objetivoCuerpo": obj.goalm,
      "diasGym": parseInt(obj.daysForWeek),
      "horasGym":parseFloat(obj.hours),
      "intensidad":parseInt(obj.intesity),
      "idUsuario": id,
      "nombreUsuario" : personal.name
    })
  }
}

