import { Injectable } from '@angular/core';
//importamos lo necesario para hacer peticiones http
import { HttpClient, HttpHeaders } from '@angular/common/http';
//agregamos el tipo de contenido que transmitiremos al headers de las peticiones http 
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
}
//Injectable : esta funcion proviene de el core de angular
//y nos indica que esta clase puede ser inyectada 
//dinamicamente a quien lo demande
@Injectable({
  providedIn: 'root'
})
export class BikeService {
  //para hacer que se pueda utilizar el htttp client en nuestro 
  //codigo lo debemos inyectar en los parametros de nuestro 
  //constructor , indicando el modificador de acceso seguido
  //Del nombre de la variable y el tipo 
  constructor(private http: HttpClient) {}

  //GetBikes: funcion de service que nos permitira
  //obtener todas las bikes a este lo podre llamar 
  //desde un componente y nos devolvera la carga en 
  //formato Json , esta peticion  ser redireccionada al server
  //de spring boot y nos devuelve el json como un Observable
  getBikes() {
    return this.http.get('/server/api/v1/bikes')
  }

   //buscar una bicicleta  por su ID
   getBike(id:number){
     return this.http.get('/server/api/v1/bikes/'+id);
   }
//POST : crear una bicicleta con un registro de formulario angular;
//recibimos una bike del front end y lo emviamos al back end para 
//alojarlo en SQLite
//llamamos a la ruta 
//le pasamos el body
//http que establezca el contenido 
createdBikeRegistration(bike){
//creamos el body tomamos la informacion de la bici y la ciframos para
//que podamos transmitirla como cuerpo de la peticion
let body =JSON.stringify(bike);
return this.http.post('/server/api/v1/bikes',body,httpOptions);
}
}
