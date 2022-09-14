import { Component, OnInit } from '@angular/core';
import { Comentario } from 'src/app/models/comentario';
import { Publicacion } from 'src/app/models/publicacion';

@Component({
  selector: 'app-foro',
  templateUrl: './foro.component.html',
  styleUrls: ['./foro.component.css'],
})
export class ForoComponent implements OnInit {
  public clickComentario: Boolean = false;
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

  public publicaciones: Publicacion[] = [
    {
      id: 1,
      idSeccionForo: 1,
      contenido:
        'The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally bred for hunting.',
      fecha: '21/09/2022',
      adjunto: '',
    },
    {
      id: 2,
      idSeccionForo: 2,
      contenido:
        'The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally bred for hunting.',
      fecha: '21/09/2022',
      adjunto: '',
    },
  ];
  constructor(
  ) {}

  ngOnInit(): void {}

  public openDialog(): void {
    this.clickComentario = true;
  }
  public closeDialog(): void {
    this.clickComentario = false;
  }

  onTableDataChange(event: number) {
    this.page = event;
  }

  onTableSizeChange(event: { target: { value: number } }): void {
    this.tableSize = event.target.value;
    this.page = 1;
  }
}
