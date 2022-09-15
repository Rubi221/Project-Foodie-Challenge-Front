import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Publicacion } from '../models/publicacion';
import { Receta } from '../models/receta';

@Injectable({
  providedIn: 'root'
})
export class PublicacionService {

  url:string="http://localhost:8080/api/publicacion/all";

  private httpHeaders = new HttpHeaders({'Content-Type': 'application/json', 'Access-Control-Allow-Origin':'*'});

  constructor(private http:HttpClient) { }

  getOpenChallenges(idSeccion:number): Observable<Publicacion[]> {
    let params = new HttpParams();
    params = params.append('idSeccion', idSeccion);
    return this.http.get<Publicacion[]>(this.url, {headers:this.httpHeaders, params:params});
  }

}
