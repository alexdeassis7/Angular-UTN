import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//dentro de este archivo se configuran las rutas de la app
const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
