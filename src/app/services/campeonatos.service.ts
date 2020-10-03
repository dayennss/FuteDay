import { HttpClient, HttpHeaders,HttpErrorResponse } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { Campeonatos } from '../models-campeonatos/campeonatos';
import { retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CampeonatosService implements OnInit {


  key = 'test_72d6c1f813c4370bf736940c968170'
  url = 'https://api.api-futebol.com.br/v1/campeonatos'

  constructor(private httpClient:HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({'Authorization': this.key})
  }
  
  getCampeonato(): Observable<Campeonatos[]> {
    return this.httpClient.get<Campeonatos[]>(this.url, this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError))
  }

   // Manipulação de erros
   handleError(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Erro ocorreu no lado do client
      errorMessage = error.error.message;
    } else {
      // Erro ocorreu no lado do servidor
      errorMessage = `Código do erro: ${error.status}, ` + `menssagem: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  };

  ngOnInit() {
    this.getCampeonatos();
  }

  getCampeonatos() {

  }

}
