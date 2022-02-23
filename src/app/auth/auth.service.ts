import { Injectable } from '@angular/core';
import { CookieService } from "ngx-cookie-service";
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private cookies:CookieService) { }


  getToken(){
    return this.cookies.get("token");
  }

  setToken(token:string){
    this.cookies.set("token",token);
  }
  
  delToken(){
    this.cookies.delete("token");
  }


}
