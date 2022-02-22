import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { CookieService } from "ngx-cookie-service";
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient, private cookies: CookieService) { }


  compruebaLogin(email:string, password:string):Observable<any>{
    
    const url = 'http://localhost:8080/auth/login';
    const body = {
      'email': email,
      'password': password 
    }
    const cabecera = new HttpHeaders({'Content-Type':'application/json'});
    return this.http.post(url, body, {headers:cabecera});
  }

  register(email:string, password:string,nombre:string,usuario:string): Observable<any> {
    const url = 'http://localhost:8080/auth/register';
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

  setToken(token: string) {
    this.cookies.set("token", token);
  }
  getToken() {
    return this.cookies.get("token");
  }
  delToken(){
    this.cookies.deleteAll("token");
  }


}
