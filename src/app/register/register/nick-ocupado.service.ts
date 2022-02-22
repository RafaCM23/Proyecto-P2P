import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AbstractControl, AsyncValidator, ValidationErrors } from '@angular/forms';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NickOcupadoService implements AsyncValidator{

  constructor(private httpClient: HttpClient) { }

  validate(control:AbstractControl): Observable<ValidationErrors | null>{

    const nickname = control.value
    console.log(nickname);
    const body={
      "nickname":nickname
    }
    const cabecera = new HttpHeaders({'Content-Type':'application/json'});
    return this.httpClient.post<any[]>('http://localhost:8080/nickOcupado',body,{headers:cabecera})
    .pipe(
      //devuelve 404 si no lo encuentra y 200 si lo encuentra
      map( resp => {
        return ( resp!=null ) 
            ? null
            : { nickOcupado: true }
      })
    );
  }
}
