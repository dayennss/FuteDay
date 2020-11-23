import { Tabela } from '../classificacao/classificacao';

export interface  InformacaoClassificacao {
    tabela: Tabela
}

export interface InfosTabela {
    posicaoTime: number,
    nomeTime: string,
    qtdJogos: number,
    qtdVitorias: number,
    qtdDerrotas: number
}