import { Component, OnInit } from '@angular/core';
import { BikeService } from '../../services/bike.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  //atributos de la clase :
  //creo un array de string con los modelos disponibles en la empresa
  models: string[] = [
    'bicicleta 14 pulgadas marca philips',
    'Globo Carbon fiber Race Series',
    'master bicicleta macri gato ',
  ];
  //Objeto de angular que nos permite validar formularios
  bikeform: FormGroup;
  //variable que usaremos para mostrar al user si el form se envio 
  //corrrectamente o si tuvimos problemas de validacion o Error
  validMessage: string = "";
  constructor(private bikeService: BikeService) { }

  ngOnInit() {
    //intancio el formulario 
    this.bikeform = new FormGroup({
      //especifico los atributos del formulario 
      name: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      phone: new FormControl('', Validators.required),
      model: new FormControl('', Validators.required),
      serialNumber: new FormControl('', Validators.required),
      purchasePrice: new FormControl('', Validators.required),
      purchaseDate: new FormControl('', Validators.required),
      contact: new FormControl()
    });
    
  }
  submitRegistration() {
    if (this.bikeform.valid) {
      this.validMessage = "su formulario de bike se envio con exito AMEGO";
this.bikeService.createdBikeRegistration(this.bikeform.value).subscribe(
        data => {
          this.bikeform.reset();
          return true;
        },
      )
    } else {
      this.validMessage = "por favor intentalo nuevamente hubo un error"
    }


  }


}
