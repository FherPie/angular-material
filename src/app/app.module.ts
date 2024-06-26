import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { RouterModule}   from '@angular/router';
import { MatExpansionModule } from '@angular/material/expansion';
import { PacientFormComponent } from './pacient/pacient-form/pacient-form.component';
import { PacientTableComponent } from './pacient/pacient-table/pacient-table.component';
import { MatTableModule } from '@angular/material/table';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS, MatFormFieldModule } from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { ToastrModule } from 'ngx-toastr';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { OdontogramaFormComponent } from './pacient/odontograma-form/odontograma-form.component';
import {MatMenuModule} from '@angular/material/menu';
import {MatTabsModule} from '@angular/material/tabs';
import { FormAntfamliarComponent } from './pacient/form-antfamliar/form-antfamliar.component';
import { FormAnthospitalariosComponent } from './pacient/form-anthospitalarios/form-anthospitalarios.component';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { ProposeTableRegisterComponent } from './presupuestos/presupuesto-table/proposable-table.component';
import {MatDialogModule} from '@angular/material/dialog';
import {MatGridListModule} from '@angular/material/grid-list';
import { PresupuestoRegisterComponent } from './presupuestos/presupuesto-form/form-proposal.component';
import { MatNativeDateModule } from '@angular/material/core';
import {MatRadioModule} from '@angular/material/radio';
import { DiscardInfoComponentComponent } from './pacient/discard-info-component/discard-info-component.component';
import { HttpClientModule } from '@angular/common/http';
import { DeleteRequestComponentComponent } from './pacient/delete-request-component/delete-request-component.component';

 //import { SimpleNotificationsModule } from 'angular2-notifications';


@NgModule({
  declarations: [
    AppComponent,
    PacientTableComponent,
    OdontogramaFormComponent,
    FormAntfamliarComponent,
    FormAnthospitalariosComponent,
    ProposeTableRegisterComponent, 
    PresupuestoRegisterComponent,
    PacientFormComponent,
    DiscardInfoComponentComponent,
    DeleteRequestComponentComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    RouterModule,
    MatExpansionModule,
    MatTableModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatPaginatorModule,
    MatMenuModule,
    MatCheckboxModule,
    MatDialogModule,
    MatTabsModule,
    MatGridListModule,
    ReactiveFormsModule,
    MatRadioModule,
//    MatDatepickerModule,        // <----- import(must)
    MatNativeDateModule,        // <----- import for date formating(optional)
    HttpClientModule,
    RouterModule.forRoot([]),
    ToastrModule.forRoot(), // ToastrModule added
  ],
  providers: [{provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: {appearance: 'outline'}}],
  bootstrap: [AppComponent]
})
export class AppModule { }
