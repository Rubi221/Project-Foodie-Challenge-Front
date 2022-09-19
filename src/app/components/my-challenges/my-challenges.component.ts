import { Component, OnInit } from '@angular/core';
import { Challenge } from 'src/app/models/challenge';
import { ChallengeService } from 'src/app/services/challenge.service';

@Component({
  selector: 'app-my-challenges',
  templateUrl: './my-challenges.component.html',
  styleUrls: ['./my-challenges.component.css']
})
export class MyChallengesComponent implements OnInit {

  showFiller = false;

  public challenges: Challenge[] = [];

  constructor(private challengeService: ChallengeService) {
  }

  ngOnInit(): void {
    this.challengeService.getMyChallenges(parseInt(sessionStorage.getItem('idUsuario')!)).subscribe(response=>{
      this.challenges = response;
    })
  }
}
