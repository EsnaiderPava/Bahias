import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EventosComponent } from './components/admin/eventos/eventos.component';
import { IndexComponent } from './components/index/index.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/admin/home/home.component';
import { RutasComponent } from './components/admin/rutas/rutas.component';
import { CompetenciasComponent } from './components/admin/competencias/competencias.component';
import { BicicletasComponent } from './components/admin/autos/autos.component';
import { MapComponent } from './components/map/map.component';
import { GoogleLoginProvider, SocialAuthServiceConfig, SocialLoginModule } from 'angularx-social-login';
import { HomecComponent } from './components/customer/homec/homec.component';
import { RutascComponent } from './components/customer/rutasc/rutasc.component';
import { EventoscComponent } from './components/customer/eventosc/eventosc.component';
import { BicicletascComponent } from './components/customer/bicicletasc/bicicletasc.component';
import { CompetenciascComponent } from './components/customer/competenciasc/competenciasc.component';

@NgModule({
  declarations: [
    AppComponent,
    EventosComponent,
    IndexComponent,
    LoginComponent,
    HomeComponent,
    RutasComponent,
    CompetenciasComponent,
    BicicletasComponent,
    MapComponent,
    HomecComponent,
    RutascComponent,
    EventoscComponent,
    BicicletascComponent,
    CompetenciascComponent
  ],
  imports: [
    BrowserModule,
    SocialLoginModule,
    AppRoutingModule,
    FormsModule,
    CommonModule,
    HttpClientModule
  ],
  providers: [
    {
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: false,
        providers: [
          {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider(
              "652945115807-g387q92ufgteju6aft323691tqpja5m0.apps.googleusercontent.com"
            )
          }
        ]
      } as SocialAuthServiceConfig
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
