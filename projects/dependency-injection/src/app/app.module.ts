import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MercadoComponent } from './components/mercado/mercado.component';
import { PescaderiaComponent } from './components/pescaderia/pescaderia.component';
import { CarniceriaComponent } from './components/carniceria/carniceria.component';
import { PanaderiaComponent } from './components/panaderia/panaderia.component';
import { VendedorService } from './services/vendedor.service';

@NgModule({
  declarations: [
    AppComponent,
    MercadoComponent,
    PescaderiaComponent,
    CarniceriaComponent,
    PanaderiaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [VendedorService],
  bootstrap: [AppComponent]
})
export class AppModule { }
