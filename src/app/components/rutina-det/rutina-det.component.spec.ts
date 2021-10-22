import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RutinaDetComponent } from './rutina-det.component';

describe('RutinaDetComponent', () => {
  let component: RutinaDetComponent;
  let fixture: ComponentFixture<RutinaDetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RutinaDetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RutinaDetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
