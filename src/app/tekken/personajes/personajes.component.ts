import { Component, Input } from '@angular/core';
import { TekkenService } from '../services/tekken.service';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html'
})
export class PersonajesComponent {
 get personajes(){
  return this.tekkenService.personajes;
 }

 constructor(private tekkenService: TekkenService){
 }
}
