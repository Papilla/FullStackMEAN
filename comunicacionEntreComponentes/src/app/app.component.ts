import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HijoComponent } from "./hijo/hijo.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [RouterOutlet, NgFor, NgIf, HijoComponent]
})
export class AppComponent {
  title = 'Comunicación entre Componentes';
  casas: string[] = ['Gryffindor', 'Slytherin', 'Ravenclaw', 'Hufflepuff'];
  colores: string[] = ['danger', 'success', 'warning', 'primary']
  seleccion: any;
  alumnos: any[] = [];

  onSelectCasa(casa: string, color: string): void {
    this.seleccion = { casa: casa, color: color }
  }

  limpiarSeleccion() : void {
    this.seleccion = null;
  }

  agregarAlumno(alumno: any): void {
    this.alumnos.push(alumno);
  }
}