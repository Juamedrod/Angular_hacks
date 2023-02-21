import { Component, OnInit } from '@angular/core';
import { Observable, Subject, BehaviorSubject, AsyncSubject, ReplaySubject } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  ngOnInit() {
    //creación de un observable
    const observable = new Observable((subscriber) => {
      //emitiendo valor 1
      subscriber.next(1);
      //emitiendo valor 2
      subscriber.next(2);
      //emitiendo valor 3
      subscriber.next(3);
      //completando la emision de datos
      subscriber.complete();
    });

    //creando un subject
    const subject = new Subject();
    //suscribiendose al subject y mostrando los valores emitidos
    subject.subscribe((val) => console.log('Subject:', val));
    //emitiendo valor 1
    subject.next(1);
    //emitiendo valor 2
    subject.next(2);
    //emitiendo valor 3
    subject.next(3);

    //creando un behavior subject
    const behaviorSubject = new BehaviorSubject(0);
    //suscribiendose al behavior subject y mostrando los valores emitidos
    behaviorSubject.subscribe((val) => console.log('BehaviorSubject:', val));
    //emitiendo valor 1
    behaviorSubject.next(1);
    //emitiendo valor 2
    behaviorSubject.next(2);
    //emitiendo valor 3
    behaviorSubject.next(3);

    //creando un async subject
    /* Un AsyncSubject es un tipo especial de Subject que solo emite el último valor emitido cuando el observable se completa. Esto significa que solo se notificará al subscriptor una vez con el último valor emitido, y solo después de que el observable se haya completado. */
    const asyncSubject = new AsyncSubject();
    //suscribiendose al async subject y mostrando los valores emitidos
    asyncSubject.subscribe((val) => console.log('AsyncSubject:', val));
    //emitiendo valor 1
    asyncSubject.next(1);
    //emitiendo valor 2
    asyncSubject.next(2);
    //emitiendo valor 3
    asyncSubject.next(3);
    //completando la emision de datos
    asyncSubject.complete();

    //creando un replay subject con un buffer de 2 valores
    const replaySubject = new ReplaySubject(2);
    //emitiendo valor 1
    replaySubject.next(1);
    //emitiendo valor 2
    replaySubject.next(2);
    //emitiendo valor 3
    replaySubject.next(3);

    //suscribiendose al replay subject y mostrando los valores emitidos
    replaySubject.subscribe((val) => console.log('ReplaySubject:', val));
  }


}
