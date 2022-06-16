import { Component } from "@angular/core";

@Component({
    selector: 'app-heroe',
    templateUrl: 'heroe.component.html'
})
export class HeroeComponent{
    nombre: string = 'Spodermen';
    edad: number = 20

    get nombreCapitalizado(): string {
        return this.nombre.toUpperCase();
    }

    obtenerNombre(): string {
        return `${this.nombre} - ${this.edad}`
    }

    cambiarNombre(): void {
        this.nombre += 'men';
    }

    cambiarEdad(): void {
        this.edad += 10;
    }
}