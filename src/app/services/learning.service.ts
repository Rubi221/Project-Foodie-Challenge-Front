import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Receta } from '../models/receta';
import { environment } from 'src/environments/environment.prod';
import { CreateReceta } from '../models/create-receta';

@Injectable({
  providedIn: 'root'
})
export class LearningService {

  url:string = `${environment.urlBack}/receta`;

  private httpHeaders = new HttpHeaders({'Content-Type': 'application/json', 'Access-Control-Allow-Origin':'*'});

  constructor(private http:HttpClient) { }

  getAll(): Observable<Receta[]> {
    return this.http.get<Receta[]>(this.url +'/all', {headers:this.httpHeaders});
  }

  create(receta: CreateReceta): Observable<Receta>{
    return this.http.post<Receta>(this.url,receta,{headers:this.httpHeaders})
  }

}
