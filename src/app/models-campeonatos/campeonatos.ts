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
