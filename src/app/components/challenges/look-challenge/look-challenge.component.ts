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

@Component({
  selector: 'app-look-challenge',
  templateUrl: './look-challenge.component.html',
  styleUrls: ['./look-challenge.component.css'],
})
export class LookChallengeComponent implements OnInit {
  page = 1;
  count = 0;
  tableSize = 6;
  tableSizes = [3, 6, 9, 12];

  public entregas: EntregaReto[] = [];
  public realizaEntrega: CreateEntregaReto = { idInscripcionReto: 0, calificacionFinal: 0, video: "", AdjuntoImg: "" };
  public entrega!: EntregaReto;

  public challenge: ChallengeInscrito = new ChallengeInscrito();
  public madeChef!: Boolean;
  public esChef!: Boolean;
  public inscripcion!: InscripcionChallenge;
  public entregado!:boolean;

  id: string = '';
  fechaInicio: String = '21/09/2022';

  constructor(
    private activatedRoute: ActivatedRoute,
    private challengeService: ChallengeService,
    private inscripcionService: InscripcionchallengeService,
    private entregaService: EntregasService,
    private detalleEntregaService: DetalleInscripcionService,
    private router: Router
  ) { }

  ngOnInit(): void {

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

            console.log(this.challenge);

            console.log(this.challenge.idUsuario);

            if (sessionStorage.getItem('tipo')! === '1') {
              this.esChef = true;
            }else{
              this.esChef = false;
            }

            console.log(this.esChef)

            if(this.challenge.idInscripcion!= null){
              this.detalleEntregaService.checkEntrega(this.challenge.idInscripcion).subscribe((response)=>{
                if(this.challenge.idInscripcion === response.idInscripcionReto){
                  this.entregado=true;
                }else{
                  this.entregado=false;
                }
              })
            }
            
          });

        this.entregaService.getEntregasById(parseInt(this.id)).subscribe((response) => {
          this.entregas = response;
        });

        
      }
    });




  }

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
          this.realizaEntrega.idInscripcionReto=this.challenge.idInscripcion
          console.log(this.realizaEntrega)
          this.detalleEntregaService.createInscripcion(this.realizaEntrega).subscribe((response) => {
            this.entrega = response;
            if (this.realizaEntrega.idInscripcionReto === this.entrega.idInscripcionReto) {
              swal.fire(
                'Excelente!',
                'Tu entrega ha sido satisfactoria.',
                'success'
              );
              window.location.reload();

            }
          }
      )}
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
        swal.fire(
          'Excelente!',
          'Tu entrega ha sido cancelada.',
          'success'
        );
      }
    });
}

onTableDataChange(event: number) {
  this.page = event;
}
}
