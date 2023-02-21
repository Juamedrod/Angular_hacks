import { Component } from '@angular/core';
import { CasaService } from './services/casa.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  miCasa: string = ``;

  constructor(private casa: CasaService) { }

  construirCasa(): void {
    this.miCasa = this.casa.construir();
  }
}
