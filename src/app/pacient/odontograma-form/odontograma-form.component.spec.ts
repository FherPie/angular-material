import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OdontogramaFormComponent } from './odontograma-form.component';

describe('OdontogramaFormComponent', () => {
  let component: OdontogramaFormComponent;
  let fixture: ComponentFixture<OdontogramaFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OdontogramaFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OdontogramaFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
