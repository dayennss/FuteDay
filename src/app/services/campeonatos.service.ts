import { HttpClient, HttpHeaders,HttpErrorResponse } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { Campeonatos } from '../models-campeonatos/campeonato/campeonatos';
import { Campeonatos2 } from '../models-campeonatos/campeonato/campeonatos';
import { retry, catchError } from 'rxjs/operators';
import { Artilharia, TeamExternal } from '../models-campeonatos/artilharia/artilharia';
import { InformacaoTeamArtilharia } from '../models-campeonatos/infos/info-time-artilharia';

@Injectable({
  providedIn: 'root'
})
export class CampeonatosService implements OnInit {

  Acessos = {
    endpoint: 'https://api.football-data.org/v2',
    campeonato: '/competitions',
    artilharia:'/scorers',
    times: '/teams',
    idCampeonato: '/2013',
    token: '8bf4feb4dcaf44fe83bc85e01bb5da31'
  }
  
  constructor(private httpClient:HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({'X-Auth-Token': this.Acessos.token})
  }

  getCampeonatoById (idCampeonato:number): Observable<Campeonatos2> {
    return this.httpClient.get<Campeonatos2>(this.Acessos.endpoint + "/" + idCampeonato, this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError))    
  }

  getArtilharia():Observable<Artilharia>{
    return this.httpClient.get<Artilharia>(this.Acessos.endpoint +this.Acessos.campeonato + this.Acessos.idCampeonato + this.Acessos.artilharia, this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError))
  }

  getThumbTime(TimeID: number) : Observable<TeamExternal> {
    return this.httpClient.get<TeamExternal>(this.Acessos.endpoint+ this.Acessos.times + "/" + TimeID, this.httpOptions)
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
