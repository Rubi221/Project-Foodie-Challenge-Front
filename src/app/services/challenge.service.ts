import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Challenge } from '../models/challenge';
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

}
