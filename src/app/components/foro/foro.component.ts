import { Component, OnInit } from '@angular/core';
import { Comentario } from 'src/app/models/comentario';
import { Publicacion } from 'src/app/models/publicacion';
import { PublicacionService } from 'src/app/services/publicacion.service';

@Component({
  selector: 'app-foro',
  templateUrl: './foro.component.html',
  styleUrls: ['./foro.component.css'],
})
export class ForoComponent implements OnInit {
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
    // {
    //   id: 1,
    //   idSeccionForo: 1,
    //   contenido:
    //     'The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally bred for hunting.',
    //   fecha: '21/09/2022',
    //   adjunto: '',
    // },
    // {
    //   id: 2,
    //   idSeccionForo: 2,
    //   contenido:
    //     'The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally bred for hunting.',
    //   fecha: '21/09/2022',
    //   adjunto: '',
    // },
  ];
  constructor(
    public publicacionService:PublicacionService
  ) {}

  ngOnInit(): void {
    this.publicacionService.getOpenChallenges().subscribe((response)=>{
      this.publicaciones=response;
    })
  }

  onTableDataChange(event: number) {
    this.page = event;
  }

  onTableSizeChange(event: { target: { value: number } }): void {
    this.tableSize = event.target.value;
    this.page = 1;
  }
}
