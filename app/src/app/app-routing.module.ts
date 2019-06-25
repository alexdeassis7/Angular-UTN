import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import{AdminComponent} from './components/admin/admin.component';
//dentro de este archivo se configuran las rutas de la app
const routes: Routes = [
 {//definimos las rutas de la app con sus componentes asociados
   path: 'admin',
  component: AdminComponent
 }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
