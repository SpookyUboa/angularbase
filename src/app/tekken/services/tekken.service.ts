import { Injectable } from "@angular/core";
import { Personaje } from '../interfaces/tekken.interface';

@Injectable()
export class TekkenService { 

    private _personajes: Personaje[] = [
        {
          nombre: 'Lee',
          poder: 1100
        },
        {
          nombre: 'Lidia',
          poder: 3000
        }
      ];

      get personajes(): Personaje[]{
        return [...this._personajes];
      }
    
    constructor(){
        console.log('Servicio iniciado')
    }
}