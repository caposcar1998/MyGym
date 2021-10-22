import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalTrainingComponent } from './modal-training.component';

describe('ModalTrainingComponent', () => {
  let component: ModalTrainingComponent;
  let fixture: ComponentFixture<ModalTrainingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalTrainingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalTrainingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
