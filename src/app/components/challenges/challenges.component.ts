import { Component, OnInit } from '@angular/core';
import { Challenge } from 'src/app/models/challenge';


@Component({
  selector: 'app-challenges',
  templateUrl: './challenges.component.html',
  styleUrls: ['./challenges.component.css']
})
export class ChallengesComponent implements OnInit {
  
  page = 1;
  count = 0;
  tableSize = 5;
  tableSizes = [3, 6, 9, 12];

  public challenges: Challenge[]=[
    {id: 1,titulo: "reto 1",contenido: "reto contenido", resumen:"RESUMEN RESUMEN RESUMEN RESUMEN RESUMEN RESUMEN",dificultad: 1,video: "",idChef: 1,nombreChef:"chef1",idCategoria:1,nombreCategoria:"categoria1",fechaInicio:"21/09/2022",fechaFin:"", inscrito: true},
    {id: 2,titulo: "reto 1",contenido: "reto contenido",resumen:"RESUMEN RESUMEN RESUMEN RESUMEN RESUMEN RESUMEN",dificultad: 1,video: "",idChef: 1,nombreChef:"chef1",idCategoria:1,nombreCategoria:"categoria1",fechaInicio:"",fechaFin:"", inscrito: true},
    {id: 3,titulo: "reto 3",contenido: "reto contenido",resumen:"RESUMEN RESUMEN RESUMEN RESUMEN RESUMEN RESUMEN",dificultad: 1,video: "",idChef: 1,nombreChef:"chef1",idCategoria:1,nombreCategoria:"categoria1",fechaInicio:"",fechaFin:"", inscrito: true},
    {id: 4,titulo: "reto 4",contenido: "reto contenido",resumen:"RESUMEN RESUMEN RESUMEN RESUMEN RESUMEN RESUMEN",dificultad: 1,video: "",idChef: 1,nombreChef:"chef1",idCategoria:1,nombreCategoria:"categoria1",fechaInicio:"",fechaFin:"", inscrito: false},
    {id: 5,titulo: "reto 5",contenido: "reto contenido",resumen:"RESUMEN RESUMEN RESUMEN RESUMEN RESUMEN RESUMEN",dificultad: 1,video: "",idChef: 1,nombreChef:"chef1",idCategoria:1,nombreCategoria:"categoria1",fechaInicio:"",fechaFin:"", inscrito: false},
    {id: 6,titulo: "reto 6",contenido: "reto contenido",resumen:"RESUMEN RESUMEN RESUMEN RESUMEN RESUMEN RESUMEN",dificultad: 1,video: "",idChef: 1,nombreChef:"chef1",idCategoria:1,nombreCategoria:"categoria1",fechaInicio:"",fechaFin:"", inscrito: false},
    {id: 7,titulo: "reto 7",contenido: "reto contenido",resumen:"RESUMEN RESUMEN RESUMEN RESUMEN RESUMEN RESUMEN",dificultad: 1,video: "",idChef: 1,nombreChef:"chef1",idCategoria:1,nombreCategoria:"categoria1",fechaInicio:"",fechaFin:"", inscrito: false}
    
  ];

  constructor() { }

  ngOnInit(): void {
  }

  onTableDataChange(event: number){
    this.page = event;
  }  

  onTableSizeChange(event: { target: { value: number; }; }): void {
    this.tableSize = event.target.value;
    this.page = 1;
  }  

  checkUser() : boolean{

    if(sessionStorage.getItem('tipo') == "1"){
      return true
    }else{
      return false
    }
  }
}
