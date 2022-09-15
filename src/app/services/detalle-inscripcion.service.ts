import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CreateEntregaReto } from '../models/create-entrega';
import { EntregaReto } from '../models/entrega';

@Injectable({
  providedIn: 'root'
})
export class DetalleInscripcionService {

  url:string="http://localhost:8080/api/detalleInscripcion";

  private httpHeaders = new HttpHeaders({'Content-Type': 'application/json', 'Access-Control-Allow-Origin':'*'});

  constructor(private http:HttpClient) { }

  createInscripcion(entrega: CreateEntregaReto):Observable<EntregaReto>{
    return this.http.post<EntregaReto>(this.url,entrega,{headers:this.httpHeaders});
  }

  checkEntrega(idInscripcion:number):Observable<EntregaReto>{
    let params = new HttpParams();
    params = params.append('idInscripcion', idInscripcion);
    return this.http.get<EntregaReto>(this.url+"/entrega",{headers:this.httpHeaders, params:params});
  }

}
