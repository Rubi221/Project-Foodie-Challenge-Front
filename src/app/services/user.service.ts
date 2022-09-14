import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user';
import { UserCredentials } from '../models/user-credentials';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private user: User = new User();
  
  url:string="http://localhost:8080/api/usuario";

  constructor(private http: HttpClient) { }

  private httpHeaders = new HttpHeaders({'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' });

  validateUser(credentials: User):Observable<User>{
    return this.http.post<User>(this.url + "/validateLogin",credentials,{headers:this.httpHeaders});

  }
}
