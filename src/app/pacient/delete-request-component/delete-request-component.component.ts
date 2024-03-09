import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { PacientService } from '../services/pacient-service.service';
import { PacientDto } from '../models/PacientDto';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-delete-request-component',
  templateUrl: './delete-request-component.component.html',
  styleUrls: ['./delete-request-component.component.css']
})
export class DeleteRequestComponentComponent implements OnInit {
  pacientDto!:PacientDto;
  constructor(private fb: FormBuilder,
    private dialog: MatDialog,
                  private dialogRef: MatDialogRef<DeleteRequestComponentComponent>,
                  private pacientService: PacientService, @Inject(MAT_DIALOG_DATA) public data: any,
                  private toastr: ToastrService) {


                  } // Closing dialog window
  ngOnInit(): void {
    this.pacientDto=this.data;
  }
    
    public OkOpt(): void { // To cancel the dialog window
       this.deletePacient();
    }
    
    public cancel(): void { 
      this.dialogRef.close({ data: false })    }

      
  deletePacient(){
     this.pacientService.deletePacient(this.pacientDto.pacientId).subscribe({
            next: data => {
                 this.toastr.error('Eliminado con Exito');
                this.dialogRef.close({ data: true });
            },
            complete: () => {
            },
            error: error => {
              this.toastr.error('Error', error);
            }
        }
    );
  }
    
}
