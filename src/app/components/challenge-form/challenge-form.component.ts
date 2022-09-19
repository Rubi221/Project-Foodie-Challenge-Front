import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { Challenge } from 'src/app/models/challenge';
import { CreateChallenge } from 'src/app/models/create-challenge';
import { ChallengeService } from 'src/app/services/challenge.service';
import swal from 'sweetalert2';

@Component({
  selector: 'app-challenge-form',
  templateUrl: './challenge-form.component.html',
  styleUrls: ['./challenge-form.component.css'],
})
export class ChallengeFormComponent implements OnInit {
  challenge: CreateChallenge = {
    titulo: '',
    contenido: '',
    video: '',
    dificultad: 0,
    adjunto: '',
    idUsuario: 0,
    idCategoria: 0,
    fechaInicio: '',
    fechaFin: '',
  };
  challengeId: Challenge = new Challenge();

  id: string = '';

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private challengeService: ChallengeService,
    private sanitizer: DomSanitizer
  ) {}

  ngOnInit(): void {
    console.log(this.challenge);
    this.activatedRoute.params.subscribe((params) => {
      this.id = params['id'];
      if (this.id) {
        this.challengeService
          .getChallengeById(
            parseInt(this.id),
            parseInt(sessionStorage.getItem('idUsuario')!)
          )
          .subscribe((response) => {
            this.challengeId = response;
            this.challenge.titulo = this.challengeId.titulo;
            this.challenge.contenido = this.challengeId.contenido;
            this.challenge.video = this.challengeId.video;
            this.challenge.dificultad = this.challengeId.dificultad;
            this.challenge.adjunto = this.challengeId.adjunto;
            this.challenge.idUsuario = this.challengeId.idUsuario;
            this.challenge.fechaInicio = this.challengeId.fechaInicio;
            this.challenge.fechaFin = this.challengeId.fechaFin;
          });
      }
    });
  }

  public crearChallenge(): void {
    this.fixDateFormat();
    this.challenge.idUsuario = parseInt(sessionStorage.getItem('idUsuario')!);
    console.log(this.challenge);
    this.challengeService.createChallenge(this.challenge).subscribe(
      (response) => {
        this.challenge = response;
        if (response.titulo === this.challenge.titulo) {
          swal.fire('Creado con Exito', '', 'success');
          setTimeout(() => {
            this.router.navigate(['home/challenges']);
          }, 1000);
        } else {
          swal.fire('Sucedio Algo!', '', 'error');
        }
      },
      (err) => {
        swal.fire('Sucedio Algo!', '', 'error');
      }
    );
  }

  challengeUpdate!:Challenge;

  public updateChallenge(): void {
    this.fixDateFormat();
    this.challenge.idUsuario = parseInt(sessionStorage.getItem('idUsuario')!);
    
    this.challengeUpdate={id:parseInt(this.id),titulo:this.challenge.titulo,contenido:this.challenge.contenido,dificultad:this.challenge.dificultad,
    video:this.challenge.video,adjunto:this.challenge.adjunto,idUsuario:this.challenge.idUsuario, nombreChef:"", idCategoria:this.challenge.idCategoria, 
    nombreCategoria:"", fechaInicio: this.challenge.fechaInicio, fechaFin: this.challenge.fechaFin};

    console.log(this.challengeUpdate)

    this.challengeService.updateChallenge(this.challengeUpdate).subscribe(
      (response) => {
        this.challenge = response;
        if (response.titulo === this.challengeUpdate.titulo) {
          swal.fire('ACtualizado con Exito', '', 'success');
          setTimeout(() => {
            this.router.navigate(['home/challenges']);
          }, 1000);
        } else {
          swal.fire('Sucedio Algo!', '', 'error');
        }
      },
      (err) => {
        swal.fire('Sucedio Algo!', '', 'error');
      }
    );
  }


  public fixDateFormat(): void {
    var fechaInicio = this.challenge.fechaInicio;
    this.challenge.fechaInicio =
      fechaInicio.substring(8, 10) +
      '-' +
      fechaInicio.substring(5, 7) +
      '-' +
      fechaInicio.substring(0, 4);
    var fechaFin = this.challenge.fechaFin;
    this.challenge.fechaFin =
      fechaFin.substring(8, 10) +
      '-' +
      fechaFin.substring(5, 7) +
      '-' +
      fechaFin.substring(0, 4);
  }

  public archivos: any = [];

  public previsualization: any;

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
      this.challenge.adjunto=this.previsualization;
      console.log(reader.result);
    };
    reader.onerror = function (error) {
      console.log('Error: ', error);
    };
  }
}
