import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  imports: [CommonModule, FormsModule],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  nombre: string = '';
  correo: string = '';
  telefono: string = '';
  edad: number = 0;
  contrasena: string = '';
  confirmarContrasena: string = '';

  mensajeDatos: string = '';

  registrar(): void {
    if (
      this.nombre &&
      this.correo &&
      this.telefono &&
      this.edad &&
      this.contrasena &&
      this.confirmarContrasena
    ) {
      if (this.contrasena === this.confirmarContrasena) {
        this.mensajeDatos = `¡Registro exitoso! Datos ingresados:
Nombre: ${this.nombre}
Correo: ${this.correo}
Teléfono: ${this.telefono}
Edad: ${this.edad}`;
      } else {
        this.mensajeDatos = 'Las contraseñas no coinciden. Por favor, inténtelo de nuevo.';
      }
    } else {
      this.mensajeDatos = 'Por favor, complete todos los campos antes de registrar.';
    }
  }
}
