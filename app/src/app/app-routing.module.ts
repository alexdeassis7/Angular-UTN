import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import{AdminComponent} from './components/admin/admin.component';
import{HomeComponent} from './components/home/home.component';
import { ViewRegistrationComponent } from "./components/view-registration/view-registration.component";

//dentro de este archivo se configuran las rutas de la app
const routes: Routes = [
   {
    path:'',
    component: HomeComponent
  }, 
  {
    path:'admin/view/:id',
    component: ViewRegistrationComponent
  },     
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
