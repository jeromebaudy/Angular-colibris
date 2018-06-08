import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { AppComponent } from './app.component';
import { ListeSerieComponent } from './liste-serie/liste-serie.component';
import { GestionRequestComponent } from './gestion-request/gestion-request.component';
import { AppRoutingModule } from './app-routing.module';
import { Erreur404Component } from './erreur404/erreur404.component';
import { NavComponent } from './nav/nav.component';
import { CreateSerieComponent } from './create-serie/create-serie.component';
import { ParametreComponent } from './parametre/parametre.component';
import { GestionSeriesComponent } from './gestion-series/gestion-series.component';
import { LoginComponent } from './login/login.component';
import { SeriesService } from './services/series.service';
import { AuthService } from './services/auth.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    ListeSerieComponent,
    GestionRequestComponent,
    Erreur404Component,
    NavComponent,
    CreateSerieComponent,
    ParametreComponent,
    GestionSeriesComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule    
  ],
  providers: [
    SeriesService,
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
