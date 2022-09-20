import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { EntregaReto } from '../models/entrega';
import { environment } from 'src/environments/environment.prod';
import { CalificaEntrega } from '../models/califica-entrega';

@Injectable({
  providedIn: 'root'
})
export class EntregasService {

  url:string = `${environment.urlBack}/detalleInscripcion`;

  url2:string = `${environment.urlBack}/puntajeIns`;

  private httpHeaders = new HttpHeaders({'Content-Type': 'application/json', 'Access-Control-Allow-Origin':'*'});

  constructor(private http:HttpClient) { }

  getEntregasById(idReto: number):Observable<EntregaReto[]>{
    
    let params = new HttpParams();
    params = params.append('idReto', idReto);

    return this.http.get<EntregaReto[]>(this.url+'/allEntregasByReto',{headers:this.httpHeaders, params:params});

  }

  calificaEntrega(calificacion:CalificaEntrega):Observable<any>{
    return this.http.post<any>(this.url2,calificacion,{headers:this.httpHeaders});

  }

  

  validaCalifica(idInsc: number, idUsuario:number):Observable<boolean>{
    
    let params = new HttpParams();
    params = params.append('idUsuario', idUsuario);
    params = params.append('idDetalle', idInsc);

    return this.http.get<boolean>(this.url2+'/validateCalifica',{headers:this.httpHeaders, params:params});

  }

}
