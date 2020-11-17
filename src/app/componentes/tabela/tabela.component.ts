import { Component, OnInit } from '@angular/core';
import { ClassificacaoMacro, Tabela } from 'src/app/models-campeonatos/classificacao/classificacao';
import { CampeonatosService } from 'src/app/services/campeonatos.service';

@Component({
  selector: 'app-tabela',
  templateUrl: './tabela.component.html',
  styleUrls: ['./tabela.component.css']
})
export class TabelaComponent implements OnInit {

  // variaveis 
  info: Tabela


  constructor(private campeonatoservice: CampeonatosService) { }

  ngOnInit(): void {
    this.getClassificacao()
  }


  getClassificacao() {
    this.campeonatoservice.getClassificacao().subscribe((classificacao: ClassificacaoMacro) => {
      this.info = classificacao.standings[0].table
      console.log(this.info)
    })
  }

}
