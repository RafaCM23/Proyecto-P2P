import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { anuncio } from './anuncio.interface';

@Injectable({
  providedIn: 'root'
})
export class AnunciosService {

  constructor(private http: HttpClient) { }

  getAnuncios(){
    const url="http://localhost:8080/anuncios"

   return this.http.get<anuncio[]>(url);
  }

  postAnuncio(anuncio:anuncio){
    const url="http://localhost:8080/anuncios"
    const body = anuncio;

    return this.http.post(url,body);
  }
}
