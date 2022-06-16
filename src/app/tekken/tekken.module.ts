import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TekkenComponent } from './tekken/tekken.component';
import { FormsModule } from '@angular/forms';
import { PersonajesComponent } from './personajes/personajes.component';
import { AgregarComponent } from './agregar/agregar.component';



@NgModule({
  declarations: [
    TekkenComponent,
    PersonajesComponent,
    AgregarComponent
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
