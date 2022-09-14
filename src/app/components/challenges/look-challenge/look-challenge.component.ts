import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Challenge } from 'src/app/models/challenge';
import { ChallengeInscrito } from 'src/app/models/challenge-inscrito';
import { InscripcionChallenge } from 'src/app/models/inscripcion-challenge';
import { ChallengeService } from 'src/app/services/challenge.service';
import { InscripcionchallengeService } from 'src/app/services/inscripcionchallenge.service';
import swal from 'sweetalert2';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { EntregasComponent } from '../../entregas/entregas.component';
import { EntregaReto } from 'src/app/models/entrega';

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

  public entregas: EntregaReto[] = [
    {
      id: 1,
      idInscripcionReto: 1,
      calificacionFinal: 3,
      video: '',
      adjunto: '',
    },
    {
      id: 1,
      idInscripcionReto: 1,
      calificacionFinal: 5,
      video: '',
      adjunto: '',
    },
  ];

  challenge: ChallengeInscrito = new ChallengeInscrito();
  public madeChef!: Boolean;
  public esChef!: Boolean;
  public clickEntrega: Boolean = false;
  public inscripcion!: InscripcionChallenge;

  id: string = '';
  fechaInicio: String = '21/09/2022';

  constructor(
    private activatedRoute: ActivatedRoute,
    private challengeService: ChallengeService,
    private inscripcionService: InscripcionchallengeService,
    public dialog: MatDialog
  ) {}

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

            if (parseInt(sessionStorage.getItem('tipo')!) === 1) {
              this.esChef = true;
            }
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
  public realizarEntrega(): void {
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
        if (result.isConfirmed) {
          swal.fire(
            'Excelente!',
            'Tu inscripcion ha sido satisfactoria.',
            'success'
          );
        }
      });
  }

  public openDialog(): void {
    this.clickEntrega = true;
  }
  public closeDialog(): void {
    this.clickEntrega = false;
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

  enviaEntrega(): void {
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
          swal.fire(
            'Excelente!',
            'Tu entrega ha sido satisfactoria.',
            'success'
          );
        }
      });
  }

  onTableDataChange(event: number) {
    this.page = event;
  }

<<<<<<< HEAD
  enviaEntrega(): void{

    

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
        swal.fire(
          'Excelente!',
          'Tu entrega ha sido satisfactoria.',
          'success'
        );
      }
    });
=======
  onTableSizeChange(event: { target: { value: number } }): void {
    this.tableSize = event.target.value;
    this.page = 1;
>>>>>>> cb6a4c0807ba8bbf13900aa566df25adb40b3f6b
  }
}
