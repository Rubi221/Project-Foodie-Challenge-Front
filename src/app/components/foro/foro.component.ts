import { Component, OnInit } from '@angular/core';
import { Comentario } from 'src/app/models/comentario';
import { CreateComentarioPubli } from 'src/app/models/create-comentario-publi';
import { CreatePublicacion } from 'src/app/models/createPublicacion';
import { Publicacion } from 'src/app/models/publicacion';
import { SeccionForo } from 'src/app/models/seccionForo';
import { ComentariosService } from 'src/app/services/comentarios.service';
import { PublicacionService } from 'src/app/services/publicacion.service';
import { SeccionForoService } from 'src/app/services/seccionForo.service';
import { Storage, ref, uploadBytes, UploadTask, UploadTaskSnapshot, getDownloadURL } from '@angular/fire/storage';
import swal from 'sweetalert2';



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
  secciones: SeccionForo[] = [];

  public comentarios: Comentario[] = [];
  public createComentario: CreateComentarioPubli = {
    idUsuario: 0,
    idPublicacion: 0,
    contenido: '',
    fecha: '',
  };

  public createPublicacion: CreatePublicacion = new CreatePublicacion;
  public publicaciones: Publicacion[][]= [];
  public publicaciones2: Publicacion[] = [];
  public publicaciones3: Publicacion[] = [];
  archivoCapturado: any;
  previsualization: any
  enlaceImage: any;

  constructor(
    public publicacionService: PublicacionService,
    public comentarioService: ComentariosService,
    public seccionService: SeccionForoService, public storage: Storage
  ) {
    var date = new Date();
    var current_date =
      date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate();
  }

  ngOnInit(): void {
    this.seccionService.getAllSeccion().subscribe((response) => {
      this.secciones = response;
      console.log(response);

      for(let e of this.secciones){
        this.publicacionService.getAllPublicacion(e.id).subscribe((response) => {
          this.publicaciones[e.id] = response;
          console.log(response);
        });
      }
    });
  }

  onTableDataChange(event: number) {
    this.page = event;
  }

  onTableSizeChange(event: { target: { value: number } }): void {
    this.tableSize = event.target.value;
    this.page = 1;
  }

  clickComentar(id: number): void {
    var date = new Date();
    var current_date =
      date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate();
    this.createComentario.fecha = current_date;
    this.createComentario.idPublicacion = id;
    this.createComentario.idUsuario = parseInt(
      sessionStorage.getItem('idUsuario')!
    );
    console.log(this.createComentario);

    this.comentarioService.getCommentsPubli(id).subscribe((response) => {
      this.comentarios = response;
    });
  }

  creaComentario(): void {
    this.comentarioService
      .createCommentPubli(this.createComentario)
      .subscribe((response) => {
        console.log(response);
        if (this.createComentario.idUsuario === response.idUsuario) {
          window.location.reload();
        }
      });
  }

  
  publicar(seccion:number){
    this.createPublicacion.idSeccionForo = seccion
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();
    this.createPublicacion.fecha = dd + '-' + mm + '-' + yyyy;
    this.createPublicacion.idUsuario = parseInt(sessionStorage.getItem('idUsuario')!)

    console.log(this.createPublicacion)

    this.publicacionService.create(this.createPublicacion).subscribe((response)=>{
      console.log(response)
      swal.fire('Actualizado con Exito', '', 'success');
      setTimeout(() => {
      }, 1000);
      window.location.reload();

    })
  }

  public capturarFile(event: any): any {
    this.archivoCapturado = event.target.files[0];
    const imgRef = ref(this.storage, 'images/' + this.archivoCapturado.name)
    uploadBytes(imgRef, this.archivoCapturado).then(x => {
      getDownloadURL(imgRef)
        .then((url) => {
          this.enlaceImage = url;
          this.createPublicacion.adjunto = url
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
