import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RegisterData } from '../models/register-data';
import { User } from '../models/user';
import { UserCredentials } from '../models/user-credentials';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private user: User = new User();
  
  url:string = `${environment.urlBack}/usuario`;

  constructor(private http: HttpClient) { }

  private httpHeaders = new HttpHeaders({'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' });

  validateUser(credentials: User):Observable<User>{
    return this.http.post<User>(this.url + "/validateLogin",credentials,{headers:this.httpHeaders});
  }

  createUser(data: RegisterData):Observable<any>{
    return this.http.post<any>(this.url,data,{headers:this.httpHeaders});
  }

  getUser(idUsuario: number):Observable<User>{
    let params = new HttpParams();
    params = params.append('idUsuario', idUsuario);
    return this.http.get<any>(this.url + "/findById",{headers:this.httpHeaders, params:params});
  }

  updateUser():Observable<any>{
    return this.http.get<any>(this.url + "/findById",{headers:this.httpHeaders});

  }
   
}
