import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-lista-palabras',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './lista-palabras.html',
  styleUrls: ['./lista-palabras.css']
})
export class ListaPalabras {

  @Input() palabras: string[] = [];

  editIndex: number | null = null;
  editValue: string = '';

  editar(i: number) {
    this.editIndex = i;
    this.editValue = this.palabras[i];
  }

  guardar(i: number) {
    this.palabras[i] = this.editValue;
    this.editIndex = null;
  }

  eliminar(i: number) {
    this.palabras.splice(i, 1);
  }
}
