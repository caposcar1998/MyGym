import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RutinasRapidasComponent } from './rutinas-rapidas.component';

describe('RutinasRapidasComponent', () => {
  let component: RutinasRapidasComponent;
  let fixture: ComponentFixture<RutinasRapidasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RutinasRapidasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RutinasRapidasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
