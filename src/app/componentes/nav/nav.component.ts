import { Component, OnInit } from '@angular/core';
import { menuNav} from 'src/app/models-campeonatos/infos/infos-menu-nav';


@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})


export class NavComponent implements OnInit {

  LinksMenu: menuNav[] = []
 
  constructor() { 
     
  }

  ngOnInit(): void {
    this.LinksMenu = [
      {
        id: 1,
        title: "Inicio",
        enable: false
      },
      {
        id:2,
        title:"Campeonato",
        enable: true
      },
      {
        id:3,
        title:"Artilharia",
        enable: false
      },
      {
        id:4,
        title:"Jogos",
        enable: false
      },  
      {
        id:5,
        title:"Tabela",
        enable: false
      }
      
    ]
  
  }

}
