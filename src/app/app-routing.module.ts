import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ArtilhariaComponent } from './componentes/artilharia/artilharia.component';
import { HomeComponent } from './componentes/home/home.component';

const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path:"artilharia",
    component: ArtilhariaComponent
  }
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
