import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ViewChildviewContentComponent } from './view-childview-content/view-childview-content.component';
import { VueltaATwentiDirective } from './custom_directives/vuelta-atwenti.directive';
import { AlternarMayusMinusDirective } from './custom_directives/alternar-mayus-minus.directive';
import { RotateOnHoverDirective } from './custom_directives/rotateonhover.directive';
import { RandomColorDirective } from './custom_directives/color.directive';


@NgModule({
  declarations: [
    AppComponent,
    ViewChildviewContentComponent,
    VueltaATwentiDirective,
    AlternarMayusMinusDirective,
    RotateOnHoverDirective,
    RandomColorDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
