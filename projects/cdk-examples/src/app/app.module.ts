import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { CdkAccordionModule } from '@angular/cdk/accordion';
import { DomPortalOutlet, PortalModule } from '@angular/cdk/portal';

import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { PortalWrapperComponent } from './components/portal-wrapper/portal-wrapper.component';
import { RenderInPortalDirective } from './directives/render-in-portal.directive';


@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    PortalWrapperComponent,
    RenderInPortalDirective
  ],
  imports: [
    BrowserModule,
    DragDropModule,
    CdkAccordionModule,
    PortalModule
  ],
  providers: [{
    provide: DomPortalOutlet,
    useFactory: () => {
      if (!document.getElementById('portalOutletId')) return;
      return new DomPortalOutlet(document.getElementById('portalOutletId') as Element)
    }
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
