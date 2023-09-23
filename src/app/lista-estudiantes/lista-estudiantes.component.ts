import { Component } from '@angular/core';

@Component({
  selector: 'app-lista-estudiantes',
  templateUrl: './lista-estudiantes.component.html',
  styleUrls: ['./lista-estudiantes.component.scss'],
})
export class ListaEstudiantesComponent {
  students = [
    { name: 'juan', apellido: 'Pérez' },
    { name: 'maría', apellido: 'gómez' },
    { name: 'pedro', apellido: 'López' },
    { name: 'Luis', apellido: 'García' },
    { name: 'ana', apellido: 'Martínez' },
    { name: 'Carlos', apellido: 'Sánchez' },
    { name: 'luisa', apellido: 'rodríguez' },
    { name: 'Jorge', apellido: 'hernández' },
    { name: 'sara', apellido: 'González' },
    { name: 'Daniel', apellido: 'Romero' },
  ];
}
