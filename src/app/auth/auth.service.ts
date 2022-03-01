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
  
  compruebaToken(){
    let token=this.token;
    if(token==''){token=this.getToken()}
    const expirado= this.jwtValidator.isTokenExpired(token);
    return !expirado;
   
  }

  
  getToken(){
    const  token=this.cookies.get("tokenP2P");
    return token

     
  }

  setToken(token:string){
    this.cookies.set("tokenP2P",token);
    this.token=token;

  }
  
  delToken(){
    this.cookies.delete("tokenP2P");
  }


}
