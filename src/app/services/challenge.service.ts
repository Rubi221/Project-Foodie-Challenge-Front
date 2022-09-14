import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Challenge } from '../models/challenge';
import { ChallengeInscrito } from '../models/challenge-inscrito';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class ChallengeService {

  url:string="http://localhost:8080/api/reto";

  private httpHeaders = new HttpHeaders({'Content-Type': 'application/json', 'Access-Control-Allow-Origin':'*'});

  constructor(private http:HttpClient) { }

  getOpenChallenges(): Observable<Challenge[]> {
    return this.http.get<Challenge[]>(this.url+'/abiertos', {headers:this.httpHeaders});
  }

  getChallengeById(idReto: number, idUsuario: number):Observable<ChallengeInscrito>{
    
    let params = new HttpParams();
    params = params.append('idReto', idReto);
    params = params.append('idUsuario', idUsuario);

    return this.http.get<ChallengeInscrito>(this.url+'/inscrito',{headers:this.httpHeaders, params:params});

  }

}
