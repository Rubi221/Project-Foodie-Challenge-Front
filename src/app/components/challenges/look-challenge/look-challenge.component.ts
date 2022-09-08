import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Challenge } from 'src/app/models/challenge';
import swal from 'sweetalert2'

@Component({
  selector: 'app-look-challenge',
  templateUrl: './look-challenge.component.html',
  styleUrls: ['./look-challenge.component.css']
})
export class LookChallengeComponent implements OnInit {

  challenge: Challenge = new Challenge();
  public madeChef: Boolean;

  id: String = "";

  constructor(private activatedRoute: ActivatedRoute) { 
    this.challenge.inscrito=false;
    this.madeChef=true;
  }

  ngOnInit(): void {
    console.log(this.challenge)
    this.activatedRoute.params.subscribe(params => {
      this.id = params['id'];
      // if (this.id) {
      //   this.articuloService.getById(this.id).subscribe(response =>{
      //     this.articulo = response;
      //   });

      })
  }

  public registraReto(): void {
    swal.fire({
      title: 'Seguro deseas inscribirte?',
      icon: 'question',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, inscribirme!',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      //LLAMAR AL SERVICIO ESE
      if (result.isConfirmed) {
        swal.fire(
          'Excelente!',
          'Tu inscripcion ha sido satisfactoria.',
          'success'
        )
      }
    })
  }

  public realizarEntrega(): void {
    swal.fire({
      title: 'Seguro deseas inscribirte?',
      icon: 'question',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, inscribirme!',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        swal.fire(
          'Excelente!',
          'Tu inscripcion ha sido satisfactoria.',
          'success'
        )
      }
    })
  }

}
