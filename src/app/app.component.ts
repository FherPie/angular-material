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
  tittle:String="";
  events: string[] = [];



constructor(private toastr: ToastrService){

}

addItem($event: any) {
  this.sidenav?.toggle();

  new Map<string, string>($event).forEach((value1, key1) => {
     if(key1=="tittle"){
      let index: number = parseInt(value1);
        this.tittle= TITTLES[index];
     }
});

  //this.toastr.success($event(value));
}


  title = 'angularAppBro';
  options={
    timeOut: 3000,
    showProgressBar: true,
    pauseOnHover: true,
    clickToClose: true
  };

  closed() {
    this.tittle="";
    }
    
}


const TITTLES= ['Registrar Paciente', 'red', 'orange', 'yellow', 'olive', 'green', 'purple',
'fuchsia', 'lime', 'teal', 'aqua', 'blue', 'navy', 'black', 'gray'];