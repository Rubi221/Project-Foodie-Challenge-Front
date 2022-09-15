import { Component, OnInit } from '@angular/core';
import { EntregaReto } from 'src/app/models/entrega';

@Component({
  selector: 'app-entregas',
  templateUrl: './entregas.component.html',
  styleUrls: ['./entregas.component.css']
})
export class EntregasComponent implements OnInit {

  page = 1;
  count = 0;
  tableSize = 6;
  tableSizes = [3, 6, 9, 12];

  public entregas: EntregaReto[] = [

    {
      id: 1,
      idInscripcionReto: 1,
      calificacionFinal: 3,
      video:'',
      AdjuntoImg: ''
    },
    {
      id: 1,
      idInscripcionReto: 1,
      calificacionFinal: 5,
      video:'',
      AdjuntoImg: ''
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
