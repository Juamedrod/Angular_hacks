import { AfterViewInit, Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[alternarMayusMinus]'
})
export class AlternarMayusMinusDirective {
  private toggle = true;

  constructor(private el: ElementRef) { }

  @HostListener('mouseenter') onMouseEnter() {
    this.toggle = !this.toggle;
    this.el.nativeElement.innerText = this.toggle
      ? this.el.nativeElement.innerText.toUpperCase()
      : this.el.nativeElement.innerText.toLowerCase();
  }

}

/***
 En Angular, puedes inyectar varios objetos en el constructor de una directiva personalizada que hagan referencia al elemento al que se le aplica la directiva. Algunos ejemplos incluyen:

-->ElementRef: proporciona una referencia directa al elemento nativo del DOM al que se aplica la directiva.
-->Renderer2: permite modificar el elemento del DOM de forma segura.
-->TemplateRef: proporciona acceso al contenido del elemento de plantilla.
-->ViewContainerRef: proporciona acceso al contenedor de vistas donde se inserta el elemento de la directiva.
-->ViewChild, ContentChild: Decoradores quete permiten acceder a los elementos hijos del elemento al que se aplica la directiva.

Además, también puedes inyectar servicios y objetos relacionados con el ámbito de la aplicación o el componente en el que se encuentra la directiva.
***/
