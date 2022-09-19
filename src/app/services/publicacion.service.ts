import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Publicacion } from '../models/publicacion';
import { Receta } from '../models/receta';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class PublicacionService {

  url:string = `${environment.urlBack}/publicacion`;

  private httpHeaders = new HttpHeaders({'Content-Type': 'application/json', 'Access-Control-Allow-Origin':'*'});

  constructor(private http:HttpClient) { }

  getAllPublicacion(idSeccion:number): Observable<Publicacion[]> {
    let params = new HttpParams();
    params = params.append('idSeccion', idSeccion);
    return this.http.get<Publicacion[]>(this.url  +'/all', {headers:this.httpHeaders, params:params});
  }

}
