import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { anuncio, usuario } from '../anuncios/anuncio.interface';

@Injectable({
  providedIn: 'root'
})
export class MyAccountService {

  constructor(private http: HttpClient) { }

  
  getDatos(id:number){
    const url='http://localhost:8080/misdatos?id='+id
    return this.http.get<usuario>(url);
  }

  putDatos(user:usuario){
    const url='http://localhost:8080/misdatos'
    const body=user;
    return this.http.put(url,body);
  }

  getAnuncios(id:number){
    const url='http://localhost:8080/misanuncios?autorid='+id
    return this.http.get<anuncio[]>(url);
  }
}
