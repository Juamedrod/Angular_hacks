import { Component } from '@angular/core';
import { PanaderoService } from '../../services/panadero.service';
import { VendedorService } from '../../services/vendedor.service';

@Component({
  selector: 'app-panaderia',
  templateUrl: './panaderia.component.html',
  styleUrls: ['./panaderia.component.css'],
  /*  providers: [{ provide: VendedorService, useClass: PanaderoService }] */
})
export class PanaderiaComponent {
  message: string = 'Sin compras';

  constructor(private vendedorService: VendedorService) { }

  comprar(): void {
    this.message = this.vendedorService.comprar();
  }
}
