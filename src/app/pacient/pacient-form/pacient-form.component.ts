import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { DiscardInfoComponentComponent } from '../discard-info-component/discard-info-component.component';

@Component({
  selector: 'pacient-form',
  templateUrl: './pacient-form.component.html',
  styleUrls: ['./pacient-form.component.css']
})
export class PacientFormComponent {


  public addPacientForm!: FormGroup;


  constructor(
    private fb: FormBuilder,
    public dialog: MatDialog
  ) { 
  
  }

  public ngOnInit(): void {
    this.addPacientForm = this.fb.group({
      pacientId: null,
      pacientName: ['', [Validators.required, Validators.pattern('[a-zA-Z]+([a-zA-Z ]+)*')]],
      pacientDni: ['', [Validators.required, Validators.pattern('[0-9]*')]],
      pacientAge: ['', [Validators.required, Validators.pattern('[0-9]*')]],
      pacientFono: ['', [Validators.required, Validators.pattern('[0-9]*')]],
      pacientFono2: ['', [Validators.required, Validators.pattern('[0-9]*')]],
      pacientAddress: ['', [Validators.required, Validators.pattern('[a-zA-Z]+([a-zA-Z ]+)*')]],
      pacientOccupation: ['', [Validators.required, Validators.pattern('[a-zA-Z]+([a-zA-Z ]+)*')]],
      pacientFecnac: ['', [Validators.required, Validators.pattern('[a-zA-Z]+([a-zA-Z ]+)*')]],
      pacientReferredBy: ['', [Validators.required, Validators.pattern('[a-zA-Z]+([a-zA-Z ]+)*')]],
      pacientEmail: ['', [Validators.required, Validators.email]]
      });
    //this.breakpoint = window.innerWidth <= 600 ? 1 : 2; // Breakpoint observer code
  }


  openDialog(): void {
    //console.log(this.wasFormChanged);
    if(this.addPacientForm?.dirty) {
       const dialogRef = this.dialog.open(DiscardInfoComponentComponent, {
         width: '50em',
       });
     } else {
      this.dialog.closeAll();
     }
  }


  public onAddPacient(): void {

    console.log("Pacient Info",this.addPacientForm.value);
    
  }

}
