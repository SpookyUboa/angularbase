import { Component, OnInit } from '@angular/core';
import { Personaje } from '../interfaces/tekken.interface';
import { TekkenService } from '../services/tekken.service';

@Component({
  selector: 'app-tekken',
  templateUrl: './tekken.component.html',
  styleUrls: ['./tekken.component.css']
})
export class TekkenComponent {

  personajes: Personaje[] = [
    {
      nombre: 'Lee',
      poder: 1100
    },
    {
      nombre: 'Lidia',
      poder: 3000
    }
  ];

  agregarNuevoPersonaje(char: Personaje){
    console.log(char);
    this.personajes.push(char)
  }

  constructor(private  tekkenSrevice: TekkenService) {}

  nuevo: Personaje = {
    nombre: "Jack",
    poder: 5454
  }
}
