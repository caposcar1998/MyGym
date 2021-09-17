import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardRoutinesComponent } from './card-routines.component';

describe('CardRoutinesComponent', () => {
  let component: CardRoutinesComponent;
  let fixture: ComponentFixture<CardRoutinesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardRoutinesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardRoutinesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
