import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './componentes/home/home.component';
import { NavComponent } from './componentes/nav/nav.component';
import {MatToolbarModule} from '@angular/material/toolbar'
import {HttpClientModule} from '@angular/common/http'
import {MatCardModule} from '@angular/material/card'
// import {} from ''

// footballdataFactoryf

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    HttpClientModule,
    MatCardModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
