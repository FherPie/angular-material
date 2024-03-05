import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormAntfamliarComponent } from './form-antfamliar.component';

describe('FormAntfamliarComponent', () => {
  let component: FormAntfamliarComponent;
  let fixture: ComponentFixture<FormAntfamliarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormAntfamliarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormAntfamliarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
