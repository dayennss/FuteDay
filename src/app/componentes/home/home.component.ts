import { Component, OnInit } from '@angular/core';
import { Campeonatos, Campeonatos2 } from 'src/app/models-campeonatos/campeonatos';
import { CampeonatosService } from 'src/app/services/campeonatos.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  campeonato = {} as Campeonatos2
  
  constructor(private campeonatosService: CampeonatosService) { }
  ngOnInit() {
    this.getAllCampeonatos();
  }
  getAllCampeonatos() {
    this.campeonatosService.getAllCampeonatos().subscribe((campeonatos:Campeonatos2) => {
      this.campeonato = campeonatos
      console.log(this.campeonato)
    })
  }
  



  // // Chama o serviço para obtém todos os campeonatos.
  // getCampeonato() {
  //   this.campeonatosService.getCampeonato().subscribe((campeonatos: Campeonatos[]) => {
  //     this.campeonatos = campeonatos
  //     console.log(campeonatos)
  //   });
  // }
}
