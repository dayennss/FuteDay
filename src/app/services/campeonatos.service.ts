import { HttpClient, HttpHeaders,HttpErrorResponse } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { Campeonatos } from '../models-campeonatos/campeonatos';
import { Campeonatos2 } from '../models-campeonatos/campeonatos';
import { retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CampeonatosService implements OnInit {


  //  antigo  endpoint
  // key = 'Bearer test_72d6c1f813c4370bf736940c968170'
  // url = 'https://api.api-futebol.com.br/v1/campeonatos'

  Acessos = {
    endpoint: 'https://api.football-data.org/v2/competitions/2013',
    token: '8bf4feb4dcaf44fe83bc85e01bb5da31'
  }

  
  constructor(private httpClient:HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({'X-Auth-Token': this.Acessos.token})
  }
  
  getAllCampeonatos (): Observable<Campeonatos2> {
    return this.httpClient.get<Campeonatos2>(this.Acessos.endpoint, this.httpOptions)
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
    
  }

}
