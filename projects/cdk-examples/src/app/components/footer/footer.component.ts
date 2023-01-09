import { CdkPortal, Portal, PortalOutlet, TemplatePortal } from '@angular/cdk/portal';
import { AfterViewInit, Component, Input, ViewChild } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements AfterViewInit {
  /*  @Input() portalOutlet?: PortalOutlet;
   @ViewChild(CdkPortal) cdkPortal!: CdkPortal; */

  ngAfterViewInit(): void {
    /*    console.log(this.portalOutlet);
       console.log(this.cdkPortal);
       if (!this.portalOutlet) return;
       this.portalOutlet.attach(this.cdkPortal); */
  }
}
