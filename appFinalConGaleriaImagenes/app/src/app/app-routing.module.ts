import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './components/admin/admin.component';
import { HomeComponent } from './components/home/home.component';
import { ViewRegistrationComponent } from "./components/view-registration/view-registration.component";
import { AboutComponent } from './components/about/about.component';
import { ImageGalleryComponent } from './components/image-gallery/image-gallery.component';
import { ImageDetailsComponent } from './components/image-details/image-details.component';
//dentro de este archivo se configuran las rutas de la app
const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'admin/view/:id',
    component: ViewRegistrationComponent
  },
  {//definimos las rutas de la app con sus componentes asociados
    path: 'admin',
    component: AdminComponent
  },
  {//definimos las rutas de la app con sus componentes asociados
    path: 'galeria',
    component: ImageGalleryComponent
  },
  {//definimos las rutas de la app con sus componentes asociados
    path: 'image/:id',
    component: ImageDetailsComponent
  },
  {//definimos las rutas de la app con sus componentes asociados
    path: 'admin',
    component: AdminComponent
  },
  {
    path: '**',//esto es para todas las rutas que no esten definidas dentro del array de routes
    component: AboutComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
