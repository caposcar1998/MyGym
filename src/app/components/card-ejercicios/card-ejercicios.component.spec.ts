import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardEjerciciosComponent } from './card-ejercicios.component';

describe('CardEjerciciosComponent', () => {
  let component: CardEjerciciosComponent;
  let fixture: ComponentFixture<CardEjerciciosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardEjerciciosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardEjerciciosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
