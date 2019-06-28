import { Component, OnInit } from '@angular/core';
//importamos el service de bikes
import { BikeService } from "../../services/bike.service";
//importamos el ActiveRouter para poder obtener la url  con el ID
import {ActivatedRoute } from "@angular/router";
@Component({
  selector: 'app-view-registration',
  templateUrl: './view-registration.component.html',
  styleUrls: ['./view-registration.component.css']
})
export class ViewRegistrationComponent implements OnInit {
  //creo variable para alojar la bike
  public bikeReg;
  //inyectamos el service dentro de los parametros del constructor
  //inyectamos la ruta especifica
  constructor(private bikeService: BikeService, private route:ActivatedRoute ) { }

  ngOnInit() {
    //obtenemos la ruta actual e invocamos a la funcion getBikeReg
    this.getBikeReg(this.route.snapshot.params.id)
  }
  //creo una funcion para traernos la bike por el id (primarytkey)
  getBikeReg(id:number){
    this.bikeService.getBike(id).subscribe(
      data=>{
        this.bikeReg=data;
      },
    )
  }

}
