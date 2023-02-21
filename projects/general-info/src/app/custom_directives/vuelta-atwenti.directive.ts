import { AfterViewInit, Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[vueltaATwenti]'
})
export class VueltaATwentiDirective implements AfterViewInit {
  private startText: string = '';

  constructor(private el: ElementRef) { }

  ngAfterViewInit(): void {
    this.startText = this.el.nativeElement.innerText;
  }

  @HostListener('mouseover') onMouseOver() {
    let text = this.el.nativeElement.innerText;
    let newText = "";
    for (let i = 0; i < text.length; i++) {
      newText += i % 2 === 0 ? text[i].toUpperCase() : text[i].toLowerCase();
    }
    this.el.nativeElement.innerText = newText;
  }

  @HostListener('mouseout') onMouseOut() {
    this.el.nativeElement.innerText = this.startText;
  }

}
