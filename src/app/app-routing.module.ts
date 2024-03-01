import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProposeTableRegisterComponent } from './presupuestos/presupuesto-table/proposable-table.component';
import { TableRegisterComponent } from './table-register/table-register.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  {
    path: 'one',
    component: TableRegisterComponent,
    title: 'Pacient Register'
  },
  {
    path: 'two',
    component: ProposeTableRegisterComponent,
    title: 'Propouse Register'
  },
  {
    path: '',
    component: AppComponent,
    title: 'Home page'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
