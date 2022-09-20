import { Component, OnInit } from '@angular/core';
import { Challenge } from 'src/app/models/challenge';
import { ChallengeService } from 'src/app/services/challenge.service';

@Component({
  selector: 'app-challenges',
  templateUrl: './challenges.component.html',
  styleUrls: ['./challenges.component.css'],
})
export class ChallengesComponent implements OnInit {
  
  showFiller = false;
  page = 1;
  count = 0;
  tableSize = 6;
  tableSizes = [3, 6, 9, 12];

  public challenges: Challenge[] = [];
  public challengesActual: Challenge[] = [];

  constructor(private challengeService: ChallengeService) {
  }

  ngOnInit(): void {
    this.challengeService.getOpenChallenges().subscribe(response=>{
      this.challenges = response;
      this.challengesActual = this.challenges
    })
  }

  onTableDataChange(event: number) {
    this.page = event;
  }

  onTableSizeChange(event: { target: { value: number } }): void {
    this.tableSize = event.target.value;
    this.page = 1;
  }

  checkUser(): boolean {
    if (sessionStorage.getItem('tipo') === '1') {
      return true;
    } else {
      return false;
    }
  }
  
  
  muestraPostres(){
    this.challengesActual = []
    this.challenges.forEach(element => {
      if(element.idCategoria===2){
        this.challengesActual.push(element)
      }
      
    });
  }

  muestraTradicional(){
    this.challengesActual = []
    this.challenges.forEach(element => {
      if(element.idCategoria===1){
        this.challengesActual.push(element)
      }
      
    });
  }

  muestraInternacional(){
    this.challengesActual = []
    this.challenges.forEach(element => {
      if(element.idCategoria===3){
        this.challengesActual.push(element)
      }
      
    });
  }

  muestraBrunch(){
    this.challengesActual = []
    this.challenges.forEach(element => {
      if(element.idCategoria===4){
        this.challengesActual.push(element)
      }
      
    });
  }


}
