import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//agrego el import http module y luego lo inserto en los imports 
//este import nos permite comunicarnos mediante peticiones http
import{HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
//importamos nuestro servicio 
import{BikeService} from './services/bike.service';
//decorador NG module indentifica una clase como 
//modulo de angular ,esto le dice a Angular como debe 
//compilar e iniciar la aplicacion 

@NgModule({
  //dentro de declarations ingresamos los componentes de la app
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule//agrego el client module a los imports
  ],
 //agregamos el servicio al array de Providers
  providers: [BikeService],
  //bootstrap el componente RAIS que angular crea e inserta 
  //en el index.html
  bootstrap: [AppComponent]
})
export class AppModule { }
