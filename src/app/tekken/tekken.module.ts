import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TekkenComponent } from './tekken/tekken.component';
import { FormsModule } from '@angular/forms';
import { PersonajesComponent } from './personajes/personajes.component';



@NgModule({
  declarations: [
    TekkenComponent,
    PersonajesComponent
  ],
  exports:[
    TekkenComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class TekkenModule { }
