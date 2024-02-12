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
  tittle: String = "";
  events: string[] = [];
  showFormRegister: boolean = false;
  showFormOdontogram: boolean = false;



  constructor(private toastr: ToastrService) {

  }

  addItem($event: any) {
    this.sidenav?.toggle();

    new Map<string, string>($event).forEach((value1, key1) => {
      if (key1 == "app") {
        let index: number = parseInt(value1);
        //this.toastr.success(index+"");

        this.tittle = TITTLES[index];
        if (index == 0) {
          this.showFormRegister = true;
        } else if (index == 1) {
          this.showFormOdontogram = true;
        }
      }
    });

  }



  title = 'angularAppBro';
  options = {
    timeOut: 3000,
    showProgressBar: true,
    pauseOnHover: true,
    clickToClose: true
  };

  closed() {
    this.tittle = "";
    this.showFormRegister=false;
    this.showFormOdontogram=false;
  }

}


const TITTLES = ['Registrar Paciente', 'Odontrograma', 'orange', 'yellow', 'olive', 'green', 'purple',
  'fuchsia', 'lime', 'teal', 'aqua', 'blue', 'navy', 'black', 'gray'];
