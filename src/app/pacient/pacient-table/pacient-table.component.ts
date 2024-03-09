import { AfterViewInit, Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ToastrService } from 'ngx-toastr';
import { PacientFormComponent } from '../pacient-form/pacient-form.component';
import { MatDialog } from '@angular/material/dialog';
import { PacientDto } from '../models/PacientDto';
import { PacientService } from '../services/pacient-service.service';
import { DiscardInfoComponentComponent } from '../discard-info-component/discard-info-component.component';
import { DeleteRequestComponentComponent } from '../delete-request-component/delete-request-component.component';




@Component({
  selector: 'pacient-table',
  templateUrl: './pacient-table.component.html',
  styleUrls: ['./pacient-table.component.css']
})
export class PacientTableComponent implements OnInit, AfterViewInit {




  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort!: MatSort;
  @Output() eventNew = new EventEmitter();
  filterValue:string="";


  ELEMENT_DATA!: PacientDto[];
  dataSource= new MatTableDataSource<PacientDto>(this.ELEMENT_DATA);
  selectedPacient!:PacientDto;


  displayedColumns=['pacientId', 'pacientNames', 'pacientDni', 'pacientEmail', 'actions'];
  loading!: boolean;

  constructor(private toastr: ToastrService, public dialog: MatDialog,
    private pacientService: PacientService,
    ){

  }
  ngOnInit(): void {
    this.listPacient();
  }


  listPacient(){
    this.loading = true;
     this.pacientService.getListPacient().subscribe({
            next: data => {
                let pacients: PacientDto[] = [];
                pacients = data.listadoOb;
                this.dataSource= new MatTableDataSource(pacients);
                this.dataSource.paginator= this.paginator;
                this.dataSource.sort= this.sort;
                
            },
            complete: () => {
                this.loading = false;
            },
            error: error => {
              this.toastr.error('Error', error);
              this.loading = false;
            }
        }
    );
  }


  ngAfterViewInit(): void {
    this.dataSource.paginator= this.paginator;
    this.dataSource.sort= this.sort;
  }

  applyFilter(filterValue: any) {
    filterValue= filterValue.target.value;
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    this.dataSource.filter = filterValue;
   // this.toastr.success('Hello world!', filterValue);
  }

  clearFilterValue() {
   this.dataSource.filter="";
   this.filterValue="";
    }


  new() {
    //this.eventNew.emit(new Map().set("app" ,"0"));
     this.openDialogPacientForm(new PacientDto());
  }

  

  openEditPacient(pacientSelected:PacientDto){
    this.selectedPacient=pacientSelected;
    this.openDialogPacientForm(this.selectedPacient);
  }

    deletePacient(pacientDtoToDelete: any) {
        const dialogRef = this.dialog.open(DeleteRequestComponentComponent, {
          width: '50em',
          data: pacientDtoToDelete
        });  

        dialogRef.afterClosed().subscribe(result => {
          if(result.data){
            this.listPacient();
          }

        });
    }

  viewOdontograma() {
    this.eventNew.emit(new Map().set("app" ,"1"));
  }

  openDialogPacientForm(data:PacientDto | null){

    const dialogRef = this.dialog.open(PacientFormComponent,{
      width: '640px',disableClose: true, 
      data: data
    });

    dialogRef.afterClosed().subscribe(()=>{
      this.listPacient();
    })


  }

}

const COLORS= ['maroon', 'red', 'orange', 'yellow', 'olive', 'green', 'purple',
'fuchsia', 'lime', 'teal', 'aqua', 'blue', 'navy', 'black', 'gray'];
const NAMES=['Maia', 'Asher', 'Olivia', 'Atticus', 'Amelia', 'Jack',
'Charlotte', 'Theodore', 'Isla', 'Oliver', 'Isabella', 'Jasper',
'Cora', 'Levi', 'Violet', 'Arthur', 'Mia', 'Thomas', 'Elizabeth'];

export interface UserData {
  id: string;
  name: string;
  nced: string;
  color: string;
}
