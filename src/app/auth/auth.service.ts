import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CookieService } from "ngx-cookie-service";
import {JwtHelperService} from "@auth0/angular-jwt"
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private cookies:CookieService, private http:HttpClient) { }

  jwtValidator= new JwtHelperService();
  token:string='';
  //comprueba validez del token
  compruebaToken(){
    let token=this.token;
    if(token==''){token=this.getToken()}
    const expirado= this.jwtValidator.isTokenExpired(token);
    return !expirado;
   
  }

  //recupera el token de las cookies
  getToken(){
    const  token=this.cookies.get("tokenP2P");
    return token

     
  }
  //guarda el token en las cookies
  setToken(token:string){
    this.cookies.set("tokenP2P",token);
    this.token=token;

  }
  //elimina el token = logout
  delToken(){
    this.cookies.delete("tokenP2P");
    if(this.getToken!=null){
      this.cookies.delete("tokenP2P");
    }
  }


}
