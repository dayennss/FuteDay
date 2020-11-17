import { TeamExternal } from '../artilharia/artilharia';
import { area } from '../campeonato/campeonatos';

export interface ClassificacaoMacro {
    filter: object,
    competition: Competicao,
    season: Sessao,
    standings: Classificacao
    
}

export interface Classificacao {
    stage: string, 
    type: string, 
    group: string,
    table: Tabela[]
}

export interface Tabela {
    position?:number, 
    team?: TeamExternal
    playedGames?: number, 
    form?: string, 
    won?: number, 
    draw?: number, 
    lost?:number, 
    points?: number, 
    goalsFor?: number, 
    goalsAgainst?: number, 
    goalDifference?:number
}


export interface Competicao {
    area: area,
    name:string, 
    code: string,
    plan: string,
    lastUpdated: string, 
}

export interface Sessao {
    id: number,
    startDate: string, 
    endDate: string,
    currentMatchday: number,
    winner: string
}
