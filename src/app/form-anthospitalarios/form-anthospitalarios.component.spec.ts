import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormAnthospitalariosComponent } from './form-anthospitalarios.component';

describe('FormAnthospitalariosComponent', () => {
  let component: FormAnthospitalariosComponent;
  let fixture: ComponentFixture<FormAnthospitalariosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormAnthospitalariosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormAnthospitalariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
