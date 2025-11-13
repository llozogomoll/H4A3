import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AgregarPalabra } from './components/agregar-palabra/agregar-palabra';
import { ListaPalabras } from './components/lista-palabras/lista-palabras';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    AgregarPalabra,
    ListaPalabras
  ],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {

  listaPalabras: string[] = [];

  agregarPalabraALista(palabra: string) {
    this.listaPalabras.push(palabra);
  }
}
