import { Component, OnInit } from '@angular/core';
import { ClassificacaoMacro, Legenda, Tabela } from 'src/app/models-campeonatos/classificacao/classificacao';
import { CampeonatosService } from 'src/app/services/campeonatos.service';

@Component({
  selector: 'app-tabela',
  templateUrl: './tabela.component.html',
  styleUrls: ['./tabela.component.css']
})
export class TabelaComponent implements OnInit {

  // variaveis 
  info: Tabela[]
  
  
  legenda: Legenda[] = [
  {
    cor: "blue",
    descricao: "Fase de grupos - Libertadores"
  },
  {
    cor: "orange",
    descricao: "Qualificatórias - Libertadores"
  },
  {
    cor: "green",
    descricao: "Fase de grupos - Sul-Americana"
  },
  {
    cor :"red",
    descricao : "Rebaixamento"
  }
]

  constructor(private campeonatoservice: CampeonatosService) { }

  ngOnInit(): void {
    if (!window.localStorage.info) {
      this.getClassificacao();
    } else {
      this.info = JSON.parse(window.localStorage.info)
    }

    


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
        objPartidas[i] = "<img src='assets/check.svg'> &nbsp";
      }
      if (objPartidas[i] === "L") {
        objPartidas[i] = "<img src='assets/reject.svg'> &nbsp";
      }
      if (objPartidas[i] === "D") {
        objPartidas[i] = "<img src='assets/empate.svg'> &nbsp";
      }
    }

    setTimeout(() => {
      window.localStorage.setItem('info', JSON.stringify(this.info))
    }, 3000);

    return objPartidas.join("")

   

  }

  

}
