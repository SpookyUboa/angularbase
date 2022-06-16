import { Component, OnInit } from '@angular/core';
import { Personaje } from '../interfaces/tekken.interface';

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

  nuevo: Personaje = {
    nombre: '',
    poder: 0
  }

  cambiarNombre(event: any){
    console.log(event)
  }
  
  cambiarPoder(event: any){
    console.log(event)
  }
    
  agregar(){
    if(this.nuevo.nombre.trim().length == 0){
      return;
    }
    console.log(this.nuevo);

    this.personajes.push(this.nuevo);
    this.nuevo = {
      nombre: '',
      poder: 0
    }
  }

}
