import { Component, OnInit } from '@angular/core';
import { Artilharia, TeamExternal } from 'src/app/models-campeonatos/artilharia/artilharia';
import { InformacaoTeamArtilharia } from 'src/app/models-campeonatos/infos/info-time-artilharia';
import { CampeonatosService } from 'src/app/services/campeonatos.service';

@Component({
  selector: 'app-artilharia',
  templateUrl: './artilharia.component.html',
  styleUrls: ['./artilharia.component.css']
})
export class ArtilhariaComponent implements OnInit {

  //variaveis 
  artilharia: Artilharia
  infoTeamArtilharia: InformacaoTeamArtilharia[] = []

  constructor(private campeonatosService: CampeonatosService) { }

  ngOnInit(): void {

    if (!window.localStorage.infoTeamArtilharia) {
      this.getArtilharia();
    } else {
      this.infoTeamArtilharia = JSON.parse(window.localStorage.infoTeamArtilharia)
      console.log(this.infoTeamArtilharia)
    }
  }

  getArtilharia(): void {
    this.campeonatosService.getArtilharia().subscribe((artilharia: Artilharia) => {
      this.artilharia = artilharia["scorers"];

      // for para pegar os ids dos times para fazer o post para retonar as imagens.
      artilharia["scorers"].forEach(element => {
        this.infoTeamArtilharia.push({
          id: element.team.id,
          nome: element.team.name,
          Gols: element.numberOfGoals,
          nomeJogador: element.player.name,
          posicaoJogador: element.player.position
        })
      })
      this.getThumbTime();
    })
  }

  getThumbTime() {
    for (let i in this.infoTeamArtilharia) {
      this.campeonatosService.getThumbTime(this.infoTeamArtilharia[i].id).subscribe((infos: TeamExternal) => {
        this.infoTeamArtilharia[i].urlFoto = infos.crestUrl
        this.infoTeamArtilharia[i].nomeCurto = infos.shortName
      })
    }

    setTimeout(() => {
      window.localStorage.setItem('infoTeamArtilharia', JSON.stringify(this.infoTeamArtilharia))
    }, 3000);
  }


}
