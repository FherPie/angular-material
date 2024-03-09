import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { DiscardInfoComponentComponent } from '../discard-info-component/discard-info-component.component';
import { ToastrService } from 'ngx-toastr';
import { PacientDto } from '../models/PacientDto';
import { PacientService } from '../services/pacient-service.service';
import { ResponseGenerico } from 'src/app/responses/ResponseGenerico';

@Component({
  selector: 'pacient-form',
  templateUrl: './pacient-form.component.html',
  styleUrls: ['./pacient-form.component.css']
})
export class PacientFormComponent {


  public addPacientForm!: FormGroup;
  pacientDto!:PacientDto;
  saving!: boolean;
  response!: ResponseGenerico;


  constructor(
    private fb: FormBuilder,
    public dialog: MatDialog,
    private pacientService: PacientService,
    private toastr: ToastrService,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { 
  
  }

  public ngOnInit(): void {
    this.pacientDto=this.data;
   if(this.pacientDto){
    this.pacientService.getById(this.pacientDto.pacientId).subscribe({
      next:data=>{
        this.pacientDto= data.objetoOb;
        this.addPacientForm = this.fb.group(this.pacientDto);
        //this.loading=false;
      },
      error:error=>{

      }
    })
  }
    this.iniciarForms();
    //this.breakpoint = window.innerWidth <= 600 ? 1 : 2; // Breakpoint observer code
  }

  setearForm() {
    this.addPacientForm.reset();
    this.iniciarForms();
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
    if(this.addPacientForm.invalid){
       this.markAsDirty(this.addPacientForm);
       return;
     }
    this.pacientDto = this.addPacientForm.value;
    this.pacientService.savePacient(this.pacientDto).subscribe({
      next: (data) => {
          this.saving = false;
          this.response = data;
          this.pacientDto= data.objetoOb;
          this.showToastByResponseSucess(this.response);
      },
      complete: () => {},
      error: error => {
          this.showToastByResponseError(error);
      }
  })
  }


  
  public onUpdatePacient(): void {
    console.log("Pacient Info",this.addPacientForm.value);
    if(this.addPacientForm.invalid){
      this.markAsDirty(this.addPacientForm);
      return;
    }
    this.pacientDto = this.addPacientForm.value;
    this.pacientService.updatePacient(this.pacientDto).subscribe({
      next: (data) => {
          this.saving = false;
          this.response = data;
          this.pacientDto= data.objetoOb;
          this.showToastByResponseSucess(this.response);
      },
      complete: () => {},
      error: error => {
          this.showToastByResponseError(error);
      }
  })
  }


  private markAsDirty(group: FormGroup | undefined): void {

    group?.markAsDirty();
    // tslint:disable-next-line:forin
    for (const i in group?.controls) {
      group?.controls[i].markAsDirty();
    }
    
  }

  private showToastByResponseSucess(response: ResponseGenerico){
    if (this.response.codigoRespuestaValue == 200) {
      if (!this.pacientDto?.pacientId) {
          this.toastr.success('Ingresado Correctamente');
      } else {
        this.toastr.info('Actualizado Correctamente');
      }
      this.setearForm();
      //this.stepServicioService.setMethodToCall(new Map().set("proveedor-inv-table" , new Map().set("listProveedorInv" , null)))
      this.dialog.closeAll();
    }
  }

  private showToastByResponseError(error: Error){
        this.saving = false;
        this.toastr.error('Error', error.toString() );
  }


  iniciarForms() {
    this.addPacientForm = this.fb.group({
      pacientId: null,
      pacientNames: ['', [Validators.required, Validators.pattern('[a-zA-Z]+([a-zA-Z ]+)*')]],
      pacientDni: ['', [Validators.required, Validators.pattern('[0-9]*')]],
      pacientAge: ['', [Validators.required, Validators.pattern('[0-9]*')]],
      pacientFono: ['', [Validators.required, Validators.pattern('[0-9]*')]],
      pacientFono2: ['', [Validators.required, Validators.pattern('[0-9]*')]],
      pacientAddress: ['', [Validators.required, Validators.pattern('[a-zA-Z]+([a-zA-Z]+)*')]],
      pacientOccupation: ['', [Validators.required, Validators.pattern('[a-zA-Z]+([a-zA-Z]+)*')]],
      pacientFecnac: ['', [Validators.required, Validators.pattern('[a-zA-Z]+([a-zA-Z]+)*')]],
      pacientReferredBy: ['', [Validators.required]],
      pacientEmail: ['', [Validators.required, Validators.email]]
      });
  }

}
