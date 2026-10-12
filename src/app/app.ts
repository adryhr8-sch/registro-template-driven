import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  imports: [FormsModule],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  nombre: string = '';
  correo: string = '';
  telefono: string = '';
  edad: number | null = null;
  contrasena: string = '';
  confirmarContrasena: string = '';

  mensajeDatos: string = '';

  mensaje(): string {
    return `¡Registro exitoso! Datos ingresados:
Nombre: ${this.nombre}
Correo: ${this.correo}
Teléfono: ${this.telefono}
Edad: ${this.edad}`;
  }

  registrar(): void {
    this.mensajeDatos = this.mensaje();
  }
}
