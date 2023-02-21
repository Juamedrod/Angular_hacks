import { Directive, ElementRef, OnInit, OnDestroy } from '@angular/core';

@Directive({
  selector: '[randomColor]'
})
export class RandomColorDirective implements OnInit, OnDestroy {
  private interval: any;

  constructor(private el: ElementRef) { }

  ngOnInit() {
    this.interval = setInterval(() => {
      const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
      this.el.nativeElement.style.color = randomColor;
    }, 500);
  }

  ngOnDestroy() {
    clearInterval(this.interval);
  }
}
