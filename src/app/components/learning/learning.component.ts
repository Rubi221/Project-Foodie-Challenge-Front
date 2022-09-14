import { Component, OnInit } from '@angular/core';
import { Receta } from 'src/app/models/receta';

@Component({
  selector: 'app-learning',
  templateUrl: './learning.component.html',
  styleUrls: ['./learning.component.css'],
})
export class LearningComponent implements OnInit {
  page = 1;
  count = 0;
  tableSize = 6;
  tableSizes = [3, 6, 9, 12];

  public recetas: Receta[] = [
    {
      id: 1,
      titulo: 'Titulo 1',
      contenido:
        'The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally bred for hunting.',
      idUsuario: 1,
      idCategoria: 1,
      idSubategoria: 1,
      idTipoReceta: 1,
      fecha: '21/09/2022',
      adjunto: '',
    },
    {
      id: 2,
      titulo: 'Titulo 2',
      contenido:
        'The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally bred for hunting.',
      idUsuario: 1,
      idCategoria: 1,
      idSubategoria: 1,
      idTipoReceta: 1,
      fecha: '21/09/2022',
      adjunto: '',
    },
  ];
  constructor() {}

  ngOnInit(): void {}

  onTableDataChange(event: number) {
    this.page = event;
  }

  onTableSizeChange(event: { target: { value: number } }): void {
    this.tableSize = event.target.value;
    this.page = 1;
  }
}
