import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Comentario } from '../models/comentario';
import { CreateComentarioPubli } from '../models/create-comentario-publi';
import { CreateComentarioReto } from '../models/create-comentario-reto';

@Injectable({
  providedIn: 'root'
})
export class ComentariosService {

  url:string="http://localhost:8080/api/comentario";

  private httpHeaders = new HttpHeaders({'Content-Type': 'application/json', 'Access-Control-Allow-Origin':'*'});

  constructor(private http:HttpClient) { }

  createCommentReto(challenge: CreateComentarioReto):Observable<Comentario>{
    
    return this.http.post<Comentario>(this.url,challenge,{headers:this.httpHeaders});

  }

  createCommentPubli(challenge: CreateComentarioPubli):Observable<Comentario>{
    
    return this.http.post<Comentario>(this.url,challenge,{headers:this.httpHeaders});

  }

  getCommentsPubli(idPublicacion:number):Observable<Comentario[]>{

    let params = new HttpParams();
    params = params.append('idPublicacion', idPublicacion);
    return this.http.get<Comentario[]>(this.url+'/allByPublish', {headers:this.httpHeaders, params:params});

  }

  getCommentsReto(idReto:number):Observable<Comentario[]>{

    let params = new HttpParams();
    params = params.append('idReto', idReto);
    return this.http.get<Comentario[]>(this.url+'/allByPublish', {headers:this.httpHeaders, params:params});

  }
}
