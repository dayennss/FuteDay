import { Component, OnInit } from '@angular/core';
import { Artilharia } from 'src/app/models-campeonatos/artilharia/artilharia';
import { CampeonatosService } from 'src/app/services/campeonatos.service';

@Component({
  selector: 'app-artilharia',
  templateUrl: './artilharia.component.html',
  styleUrls: ['./artilharia.component.css']
})
export class ArtilhariaComponent implements OnInit {

  //variaveis 
  artilharia: Artilharia


  constructor(private campeonatosService: CampeonatosService) { }

  ngOnInit(): void {
    this.getArtilharia();
  }

  getArtilharia(): void {
    this.campeonatosService.getArtilharia().subscribe((artilharia: Artilharia) => {
      this.artilharia = artilharia["scorers"];
      console.log(this.artilharia)
    })}


}
