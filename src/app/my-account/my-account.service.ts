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
    const token=this.authService.getToken();
    const body=token;
    const url='http://localhost:8080/usuario'
    const usuario= this.http.post<usuario>(url,body);
    //enviar peticion a servidor para coger datos por email
    return usuario;
  }

  // getDatos(){
  //   const cabecera = new HttpHeaders()
  //   .set('Authorization',`Bearer ${this.authService.getToken()}` || '');
  //     console.log(cabecera);
      
  //   const url="http://localhost:8080/misdatos"
  //   return this.http.get<usuario>(url,{headers:cabecera});
  // }

  putDatos(usuario:usuario){
    const token=this.authService.getToken();
    usuario.token=token;
    const body=usuario;
    const url='http://localhost:8080/misdatos'
    return this.http.put(url,body);
  }
  
  // getDatos(){
  //   const headers = new HttpHeaders()
  //   .set('Authorization', `Bearer ${this.authService.getToken()}` || '' )
  //   console.log(headers);
  //   const url='http://localhost:8080/usuario'
  //   return this.http.get<usuario>(url,{headers});
  // }


  getAnuncios(id:number){
    const url='http://localhost:8080/misanuncios?autorid='+id
    return this.http.get<anuncio[]>(url);
  }
}
