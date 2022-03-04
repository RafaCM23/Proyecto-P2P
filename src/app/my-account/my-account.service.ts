import { HttpClient, HttpHeaders } from '@angular/common/http';
import { tokenize } from '@angular/compiler/src/ml_parser/lexer';
import { Injectable } from '@angular/core';
import { anuncio, usuario } from '../anuncios/anuncio.interface';
import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class MyAccountService {

  constructor(private http: HttpClient,private authService: AuthService) { }



  getDatos(){
    const cabecera = new HttpHeaders()
    .set('Authorization',`Bearer ${this.authService.getToken()}` || '');
     
      
    const url="http://localhost:8080/misdatos"
    return this.http.get<usuario>(url,{headers:cabecera});
  }

  putDatos(usuario:usuario){
    const cabecera = new HttpHeaders()
    .set('Authorization',`Bearer ${this.authService.getToken()}` || '');
    const body=usuario;
    const url='http://localhost:8080/misdatos'
    return this.http.put(url,body,{headers:cabecera});
  }


  getAnuncios(id:number){
    const url='http://localhost:8080/misanuncios?autorid='+id
    return this.http.get<anuncio[]>(url);
  }

  
}
