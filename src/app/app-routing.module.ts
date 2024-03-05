import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProposeTableRegisterComponent } from './presupuestos/presupuesto-table/proposable-table.component';
import { PacientTableComponent } from './pacient/pacient-table/pacient-table.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  {
    path: 'one',
    component: PacientTableComponent,
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
