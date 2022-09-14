import { Component, OnInit } from '@angular/core';
import { Comentario } from 'src/app/models/comentario';

@Component({
  selector: 'app-comentario',
  templateUrl: './comentario.component.html',
  styleUrls: ['./comentario.component.css']
})
export class ComentarioComponent implements OnInit {
  titulo = 'Comentarios'
  page = 1;
  count = 0;
  tableSize = 6;
  tableSizes = [3, 6, 9, 12];

  public comentarios: Comentario[] = [
    {
      id: 1,
      contenido:
        'The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally bred for hunting.',
      idUsuario: 1,
      idPadre: 1,
      idPubliacion: 1,
      idReto: 1,
      fecha: '21/09/2022',
    },
    {
      id: 2,
      contenido:
        'The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally bred for hunting.',
      idUsuario: 1,
      idPadre: 1,
      idPubliacion: 1,
      idReto: 1,
      fecha: '21/09/2022',
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

  onTableDataChange(event: number) {
    this.page = event;
  }

  onTableSizeChange(event: { target: { value: number } }): void {
    this.tableSize = event.target.value;
    this.page = 1;
  }

}
