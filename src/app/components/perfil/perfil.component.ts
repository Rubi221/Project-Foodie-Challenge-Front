import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { UserCredentials } from 'src/app/models/user-credentials';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css'],
})
export class PerfilComponent implements OnInit {
  user: User = new User();
  public esChef!: Boolean;
  public editMode: Boolean = false;
  public archivos: any = [];
  public previsualization: any;
  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.userService
      .getUser(parseInt(sessionStorage.getItem('idUsuario')!))
      .subscribe((response) => {
        this.user = response;
        this.previsualization = this.user.foto
      });

    if (sessionStorage.getItem('tipo')! === '1') {
      this.esChef = true;
    } else {
      this.esChef = false;
    }
  }

  editUser() {
    this.editMode = true;
  }

  closeEditUser() {
    window.location.reload();
  }

  

  public capturarFile(event: any): any {
    const archivoCapturado = event.target.files;
    this.archivos.push(archivoCapturado);
    console.log(this.previsualization);
    this.getBase64(event);
  }

  public getBase64(event: any) {
    let me = this;
    let file = event.target.files[0];
    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      this.previsualization = reader.result;
      this.user.foto=this.previsualization;
      console.log(reader.result);
    };
    reader.onerror = function (error) {
      console.log('Error: ', error);
    };
  }

}
