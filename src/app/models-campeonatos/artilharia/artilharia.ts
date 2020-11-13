import { area } from '../campeonato/campeonatos';
import { Jogador } from '../campeonato/jogadores';

export interface Artilharia {
    player: Player,
    team: Team, 
    numberOfGoals :number
}
export interface Player {
    id: number,
    name: string,
    firstName: string,
    lastName: string,
    dateOfBirth: string,
    countryOfBirth: string,
    nationality: string,
    position: string, 
    shirtNumber: string, 
    lastUpdated: string
}

export interface Team {
    id:number,
    name: string
}

export interface TeamExternal {
    id: number,
    area: area,
    activeCompetitions: CompeticoesAtivas,
    name: string,
    shortName: string,
    tla: string,
    crestUrl: string, 
    address: string, 
    phone: string, 
    email:string, 
    clubColers:string,
    venue: string,
    squad: Jogador

}

export interface CompeticoesAtivas {
    id: number, 
    area : area,
    name: string, 
    code :string, 
    plan: string, 
    lastUpdated:string
}
