import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Challenge } from 'src/app/models/challenge';
import swal from 'sweetalert2';

@Component({
  selector: 'app-look-challenge',
  templateUrl: './look-challenge.component.html',
  styleUrls: ['./look-challenge.component.css'],
})
export class LookChallengeComponent implements OnInit {
  challenge: Challenge = new Challenge();
  public madeChef: Boolean;
  id: String = '';
  fechaInicio: String = '21/09/2022';

  constructor(private activatedRoute: ActivatedRoute) {
    this.challenge.inscrito = false;
    this.challenge.titulo = 'Reto #';
    this.challenge.contenido =
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi amet consequuntur tempora deleniti iure libero in quidem labore voluptatibus esse. Architecto, ducimus? Voluptatibus aliquid incidunt provident vitae atque numquam nobis! ';
    this.madeChef = true;
  }

  ngOnInit(): void {
    console.log(this.challenge);
    this.activatedRoute.params.subscribe((params) => {
      this.id = params['id'];
      // if (this.id) {
      //   this.articuloService.getById(this.id).subscribe(response =>{
      //     this.articulo = response;
      //   });
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
}
