import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { EntregaReto } from '../models/entrega';

@Injectable({
  providedIn: 'root'
})
export class EntregasService {


  url:string="http://localhost:8080/api/detalleInscripcion";

  private httpHeaders = new HttpHeaders({'Content-Type': 'application/json', 'Access-Control-Allow-Origin':'*'});

  constructor(private http:HttpClient) { }

  getEntregasById(idReto: number):Observable<EntregaReto[]>{
    
    let params = new HttpParams();
    params = params.append('idReto', idReto);

    return this.http.get<EntregaReto[]>(this.url+'/allEntregasByReto',{headers:this.httpHeaders, params:params});

  }

}
