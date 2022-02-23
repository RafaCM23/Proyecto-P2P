import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { AuthService } from "./auth/auth.service";
 
@Injectable({
    providedIn: 'root',
  })
  export class AuthGuard implements CanActivate, CanActivateChild {
      
    constructor(private authService: AuthService, private router: Router) {}

    canActivate(route: ActivatedRouteSnapshot,state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean | any {
    if(this.authService.getToken()!=null){
      return true;
    }
    else{
      return false;}
    }

  
    canActivateChild(route: ActivatedRouteSnapshot, 

        state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

        return this.canActivate(route, state);

}
}