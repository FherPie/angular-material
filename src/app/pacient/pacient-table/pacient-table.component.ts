import { AfterViewInit, Component, EventEmitter, Output, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ToastrService } from 'ngx-toastr';
import { PacientFormComponent } from '../pacient-form/pacient-form.component';
import { MatDialog } from '@angular/material/dialog';




@Component({
  selector: 'pacient-table',
  templateUrl: './pacient-table.component.html',
  styleUrls: ['./pacient-table.component.css']
})
export class PacientTableComponent implements AfterViewInit {



  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort!: MatSort;
  @Output() eventNew = new EventEmitter();
  filterValue:string="";


  ELEMENT_DATA!: UserData[];
  dataSource= new MatTableDataSource<UserData>(this.ELEMENT_DATA);
  displayedColumns=['id', 'name', 'progress', 'color'];

  constructor(private toastr: ToastrService, public dialog: MatDialog ){
    const users: UserData[] = [];
    for (let index = 0; index < 100; index++) {
      users.push({"id": ""+index, "name":"name"+index, "nced":index+"", "color": "red"+index});
    }
    this.dataSource= new MatTableDataSource(users);
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
    const dialogRef = this.dialog.open(PacientFormComponent,{
      width: '640px',disableClose: true 
    });

  }

  viewOdontograma() {
    this.eventNew.emit(new Map().set("app" ,"1"));
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
