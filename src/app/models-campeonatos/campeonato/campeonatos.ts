import { EdicaoAtual } from './edicao-atual';

export interface Campeonatos  {
    campeaonato_id :number,
    nome: string,
    slug: string,
    nome_popular: string,
    edicao_atual: EdicaoAtual,
    status: string, 
    tipo: string, 
    _link: string    
}

export interface Campeonatos2  {
    id:number,
    area: area[], 
    name: string,
    code: string,
    emblemUrl: string,
    plan: string,
    currentSeason: currentSeason, //":{"id": 589, "startDate": "2020-08-09", "endDate": "2021-02-24", "currentMatchday": 19,…},
    seasons: currentSeason[], //":[{"id": 589, "startDate": "2020-08-09", "endDate": "2021-02-24", "currentMatchday": 19,…],
    lastUpdated: string
}

export interface area {
    id: number,
    name: string
}

export interface currentSeason {
    id:number,
    startDate: string,
    endDate: string,
    currentMatchday: number,
    winner: string
}


