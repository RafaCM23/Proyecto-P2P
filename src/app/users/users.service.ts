import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { CookieService } from "ngx-cookie-service";
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient, private cookies: CookieService) { }

  baseurl="http://localhost:8080/";

  compruebaLogin(email:string, password:string):Observable<any>{
    
    const url = this.baseurl+'auth/login';
    const body = {
      'email': email,
      'password': password 
    }
    const cabecera = new HttpHeaders({'Content-Type':'application/json'});
    return this.http.post(url, body, {headers:cabecera});
  }

  register(email:string, password:string,nombre:string,usuario:string): Observable<any> {
    const url = this.baseurl+'auth/register';
    const body = {
      'name': nombre,
      'nickname': usuario,
      'email': email,
      'password': password 
    }
    console.log(body);
    const cabecera = new HttpHeaders({'Content-Type':'application/json'});
    return this.http.post(url, body, {headers:cabecera});
  }


}
