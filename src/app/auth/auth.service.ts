import { Injectable } from '@angular/core';
import { CookieService } from "ngx-cookie-service";
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private cookies:CookieService) { }


  getToken(){
    return this.cookies.get("tokenP2P");
  }

  setToken(token:string){
    this.cookies.set("tokenP2P",token);
  }
  
  delToken(){
    this.cookies.delete("tokenP2P");
  }


}
