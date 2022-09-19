import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Challenge } from 'src/app/models/challenge';
import { ChallengeInscrito } from 'src/app/models/challenge-inscrito';
import { InscripcionChallenge } from 'src/app/models/inscripcion-challenge';
import { ChallengeService } from 'src/app/services/challenge.service';
import { InscripcionchallengeService } from 'src/app/services/inscripcionchallenge.service';
import swal from 'sweetalert2';
import { EntregaReto } from 'src/app/models/entrega';
import { EntregasService } from 'src/app/services/entregas.service';
import { CreateEntregaReto } from 'src/app/models/create-entrega';
import { DetalleInscripcionService } from 'src/app/services/detalle-inscripcion.service';
import { ThisReceiver } from '@angular/compiler';
import { CreateComentarioReto } from 'src/app/models/create-comentario-reto';
import { Comentario } from 'src/app/models/comentario';
import { ComentariosService } from 'src/app/services/comentarios.service';

@Component({
  selector: 'app-look-challenge',
  templateUrl: './look-challenge.component.html',
  styleUrls: ['./look-challenge.component.css'],
})
export class LookChallengeComponent implements OnInit {
  public entregas: EntregaReto[] = [];
  public realizaEntrega: CreateEntregaReto = {
    idInscripcionReto: 0,
    calificacionFinal: 0,
    video: '',
    AdjuntoImg: '',
  };
  public entrega!: EntregaReto;

  public challenge: ChallengeInscrito = new ChallengeInscrito();
  public madeChef!: Boolean;
  public esChef!: Boolean;
  public inscripcion!: InscripcionChallenge;
  public entregado!: boolean;
  public categoria: String = '';
  public dificultad: String = '';
  public createComentario: CreateComentarioReto = {
    idUsuario: 0,
    idReto: 0,
    contenido: '',
    fecha: '',
  };
  public comentarios: Comentario[] = [];

  id: string = '';

  constructor(
    private activatedRoute: ActivatedRoute,
    private challengeService: ChallengeService,
    private inscripcionService: InscripcionchallengeService,
    private entregaService: EntregasService,
    private detalleEntregaService: DetalleInscripcionService,
    private router: Router,
    public comentarioService: ComentariosService
  ) {}

  ngOnInit(): void {
    this.eligeCategoria();

    this.activatedRoute.params.subscribe((params) => {
      this.id = params['id'];
      if (this.id) {
        this.challengeService
          .getChallengeById(
            parseInt(this.id),
            parseInt(sessionStorage.getItem('idUsuario')!)
          )
          .subscribe((response) => {
            this.challenge = response;

            this.validaChef();

            if (sessionStorage.getItem('tipo')! === '1') {
              this.esChef = true;
            } else {
              this.esChef = false;
            }

            if(this.challenge.nombreCategoria != null ){
              this.categoria = this.challenge.nombreCategoria
            }else{
              this.categoria = 'No indica';
            }
            
            // if (this.challenge.idCategoria === 1) {
            //   this.categoria = 'Tradicional';
            // } else if (this.challenge.idCategoria === 2) {
            //   this.categoria = 'Postres';
            // } else if (this.challenge.idCategoria === 3) {
            //   this.categoria = 'Internacional';
            // } else if (this.challenge.idCategoria === 4) {
            //   this.categoria = 'Brunch';
            // } else {
            //   this.categoria = 'No indica';
            // }

            if (this.challenge.dificultad === 1) {
              this.dificultad = 'Facil';
            } else if (this.challenge.dificultad === 2) {
              this.dificultad = 'Intermedio';
            } else if (this.challenge.dificultad === 3) {
              this.dificultad = 'Experimentado';
            } else {
              this.dificultad = 'No indica';
            }

            if (this.challenge.idInscripcion != null) {
              this.detalleEntregaService
                .checkEntrega(this.challenge.idInscripcion)
                .subscribe((response) => {
                  if (response.idInscripcionReto != null)
                  {
                    this.entregado = true;
                  } else {
                    this.entregado = false;
                  }
                });
            }
          });

        this.entregaService
          .getEntregasById(parseInt(this.id))
          .subscribe((response) => {
            this.entregas = response;
          });
      }
    });
  }

  public eligeCategoria(): void {}

  public inscribeReto(): void {
    swal
      .fire({
        title: 'Seguro deseas inscribirte?',
        icon: 'question',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si, inscribirme!',
        cancelButtonText: 'Cancelar',
      })
      .then((result) => {
        //LLAMAR AL SERVICIO ESE
        if (result.isConfirmed) {
          this.inscripcionService
            .createInscripcion(
              parseInt(this.id),
              parseInt(sessionStorage.getItem('idUsuario')!)
            )
            .subscribe((response) => {
              this.inscripcion = response;
              if (this.inscripcion.idReto === parseInt(this.id)) {
                swal.fire(
                  'Excelente!',
                  'Tu inscripcion ha sido satisfactoria.',
                  'success'
                );

                window.location.reload();
              }
            });
        }
      });
  }

  public validaChef(): void {
    console.log(this.challenge);

    console.log(this.challenge.idUsuario);
    console.log(parseInt(sessionStorage.getItem('idUsuario')!));

    if (parseInt(sessionStorage.getItem('tipo')!) === 1) {
      if (
        this.challenge.idUsuario ===
        parseInt(sessionStorage.getItem('idUsuario')!)
      ) {
        this.madeChef = true;
      } else {
        this.madeChef = false;
      }
    } else {
      this.madeChef = false;
    }
  }

  enviarEntrega(): void {
    swal
      .fire({
        title: 'Seguro deseas realizar tu entrega?',
        icon: 'question',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si, seguro!',
        cancelButtonText: 'Cancelar',
      })
      .then((result) => {
        if (result.isConfirmed) {
          this.realizaEntrega.idInscripcionReto = this.challenge.idInscripcion;
          console.log(this.realizaEntrega);
          this.detalleEntregaService
            .createInscripcion(this.realizaEntrega)
            .subscribe((response) => {
              this.entrega = response;
              if (
                this.realizaEntrega.idInscripcionReto ===
                this.entrega.idInscripcionReto
              ) {
                swal.fire(
                  'Excelente!',
                  'Tu entrega ha sido satisfactoria.',
                  'success'
                );
                window.location.reload();
              }
            });
        }
      });
  }

  cancelarEntrega(): void {
    swal
      .fire({
        title: 'Seguro deseas cancelar tu entrega?',
        icon: 'question',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si, seguro!',
        cancelButtonText: 'Cancelar',
      })
      .then((result) => {
        if (result.isConfirmed) {
          swal.fire('Excelente!', 'Tu entrega ha sido cancelada.', 'success');
        }
      });
  }

  clickComentar(idR: number): void {
    var date = new Date();
    var current_date =
      date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate();
    this.createComentario.fecha = current_date;
    this.createComentario.idReto = idR;
    this.createComentario.idUsuario = parseInt(
      sessionStorage.getItem('idUsuario')!
    );
    console.log(this.createComentario);

    this.comentarioService.getCommentsReto(idR).subscribe((response) => {
      this.comentarios = response;
    });
  }

  creaComentario(): void {
    this.comentarioService
      .createCommentReto(this.createComentario)
      .subscribe((response) => {
        console.log(response);
        if (this.createComentario.idUsuario === response.idUsuario) {
          window.location.reload();
        }
      });
  }

  borrarReto(): void {}
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
      console.log(reader.result);
    };
    reader.onerror = function (error) {
      console.log('Error: ', error);
    };
  }
}
