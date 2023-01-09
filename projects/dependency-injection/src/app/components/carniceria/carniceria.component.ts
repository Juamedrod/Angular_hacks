import { Component } from '@angular/core';
import { VendedorService } from '../../services/vendedor.service';

@Component({
  selector: 'app-carniceria',
  templateUrl: './carniceria.component.html',
  styleUrls: ['./carniceria.component.css']
})
export class CarniceriaComponent {
  message: string = 'Sin compras';

  constructor(private vendedorService: VendedorService) { }

  comprar(): void {
    this.message = this.vendedorService.comprar();
  }

}
