import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AbstractControl, AsyncValidator, ValidationErrors } from '@angular/forms';
import { catchError, map } from 'rxjs/operators';
import {Observable, of} from 'rxjs'


@Injectable({
  providedIn: 'root'
})
export class EmailvalidatorService implements AsyncValidator{

  constructor(private httpClient: HttpClient) { }

  validate(control:AbstractControl): Observable<ValidationErrors | null>{
    const url= 'http://localhost:8080/correoOcupado';
    const email = control.value
    console.log(email);
    const body={
      "email":email
    }
    const cabecera = new HttpHeaders({'Content-Type':'application/json'});
    return this.httpClient.post(url,body,{headers:cabecera})
    .pipe(
      //devuelve 404 si no lo encuentra y 200 si lo encuentra
      map( resp => {
        return  { emailOcupado: true }
      }),
      catchError(() => of(null))
    );
     
  }
}
