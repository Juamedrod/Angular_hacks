import { Component, ContentChild, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-view-childview-content',
  templateUrl: './view-childview-content.component.html',
  styleUrls: ['./view-childview-content.component.css']
})
export class ViewChildviewContentComponent {
  @ViewChild('viewChildDiv') viewChildDiv!: ElementRef;
  @ContentChild('contentChildDiv') contentChildDiv!: ElementRef;

  ngAfterViewInit() {
    console.log(this.viewChildDiv.nativeElement); // <div>ViewChild Div</div>
    console.log(this.contentChildDiv.nativeElement); // <div>ContentChild Div</div>
  }

}
