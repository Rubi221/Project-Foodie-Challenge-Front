import { Component, OnInit } from '@angular/core';
import swal from 'sweetalert2'
import { UserCredentials } from 'src/app/models/user-credentials';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  title = 'Inicia Sesion';
  isLogin: Boolean = false;
  // constructor(private router: Router, private usuarioService:UsuarioService) { }

    // constructor(private router: Router, private usuarioService:UsuarioService) { }
  actualCredentials: UserCredentials = new UserCredentials('','',1);

  constructor(private router: Router){}

  ngOnInit(): void {
    if(sessionStorage.getItem('tipo')){
      this.router.navigate(['home']);
    }
  }

  public login(): void {

    //aqui agregar logica de logeo
    if (this.validate()) {
      swal.fire('Bienvenido', "", 'success');
      setTimeout(() => {
        this.router.navigate(['home/challenges']);
      },
      1000);
    } else {
      swal.fire('Credenciales invalidas', "", 'error');

    }
  }

  private validate(): Boolean {
    
    // if (this.actualCredentials.username === this.usuarioService.credentials.username && this.actualCredentials.password === this.usuarioService.credentials.password) {
    if (this.actualCredentials.username === 'admin' && this.actualCredentials.password === 'admin') {
      sessionStorage.setItem("username", this.actualCredentials.username)
      sessionStorage.setItem('tipo',"1")
      return true;
    } else if(this.actualCredentials.username === 'user' && this.actualCredentials.password === 'user'){
      sessionStorage.setItem("username", this.actualCredentials.username)
      sessionStorage.setItem('tipo',"2")
      return true;
    } else {
      return false;
    }
  }

  public signOut(){
    sessionStorage.clear()
    setTimeout(() => {
      this.router.navigate(['register']);
    },
    1000);

  }
}
