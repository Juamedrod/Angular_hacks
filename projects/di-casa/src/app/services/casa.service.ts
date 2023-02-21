import { Injectable } from '@angular/core';
import { ParedService } from './pared.service';
import { PuertaService } from './puerta.service';

@Injectable({
  providedIn: 'root'
})
export class CasaService {
  /* Sin injección de dependencias, el componente trata de resolver su propia dependencia y las sucesivas (La responsabilidad de mantener el ciclo recae en el dev). */
  /* pared: ParedService = new ParedService();
  puerta: PuertaService = new PuertaService(); */

  /* CON INYECCIÓN DE dependencias, angulas las resuelve por nosotros y establece el grafo de dependencias. Angular maneja el ciclo de vida de las dependencias por nosotros. */
  constructor(private pared: ParedService, private puerta: PuertaService) { }

  construir(): string {
    return (`Construyendo una casa con paredes de ${this.pared.material} y una puerta de color ${this.puerta.color}`);
  }
}
