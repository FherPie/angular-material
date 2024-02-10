import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ToastrService } from 'ngx-toastr';




@Component({
  selector: 'app-table-register',
  templateUrl: './table-register.component.html',
  styleUrls: ['./table-register.component.css']
})
export class TableRegisterComponent {

  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort!: MatSort;
  ELEMENT_DATA!: UserData[];
  dataSource= new MatTableDataSource<UserData>(this.ELEMENT_DATA);

  constructor(private toastr: ToastrService ){
    const users: UserData[] = [];

  }

  applyFilter(filterValue: any) {
    filterValue= filterValue.target.value;
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    this.dataSource.filter = filterValue;
    this.toastr.success('Hello world!', filterValue);
  }


}



export interface UserData {
  id: string;
  name: string;
  progress: string;
  color: string;
}
