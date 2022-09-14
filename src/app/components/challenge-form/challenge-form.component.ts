import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Challenge } from 'src/app/models/challenge';
import { CreateChallenge } from 'src/app/models/create-challenge';
import { ChallengeService } from 'src/app/services/challenge.service';
import swal from 'sweetalert2'


@Component({
  selector: 'app-challenge-form',
  templateUrl: './challenge-form.component.html',
  styleUrls: ['./challenge-form.component.css']
})
export class ChallengeFormComponent implements OnInit {

  challenge: CreateChallenge = { titulo: "", contenido: "", video: "", dificultad: 0, adjunto: "", idUsuario: 0, idCategoria: 0, fechaInicio: "", fechaFin: "" };
  challengeId: Challenge = new Challenge();

  id: string = "";

  constructor(private router: Router, private activatedRoute: ActivatedRoute, private challengeService: ChallengeService) { }

  ngOnInit(): void {
    console.log(this.challenge)
    this.activatedRoute.params.subscribe(params => {
      this.id = params['id'];
      if (this.id) {
        this.challengeService.getChallengeById(
            parseInt(this.id),
            parseInt(sessionStorage.getItem('idUsuario')!)
          )
          .subscribe((response) => {
            this.challengeId = response;
            this.challenge.titulo=this.challengeId.titulo
            this.challenge.contenido=this.challengeId.contenido
            this.challenge.video=this.challengeId.video
            this.challenge.dificultad=this.challengeId.dificultad
            this.challenge.adjunto=this.challengeId.adjunto
            this.challenge.idUsuario=this.challengeId.idUsuario
            this.challenge.fechaInicio=this.challengeId.fechaInicio
            this.challenge.fechaFin=this.challengeId.fechaFin

         })


    }})
  }

  public crearChallenge(): void {
    this.fixDateFormat()
    this.challenge.idUsuario = parseInt(sessionStorage.getItem('idUsuario')!)
    this.challenge.idCategoria = 1
    console.log(this.challenge)
    this.challengeService.createChallenge(this.challenge).subscribe((response) => {
      this.challenge = response;
      if (response.titulo === this.challenge.titulo) {
        swal.fire('Creado con Exito', "", 'success');
        setTimeout(() => {
          this.router.navigate(['home/challenges']);
        },
          1000);
      } else {
      swal.fire('Sucedio Algo!', "", 'error');
      }
    },(err)=> {swal.fire('Sucedio Algo!', "", 'error')});
}
  

  public fixDateFormat(): void {
  var fechaInicio = this.challenge.fechaInicio
    this.challenge.fechaInicio = fechaInicio.substring(8, 10) + "-" + fechaInicio.substring(5, 7) + "-" + fechaInicio.substring(0, 4)
    var fechaFin = this.challenge.fechaFin
    this.challenge.fechaFin = fechaFin.substring(8, 10) + "-" + fechaFin.substring(5, 7) + "-" + fechaFin.substring(0, 4)
}
}
