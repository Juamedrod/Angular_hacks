import { Injectable } from '@angular/core';
import { Vendedor } from '../interfaces/vendedor.interface';

@Injectable()
export class CarniceroService implements Vendedor {
  nombre = 'Carnicero';

  constructor() { }

  comprar(): string {
    return ('He comprado al vendedor - ' + this.nombre);
  };
}
