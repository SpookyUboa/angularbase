import { Component, Input, OnInit } from '@angular/core';
import { Personaje } from '../interfaces/tekken.interface';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent{

  @Input() personajes: Personaje[] = [];

  @Input('nuevo') nuevo: Personaje = {
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
