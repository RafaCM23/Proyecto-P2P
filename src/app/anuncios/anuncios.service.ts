import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { anuncio } from './anuncio.interface';

@Injectable({
  providedIn: 'root'
})
export class AnunciosService {

  constructor(private http: HttpClient, private authService: AuthService) { }

  getAnuncios(){
    const url="http://localhost:8080/anuncios"

   return this.http.get<anuncio[]>(url);
  }

  getAnuncio(id:number){
    const cabecera = new HttpHeaders()
    .set('Authorization',`Bearer ${this.authService.getToken()}` || '');
    const url="http://localhost:8080/mianuncio?id="+id;//id pasada por url
    return this.http.get<anuncio>(url,{headers:cabecera});

  }
  putAnuncio(anuncio:anuncio){
    const cabecera = new HttpHeaders()
     .set('Authorization',`Bearer ${this.authService.getToken()}` || '');
     const url="http://localhost:8080/misanuncios"
     const body = anuncio;

     return this.http.put(url,body,{headers:cabecera});
   
  }


  postAnuncio(anuncio:anuncio){
    const cabecera = new HttpHeaders()
    .set('Authorization',`Bearer ${this.authService.getToken()}` || '');
    const url="http://localhost:8080/anuncios"
    const body = anuncio;

    return this.http.post(url,body,{headers:cabecera});
  }
}
