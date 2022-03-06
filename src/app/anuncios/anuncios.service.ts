import { HttpClient, HttpHeaders } from '@angular/common/http';
import { identifierName } from '@angular/compiler/src/parse_util';
import { Injectable } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { anuncio, comentario, credenciales } from './anuncio.interface';

@Injectable({
  providedIn: 'root'
})
export class AnunciosService {

  constructor(private http: HttpClient, private authService: AuthService) { }

  //getAnuncios
  getAnuncios(){
    const url="http://localhost:8080/anuncios"

   return this.http.get<anuncio[]>(url);
  }
  //get anuncio concreto
  getAnuncio(id:number){
    const url="http://localhost:8080/anuncio?id="+id
    return this.http.get<anuncio>(url);

  }
  //editar anuncio
  putAnuncio(anuncio:anuncio){
    const cabecera = new HttpHeaders()
     .set('Authorization',`Bearer ${this.authService.getToken()}` || '');
     const url="http://localhost:8080/misanuncios"
     const body = anuncio;

     return this.http.put(url,body,{headers:cabecera});
   
  }

  //crear anuncio
  postAnuncio(anuncio:anuncio){
    const cabecera = new HttpHeaders()
    .set('Authorization',`Bearer ${this.authService.getToken()}` || '');
    const url="http://localhost:8080/anuncios"
    const body = anuncio;

    return this.http.post(url,body,{headers:cabecera});
  }
  //borrar anuncio
  deleteAnuncio(id:number){
    const cabecera = new HttpHeaders()
    .set('Authorization',`Bearer ${this.authService.getToken()}` || '');
    const url="http://localhost:8080/misanuncios?id="+id
   
    return this.http.delete(url,{headers:cabecera});
  }
  //guarda comentario
  guardaComentario(idanuncio:number,comentario:comentario){
    const cabecera = new HttpHeaders()
    .set('Authorization',`Bearer ${this.authService.getToken()}` || '');
    const url=`http://localhost:8080/anuncios/${idanuncio}/comentarios`;
    const body=comentario;
    return this.http.post(url,body,{headers:cabecera});
  }
  //saca el email del autor del anuncio para mostrar contacto
  whoOwns(id:number){
    const cabecera = new HttpHeaders()
    .set('Authorization',`Bearer ${this.authService.getToken()}` || '');
    const url="http://localhost:8080/dequienes?id="+id;

    return this.http.get<credenciales>(url,{headers:cabecera});
  }
}
