import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EjerciciosListaComponent } from './ejercicios-lista.component';

describe('EjerciciosListaComponent', () => {
  let component: EjerciciosListaComponent;
  let fixture: ComponentFixture<EjerciciosListaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EjerciciosListaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EjerciciosListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
