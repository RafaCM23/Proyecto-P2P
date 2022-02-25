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
      return true;
    }

    isTokenValid() {
      //este metodo enviar el token guardado en cookies al servidor de la API, este comprueba si el token sigue siendo valido y responde
    }

  
    canActivateChild(route: ActivatedRouteSnapshot, 

        state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

        return this.canActivate(route, state);

}
}