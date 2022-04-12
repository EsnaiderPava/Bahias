import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BicicletasComponent } from './components/admin/autos/autos.component';
import { CompetenciasComponent } from './components/admin/competencias/competencias.component';
import { EventosComponent } from './components/admin/eventos/eventos.component';
import { HomeComponent } from './components/admin/home/home.component';
import { RutasComponent } from './components/admin/rutas/rutas.component';
import { BicicletascComponent } from './components/customer/bicicletasc/bicicletasc.component';
import { CompetenciascComponent } from './components/customer/competenciasc/competenciasc.component';
import { EventoscComponent } from './components/customer/eventosc/eventosc.component';
import { HomecComponent } from './components/customer/homec/homec.component';
import { RutascComponent } from './components/customer/rutasc/rutasc.component';
import { IndexComponent } from './components/index/index.component';
import { LoginComponent } from './components/login/login.component';
import { MapComponent } from './components/map/map.component';

const routes: Routes = [
  /* Rutas compartidas */
  { path: '', component: IndexComponent},
  { path: 'login', component: LoginComponent},
  { path: 'map', component: MapComponent },

  /* Rutas del Administrador*/
  { path: 'home', component: HomeComponent},
  { path: 'eventos', component: EventosComponent},
  { path: 'rutas', component: RutasComponent },
  { path: 'competencias', component: CompetenciasComponent },
  { path: 'autos', component: BicicletasComponent },

  /* Rutas del Cliente*/
  { path: 'homec', component: HomecComponent},
  { path: 'eventosc',  component: EventoscComponent },
  { path: 'rutasc', component: RutascComponent },
  { path: 'competenciasc', component: CompetenciascComponent },
  { path: 'bicicletasc', component: BicicletascComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
