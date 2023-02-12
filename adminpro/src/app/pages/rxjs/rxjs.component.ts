import { Component, OnDestroy } from '@angular/core';
import { Observable, interval, Subscription } from 'rxjs';
import { retry, take, map, filter } from 'rxjs/operators';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styles: [
  ]
})
export class RxjsComponent implements OnDestroy {

  public intervalvariable : Subscription;

  constructor() {

    this.intervalvariable = this.returnInterval()
    .subscribe({ 
      next: value =>  console.log(value), 
      error: err => console.log(err),
      complete: () => console.log('terminó')
    });

    // this.basicEgWithReturn()
    // .pipe(
    //   retry(1)
    // )
    // .subscribe({ 
    //   next: value =>  console.log(value), 
    //   error: err => console.log(err),
    //   complete: () => console.log('terminó')
    // });

  }


  ngOnDestroy(): void {
    this.intervalvariable.unsubscribe();
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

  basicEgWithReturn() : Observable<number> {

    let i = -1;
    const obs$ = new Observable<number>(observer => {
      const intervalo = setInterval(() => {
        i++;
        observer.next(i);

        if( i === 4){
          clearInterval(intervalo);
          observer.complete();
        }

        if( i === 2 ){
          observer.error();
        }

      }, 1000);
    });
    
    return obs$;
  }

  basicEgWithRetry() {

    let i = -1;
    const obs$ = new Observable(observer => {
      const intervalo = setInterval(() => {
        i++;
        observer.next(i);

        if( i === 4){
          clearInterval(intervalo);
          observer.complete();
        }

        if( i === 2 ){
          observer.error();
        }

      }, 1000);
    });

    obs$
    .pipe(
      retry(1)
    )
    .subscribe({ 
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

  returnInterval(){
    return interval(500)
      .pipe(
        map( valor => valor + 1),
        filter(value => ( value % 2 === 0) ? true : false),
        take(10),
      );
  }

}
