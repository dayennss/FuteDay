import { Component, OnInit } from '@angular/core';
import { Campeonatos } from './models-campeonatos/campeonatos';
import { CampeonatosService} from './services/campeonatos.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'FuteDay';

  campeonato = {} as Campeonatos
  campeonatos: Campeonatos[]
  
  constructor(private campeonatosService: CampeonatosService) {

  }

  ngOnInit() {
    this.getCampeonato()
  }

  // Chama o serviço para obtém todos os carros
  getCampeonato() {
    this.campeonatosService.getCampeonato().subscribe((campeonatos: Campeonatos[]) => {
      this.campeonatos = campeonatos
      console.log(campeonatos)
    });
  }

}