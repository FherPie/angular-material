import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { DiscardInfoComponentComponent } from '../discard-info-component/discard-info-component.component';

@Component({
  selector: 'pacient-form',
  templateUrl: './pacient-form.component.html',
  styleUrls: ['./pacient-form.component.css']
})
export class PacientFormComponent {

  public addCusForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    public dialog: MatDialog
  ) { 
  
  }

  public ngOnInit(): void {
    this.addCusForm = this.fb.group({
      //IdProof: null,
      firstname: [this.fname, [Validators.required, Validators.pattern('[a-zA-Z]+([a-zA-Z ]+)*')]],
      lastname: [this.lname, [Validators.required, Validators.pattern('[a-zA-Z]+([a-zA-Z ]+)*')]],
      email: [null, [Validators.required, Validators.email]],
    });
    this.breakpoint = window.innerWidth <= 600 ? 1 : 2; // Breakpoint observer code
  }


  openDialog(): void {
    //console.log(this.wasFormChanged);
    if(this.addCusForm?.dirty) {
       const dialogRef = this.dialog.open(DiscardInfoComponentComponent, {
         width: '340px',
       });
     } else {
      this.dialog.closeAll();
     }
  }


}
