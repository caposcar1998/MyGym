import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoutineEvalComponent } from './routine-eval.component';

describe('RoutineEvalComponent', () => {
  let component: RoutineEvalComponent;
  let fixture: ComponentFixture<RoutineEvalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RoutineEvalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RoutineEvalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
