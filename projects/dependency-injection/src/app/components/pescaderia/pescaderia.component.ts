import { Component } from '@angular/core';
import { MayoristanolimpiopescadoService } from '../../services/mayoristanolimpiopescado.service';
import { VendedorService } from '../../services/vendedor.service';

@Component({
  selector: 'app-pescaderia',
  templateUrl: './pescaderia.component.html',
  styleUrls: ['./pescaderia.component.css'],
  providers: [{ provide: VendedorService, useClass: MayoristanolimpiopescadoService }]
})
export class PescaderiaComponent {
  message: string = 'Sin compras';

  constructor(private vendedorService: VendedorService) { }

  comprar(): void {
    this.message = this.vendedorService.comprar();
  }
}
