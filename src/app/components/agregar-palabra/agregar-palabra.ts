import { Component, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-agregar-palabra',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './agregar-palabra.html',
  styleUrls: ['./agregar-palabra.css']
})
export class AgregarPalabra {

  nuevaPalabra: string = '';

  @Output() nuevaPalabraEvent = new EventEmitter<string>();

  agregarPalabra() {
    if (this.nuevaPalabra.trim() === '') return;

    this.nuevaPalabraEvent.emit(this.nuevaPalabra);
    this.nuevaPalabra = '';
  }
}
