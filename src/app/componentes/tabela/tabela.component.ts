import { ParseError } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ClassificacaoMacro, Tabela } from 'src/app/models-campeonatos/classificacao/classificacao';
import { InfosTabela } from 'src/app/models-campeonatos/infos/info-classificacao';
import { CampeonatosService } from 'src/app/services/campeonatos.service';

@Component({
  selector: 'app-tabela',
  templateUrl: './tabela.component.html',
  styleUrls: ['./tabela.component.css']
})
export class TabelaComponent implements OnInit {

  // variaveis 
  info: Tabela[]
  informacoesTabela: InfosTabela[]



  constructor(private campeonatoservice: CampeonatosService) { }

  ngOnInit(): void {
    this.getClassificacao()
  }


  getClassificacao() {
    this.campeonatoservice.getClassificacao().subscribe((classificacao: ClassificacaoMacro) => {
      this.info = classificacao.standings[0].table

      for (let i = 0; i < this.info.length; i++) {
        this.info[i].form = this.ConfiguracaoJogos(this.info[i].form)
      }

    });

  }

  ConfiguracaoJogos(jogos: string): string {

    const objPartidas = jogos.split(',')

    for (let i = 0; i<= objPartidas.length; i++){
      if (objPartidas[i] === "W") {
        objPartidas[i] = "<img src='assets/check.svg'> &nbsp"
      }
      if (objPartidas[i] === "L") {
        objPartidas[i] = "<img src='assets/reject.svg'> &nbsp"  
      }
      if (objPartidas[i] === "D") {
        objPartidas[i] = "<img src='assets/empate.svg'> &nbsp"  
      }
    }

    // objPartidas.forEach(element => {
    //   if (element == "W") {
    //     element = "<img src='assets/check.svg'>"
    //   }
    // });
    // debugger 
    return objPartidas.toString().replaceAll(',','');
  }

}
