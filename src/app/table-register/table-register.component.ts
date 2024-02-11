import { AfterViewInit, Component, EventEmitter, Output, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ToastrService } from 'ngx-toastr';




@Component({
  selector: 'app-table-register',
  templateUrl: './table-register.component.html',
  styleUrls: ['./table-register.component.css']
})
export class TableRegisterComponent implements AfterViewInit {

  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort!: MatSort;
  @Output() eventNew = new EventEmitter();


  ELEMENT_DATA!: UserData[];
  dataSource= new MatTableDataSource<UserData>(this.ELEMENT_DATA);
  displayedColumns=['id', 'name', 'progress', 'color'];

  constructor(private toastr: ToastrService ){
    const users: UserData[] = [];
    for (let index = 0; index < 100; index++) {
      users.push({"id": ""+index, "name":"name"+index, "progress":index+"%", "color": "red"});
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


  new() {
    this.eventNew.emit();
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
  progress: string;
  color: string;
}
