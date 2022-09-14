import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Challenge } from 'src/app/models/challenge';
import { ChallengeInscrito } from 'src/app/models/challenge-inscrito';
import { ChallengeService } from 'src/app/services/challenge.service';
import swal from 'sweetalert2';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { EntregasComponent } from '../../entregas/entregas.component';

@Component({
  selector: 'app-look-challenge',
  templateUrl: './look-challenge.component.html',
  styleUrls: ['./look-challenge.component.css'],
})
export class LookChallengeComponent implements OnInit {
  challenge: ChallengeInscrito = new ChallengeInscrito();
  public madeChef!: Boolean;
  public esChef!: Boolean;

  id: string = '';
  fechaInicio: String = '21/09/2022';

  constructor(
    private activatedRoute: ActivatedRoute,
    private challengeService: ChallengeService,
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
          swal.fire(
            'Excelente!',
            'Tu inscripcion ha sido satisfactoria.',
            'success'
          );
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

  openDialog() {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;

    const dialogRef = this.dialog.open(EntregasComponent, dialogConfig);
    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
