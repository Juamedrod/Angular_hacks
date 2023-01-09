import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { CdkPortal, CdkPortalOutlet, PortalOutlet } from '@angular/cdk/portal';
import { AfterViewInit, Component, OnInit, ViewChild, ViewChildren } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  /* Drag&Drop */
  carta: string[] = ['Pollo a la pequinesa', 'Arroz basáltico', 'Cerdo en salsa de Ostras', 'Costillas de cerdo', 'Hamburguesa trufada'];
  comanda: string[] = [];

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }
  }
}
