import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { UserCredentials } from 'src/app/models/user-credentials';
import { UserService } from 'src/app/services/user.service';
import { Storage, ref, uploadBytes, UploadTask, UploadTaskSnapshot, getDownloadURL } from '@angular/fire/storage';


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
  archivoCapturado: any;
  enlaceImage: any;
  constructor(private userService: UserService,    private storage: Storage
    ) {}

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

    this.userService.updateUser(this.user).subscribe((response)=>{
      console.log(response)
    })
  }

  closeEditUser() {
    window.location.reload();
  }

  

  public capturarFile(event: any): any {
    this.archivoCapturado = event.target.files[0];
    const imgRef = ref(this.storage, 'images/' + this.archivoCapturado.name)
    uploadBytes(imgRef, this.archivoCapturado).then(x => {
      getDownloadURL(imgRef)
        .then((url) => {
          this.enlaceImage = url;
          this.user.foto = url
          console.log(url)
        }).catch(error => console.log(error))
    } )

    this.getBase64(event);

  }
  
  public getBase64(event: any) {
    let me = this;
    let file = event.target.files[0];
    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      this.previsualization = reader.result;
      // console.log(reader.result);
    };
    reader.onerror = function (error) {
      console.log('Error: ', error);
    };
  }

}
