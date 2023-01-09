import { AfterViewInit, Directive, OnDestroy, OnInit, TemplateRef, ViewContainerRef } from '@angular/core';
import { DomPortalOutlet, TemplatePortal } from '@angular/cdk/portal';

@Directive({
  selector: '[appRenderInPortal]',
})
export class RenderInPortalDirective implements AfterViewInit, OnDestroy {
  constructor(
    private templateRef: TemplateRef<any>, //La referencia del ngtemplate al que se aplica la directiva
    private viewContainerRef: ViewContainerRef, //La referencia del container donde se aplica la directiva
    private portalHost: DomPortalOutlet,//El DomPortalOutlet que estoy inyectando desde app.module.ts usando useFactory.
  ) { }

  ngAfterViewInit(): void {
    if (!this.portalHost) return;
    this.portalHost.attachTemplatePortal(
      new TemplatePortal(this.templateRef, this.viewContainerRef),
    );
  }

  ngOnDestroy(): void {
    this.portalHost.detach();
  }
}

