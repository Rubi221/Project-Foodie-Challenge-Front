import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Challenge } from 'src/app/models/challenge';

@Component({
  selector: 'app-challenge-form',
  templateUrl: './challenge-form.component.html',
  styleUrls: ['./challenge-form.component.css']
})
export class ChallengeFormComponent implements OnInit {

  challenge: Challenge = new Challenge();

  id: String = "";

  constructor(private activatedRoute: ActivatedRoute) { }

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

}
