import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { EntregaReto } from '../models/entrega';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class EntregasService {

  url:string = `${environment.urlBack}/detalleInscripcion`;

  private httpHeaders = new HttpHeaders({'Content-Type': 'application/json', 'Access-Control-Allow-Origin':'*'});

  constructor(private http:HttpClient) { }

  getEntregasById(idReto: number):Observable<EntregaReto[]>{
    
    let params = new HttpParams();
    params = params.append('idReto', idReto);

    return this.http.get<EntregaReto[]>(this.url+'/allEntregasByReto',{headers:this.httpHeaders, params:params});

  }

}
