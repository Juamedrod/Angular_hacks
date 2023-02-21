import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ParedService {
  material: string;

  constructor() {
    this.material = 'ladrillo';
  }
}
