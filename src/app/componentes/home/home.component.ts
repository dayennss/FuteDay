import { Component, OnInit } from '@angular/core';
import { Campeonatos, Campeonatos2 } from 'src/app/models-campeonatos/campeonatos';
import { CampeonatosService } from 'src/app/services/campeonatos.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  idCampeonatos =  [2013]
  campeonato = {} as Campeonatos2
  campeonatos: Campeonatos2[] = []
   
  constructor(private campeonatosService: CampeonatosService) { }
  ngOnInit() {
    this.getAllCampeonatos();
  }
  getAllCampeonatos() {
    this.idCampeonatos.forEach(element => {
      this.campeonatosService.getCampeonatoById(element).subscribe((campeonatos:Campeonatos2) => {
        this.campeonatos.push(campeonatos)
      })  
    });

    
  }
  



  // // Chama o serviço para obtém todos os campeonatos.
  // getCampeonato() {
  //   this.campeonatosService.getCampeonato().subscribe((campeonatos: Campeonatos[]) => {
  //     this.campeonatos = campeonatos
  //     console.log(campeonatos)
  //   });
  // }
}
