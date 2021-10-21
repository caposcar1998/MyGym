import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalRoutineEvalComponent } from './modal-routine-eval.component';

describe('ModalRoutineEvalComponent', () => {
  let component: ModalRoutineEvalComponent;
  let fixture: ComponentFixture<ModalRoutineEvalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalRoutineEvalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalRoutineEvalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
