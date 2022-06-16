import { Component, OnInit } from '@angular/core';
import { Personaje } from '../interfaces/tekken.interface';
import { TekkenService } from '../services/tekken.service';

@Component({
  selector: 'app-tekken',
  templateUrl: './tekken.component.html',
  styleUrls: ['./tekken.component.css']
})
export class TekkenComponent {

  agregarNuevoPersonaje(char: Personaje){
    console.log(char);
  }

  nuevo: Personaje = {
    nombre: "Jack",
    poder: 5454
  }
  
  constructor(private  tekkenService: TekkenService) {
  }
}
