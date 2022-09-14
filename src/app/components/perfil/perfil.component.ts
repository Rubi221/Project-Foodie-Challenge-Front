import { Component, OnInit } from '@angular/core';
import { UserCredentials } from 'src/app/models/user-credentials';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {
  user: UserCredentials = new UserCredentials('','');
  nombre: String = "Rubi";
  constructor() { }

  ngOnInit(): void {
  }

}
