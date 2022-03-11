import { HttpClient, HttpHeaders } from '@angular/common/http';
import { tokenize } from '@angular/compiler/src/ml_parser/lexer';
import { Injectable } from '@angular/core';
import { anuncio, usuario } from '../anuncios/anuncio.interface';
import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class MyAccountService {

  baseurl="http://localhost:8080/";
  
  constructor(private http: HttpClient,private authService: AuthService) { }


  //recibe datos a partir del token
  getDatos(){
    const cabecera = new HttpHeaders()
    .set('Authorization',`Bearer ${this.authService.getToken()}` || '');
     
      
    const url=this.baseurl+'misdatos'
    return this.http.get<usuario>(url,{headers:cabecera});
  }

  //edita los datos
  putDatos(usuario:usuario){
    const cabecera = new HttpHeaders()
    .set('Authorization',`Bearer ${this.authService.getToken()}` || '');
    const body=usuario;
    const url=this.baseurl+'misdatos'
    return this.http.put(url,body,{headers:cabecera});
  }

  //Get mis anuncios
  getAnuncios(){
    const cabecera = new HttpHeaders()
    .set('Authorization',`Bearer ${this.authService.getToken()}` || '');
    const url=this.baseurl+'misanuncios'
    return this.http.get<anuncio[]>(url,{headers:cabecera});
  }

  
}
