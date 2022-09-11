import { Component, OnInit } from '@angular/core';
import swal from 'sweetalert2'
import { Router } from '@angular/router';
import { RegisterData } from 'src/app/models/register-data';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  title = 'Registrate';
  register: Boolean = false;
  // constructor(private router: Router, private ) { }

    // constructor(private router: Router, private ) { }
  registerData: RegisterData = new RegisterData('','','','','',1);

  constructor() { }

  ngOnInit(): void {
    if(sessionStorage.getItem('tipo')){
    }
  }

  // public login(): void {

  //   //aqui agregar logica de registro
  //   if (this.validate()) {
  //     swal.fire('Bienvenido', "", 'success');
  //     setTimeout(() => {
  //       this.router.navigate(['home/challenges']);
  //     },
  //     1000);
  //   } else {
  //     swal.fire('Valores invalidas', "", 'error');

  //   }
  // }

  // private validate(): Boolean {
    
  //   // if (this.actualCredentials.username === this.usuarioService.credentials.username && this.actualCredentials.password === this.usuarioService.credentials.password) {
  //   if (this.actualCredentials.username === 'admin' && this.actualCredentials.password === 'admin') {
  //     sessionStorage.setItem("username", this.actualCredentials.username)
  //     sessionStorage.setItem('tipo',"1")
  //     return true;
  //   } else if(this.actualCredentials.username === 'user' && this.actualCredentials.password === 'user'){
  //     sessionStorage.setItem("username", this.actualCredentials.username)
  //     sessionStorage.setItem('tipo',"2")
  //     return true;
  //   } else {
  //     return false;
  //   }
  // }

}