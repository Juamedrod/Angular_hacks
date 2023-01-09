import { Injectable } from '@angular/core';
import { Vendedor } from '../interfaces/vendedor.interface';

@Injectable()
export class MayoristanolimpiopescadoService implements Vendedor {
  nombre = 'Pescadero'

  constructor() { }

  comprar(): string {
    return ('He comprado al vendedor - ' + this.nombre);
  };
}
