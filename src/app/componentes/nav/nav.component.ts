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
        router: "/",
        enable: false, 
        
      },
      {
        id:2,
        title:"Campeonato",
        router: "/campeonato",
        enable: true
      },
      {
        id:3,
        title:"Artilharia",
        router: "/artilharia",
        enable: false
      },
      {
        id:4,
        title:"Jogos",
        router: "/",
        enable: false
      },  
      {
        id:5,
        title:"Tabela",
        router: "/",
        enable: false
      }
      
    ]
  }

  changeClassMenu(idLink:number):void {
    this.LinksMenu.forEach(element => {
      element.enable = false;
    });
    this.LinksMenu[idLink-1].enable = true
  }

}
