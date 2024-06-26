import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { DiscardInfoComponentComponent } from '../discard-info-component/discard-info-component.component';

@Component({
  selector: 'app-form-register',
  templateUrl: './form-proposal.component.html',
  styleUrls: ['./form-proposal.component.css']
})
export class PresupuestoRegisterComponent {


  public breakpoint?: number; // Breakpoint observer code
  public fname: string = `Ramesh`;
  public lname: string = `Suresh`;
  public addCusForm!: FormGroup;
  wasFormChanged = false;

  constructor(
    private fb: FormBuilder,
    public dialog: MatDialog
  ) { }

  public ngOnInit(): void {
    this.addCusForm = this.fb.group({
      //IdProof: null,
      firstname: [this.fname, [Validators.required, Validators.pattern('[a-zA-Z]+([a-zA-Z ]+)*')]],
      lastname: [this.lname, [Validators.required, Validators.pattern('[a-zA-Z]+([a-zA-Z ]+)*')]],
      email: [null, [Validators.required, Validators.email]],
    });
    this.breakpoint = window.innerWidth <= 600 ? 1 : 2; // Breakpoint observer code
  }

  public onAddCus(): void {
    this.markAsDirty(this.addCusForm);
  }

  openDialog(): void {
    console.log(this.wasFormChanged);
    if(this.addCusForm?.dirty) {
       const dialogRef = this.dialog.open(DiscardInfoComponentComponent, {
         width: '340px',
       });
     } else {
      this.dialog.closeAll();
     }
  }

  // tslint:disable-next-line:no-any
  public onResize(event: any): void {
    this.breakpoint = event.target.innerWidth <= 600 ? 1 : 2;
  }

  private markAsDirty(group: FormGroup | undefined): void {
    group?.markAsDirty();
    // tslint:disable-next-line:forin
    for (const i in group?.controls) {
      group?.controls[i].markAsDirty();
    }
  }

  formChanged() {
    this.wasFormChanged = true;
  }

}