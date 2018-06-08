import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ListeSerieComponent } from './liste-serie/liste-serie.component';
import { Erreur404Component } from './erreur404/erreur404.component';
import { CreateSerieComponent } from './create-serie/create-serie.component';
import { GestionRequestComponent } from './gestion-request/gestion-request.component';
import { ParametreComponent } from './parametre/parametre.component';
import { GestionSeriesComponent } from './gestion-series/gestion-series.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
    { path: '', component: LoginComponent },
    { path: 'recherche', component: ListeSerieComponent },
    { path: 'requete', component: GestionRequestComponent },
    { path: 'ajout_serie', component: CreateSerieComponent },
    { path: 'gestion_series', component: GestionSeriesComponent }, 
    { path: 'parametre', component: ParametreComponent },
    { path: '**', component: Erreur404Component }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ],
    declarations: []
})
export class AppRoutingModule { }