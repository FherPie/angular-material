import { Component, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  @ViewChild('sidenav2') sidenav: MatSidenav | undefined;

constructor(private toastr: ToastrService){

}

addItem($event: any) {
  this.sidenav?.toggle();
  //this.toastr.success('Hello world!');
}


  title = 'angularAppBro';
  options={
    timeOut: 3000,
    showProgressBar: true,
    pauseOnHover: true,
    clickToClose: true
  };
}
