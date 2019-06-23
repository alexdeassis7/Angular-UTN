import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

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
  constructor(private http:HttpClient ) {

  }

  
}
