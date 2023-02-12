import { Component } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styles: [
  ]
})
export class RxjsComponent {

  constructor() {


  }

  basicEg1() {
    const obs$ = new Observable(observer => {
      let i = -1;
      const intervalo = setInterval(() => {
        i++;
        observer.next(i);

        if( i === 4){
          clearInterval(intervalo);
          observer.complete();
        }

      }, 1000);
    });

    obs$.subscribe({ 
      next: value =>  console.log(value), 
      error: err => console.log(err),
      complete: () => console.log('terminó')
    });
  }

  basicEg() {
    const obs$ = new Observable(observer => {
      setInterval(() => {
        console.log('tick');
      }, 1000);
    });

    obs$.subscribe();
  }

}
