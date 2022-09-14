import { Component, OnInit } from '@angular/core';
import swal from 'sweetalert2'
import { UserCredentials } from 'src/app/models/user-credentials';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  title = 'Inicia Sesion';
  isLogin: Boolean = false;

  actualCredentials: User = new User();

  private user: User = new User();

  constructor(private router: Router, private userService: UserService){}

  ngOnInit(): void {
    if(sessionStorage.getItem('tipo')){
      this.router.navigate(['home']);
    }
  }

  public login(): void {

    this.userService.validateUser(this.actualCredentials).subscribe(response=>{
      this.user=response
      if (this.validate(this.user)) {
        swal.fire('Bienvenido', "", 'success');
        setTimeout(() => {
          this.router.navigate(['home/challenges']);
        },
        1000);
      } else {
        swal.fire('Credenciales invalidas', "", 'error');
      }
    });

    
  }

  private validate(userInfo : User): Boolean {

    console.log(this.actualCredentials.username)
    console.log(userInfo)

    if(userInfo === null){
      return false;
    }else if (this.actualCredentials.username === userInfo.username && this.actualCredentials.contrasena === userInfo.contrasena) {
      sessionStorage.setItem("username", this.actualCredentials.username)
      sessionStorage.setItem("idUsuario", userInfo.id+"")
      sessionStorage.setItem('tipo',userInfo.idTipoUsuario+"")
      return true;
    } else {
      return false;
    }
  }
}
