import { Injectable } from '@angular/core';
import { Vendedor } from '../interfaces/vendedor.interface';

@Injectable()
export class VendedorService implements Vendedor {
  nombre = 'Vendedor Genérico'

  constructor() { }

  comprar(): string {
    return ('He comprado al vendedor - ' + this.nombre);
  };
}
