import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardEjerciciosRutinasComponent } from './card-ejercicios-rutinas.component';

describe('CardEjerciciosRutinasComponent', () => {
  let component: CardEjerciciosRutinasComponent;
  let fixture: ComponentFixture<CardEjerciciosRutinasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardEjerciciosRutinasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardEjerciciosRutinasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
