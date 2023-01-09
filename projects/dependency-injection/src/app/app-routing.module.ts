import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarniceriaComponent } from './components/carniceria/carniceria.component';
import { MercadoComponent } from './components/mercado/mercado.component';
import { PanaderiaComponent } from './components/panaderia/panaderia.component';
import { PescaderiaComponent } from './components/pescaderia/pescaderia.component';
import { CarniceroService } from './services/carnicero.service';
import { PanaderoService } from './services/panadero.service';
import { VendedorService } from './services/vendedor.service';

const routes: Routes = [
  { path: 'mercado', component: MercadoComponent },
  {
    path: 'panaderia',
    component: PanaderiaComponent,
    providers: [{ provide: VendedorService, useClass: PanaderoService }]
  },
  {
    path: 'carniceria',
    component: CarniceriaComponent,
    providers: [{ provide: VendedorService, useClass: CarniceroService }]
  },
  { path: 'pescaderia', component: PescaderiaComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
