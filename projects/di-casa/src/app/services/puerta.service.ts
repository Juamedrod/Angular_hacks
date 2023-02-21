import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PuertaService {

  color: string;

  constructor() {
    this.color = 'marrón';
  }
}
