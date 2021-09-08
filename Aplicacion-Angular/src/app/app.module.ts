import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SaludadorComponent } from './saludador/saludador.component';
import { ListadorComponent } from './listador/listador.component';
import { DestinoViajeComponent } from './destino-viaje/destino-viaje.component';

@NgModule({
  declarations: [
    AppComponent,
    SaludadorComponent,
    ListadorComponent,
    DestinoViajeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
