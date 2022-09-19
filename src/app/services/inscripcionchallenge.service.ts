import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { InscripcionChallenge } from '../models/inscripcion-challenge';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class InscripcionchallengeService {

  url:string = `${environment.urlBack}/inscripcionReto`;

  private httpHeaders = new HttpHeaders({'Content-Type': 'application/json', 'Access-Control-Allow-Origin':'*'});

  constructor(private http:HttpClient) { }

  createInscripcion(idReto: number, idUsuario: number):Observable<InscripcionChallenge>{
    
    let params = new HttpParams();
    params = params.append('idReto', idReto);
    params = params.append('idUsuario', idUsuario);

    return this.http.get<InscripcionChallenge>(this.url,{headers:this.httpHeaders, params:params});

  }


}
