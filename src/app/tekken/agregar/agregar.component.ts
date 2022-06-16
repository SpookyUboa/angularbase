import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Personaje } from '../interfaces/tekken.interface';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent{

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

  @Output() onNuevoPersonaje: EventEmitter<Personaje> = new EventEmitter();
    
  agregar(){
    if(this.nuevo.nombre.trim().length == 0){
      return;
    }

    console.log(this.nuevo);

    this.onNuevoPersonaje.emit(this.nuevo);

    this.nuevo = {
      nombre: '',
      poder: 0
    }
  }
}
