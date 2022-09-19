import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { SeccionForo } from '../models/seccionForo';

@Injectable({
    providedIn: 'root'
  })
  export class SeccionForoService {
  
    url:string = `${environment.urlBack}/seccionForo`;
  
    private httpHeaders = new HttpHeaders({'Content-Type': 'application/json', 'Access-Control-Allow-Origin':'*'});
  
    constructor(private http:HttpClient) { }
  
    getAllSeccion(): Observable<SeccionForo[]> {
      return this.http.get<SeccionForo[]>(this.url  +'/allSeccion', {headers:this.httpHeaders});
    }
  
  }