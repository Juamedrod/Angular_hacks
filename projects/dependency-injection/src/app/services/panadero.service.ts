import { Injectable } from '@angular/core';
import { Vendedor } from '../interfaces/vendedor.interface';

@Injectable()
export class PanaderoService implements Vendedor {
  nombre = 'Panadero'

  constructor() { }

  comprar(): string {
    return ('He comprado al vendedor - ' + this.nombre);
  };
}
