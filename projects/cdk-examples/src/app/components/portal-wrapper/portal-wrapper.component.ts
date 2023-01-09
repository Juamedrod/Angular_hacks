import { CdkPortal, DomPortalOutlet } from '@angular/cdk/portal';
import { AfterViewInit, ApplicationRef, Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-portal-wrapper',
  templateUrl: './portal-wrapper.component.html',
  styleUrls: ['./portal-wrapper.component.css']
})
export class PortalWrapperComponent implements AfterViewInit {
  @ViewChild(CdkPortal) portal!: CdkPortal;
  private host!: DomPortalOutlet;

  constructor() { }

  ngAfterViewInit(): void {
    if (!document.querySelector('#portalOutletId')) return;
    this.host = new DomPortalOutlet(document.querySelector('#portalOutletId') as Element);
    this.host.attach(this.portal);
  }
}
