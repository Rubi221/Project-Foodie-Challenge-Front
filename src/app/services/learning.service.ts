import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Receta } from '../models/receta';

@Injectable({
  providedIn: 'root'
})
export class LearningService {

  url:string="http://localhost:8080/api/receta";

  private httpHeaders = new HttpHeaders({'Content-Type': 'application/json', 'Access-Control-Allow-Origin':'*'});

  constructor(private http:HttpClient) { }

  getAll(): Observable<Receta[]> {
    return this.http.get<Receta[]>(this.url+'/all', {headers:this.httpHeaders});
  }

}
