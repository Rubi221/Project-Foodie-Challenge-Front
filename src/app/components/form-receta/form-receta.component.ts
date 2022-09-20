import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { Receta } from 'src/app/models/receta';
import { Storage, ref, uploadBytes, UploadTask, UploadTaskSnapshot, getDownloadURL } from '@angular/fire/storage';
import { LearningService } from 'src/app/services/learning.service';
import { CreateReceta } from 'src/app/models/create-receta';
import swal from 'sweetalert2';


@Component({
  selector: 'app-form-receta',
  templateUrl: './form-receta.component.html',
  styleUrls: ['./form-receta.component.css'],
})
export class FormRecetaComponent implements OnInit {
  receta: CreateReceta = {
    titulo: '',
    contenido: '',
    adjunto: '',
    idUsuario: 0,
    idCategoria: 0,
    fecha: ''
  };

  id: string = '';
  archivoCapturado: any;
  enlaceImage: any;

  
  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private learningService: LearningService,
    private sanitizer: DomSanitizer,
    private storage: Storage
  ) {}

  ngOnInit(): void {
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();

  this.receta.fecha = dd + '-' + mm + '-' + yyyy;
    this.receta.idUsuario=parseInt(sessionStorage.getItem("idUsuario")!)
    
  }
  
  checkUser(): boolean {
    if (sessionStorage.getItem('tipo') === '1') {
      return true;
    } else {
      return false;
    }
  }

  public publicarReceta(): void {
    
    console.log(this.receta)
    this.learningService.create(this.receta).subscribe((response)=>{
      console.log(response)
      swal.fire('Creado con Exito', '', 'success');
          setTimeout(() => {
            this.router.navigate(['home/learning']);
          }, 1000);
    })


  }

  public archivos: any = [];

  public previsualization: any;

  public capturarFile(event: any): any {
    this.archivoCapturado = event.target.files[0];
    const imgRef = ref(this.storage, 'images/' + this.archivoCapturado.name)
    uploadBytes(imgRef, this.archivoCapturado).then(x => {
      getDownloadURL(imgRef)
        .then((url) => {
          this.enlaceImage = url;
          this.receta.adjunto = url
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
      console.log(reader.result);
    };
    reader.onerror = function (error) {
      console.log('Error: ', error);
    };
  }
}
