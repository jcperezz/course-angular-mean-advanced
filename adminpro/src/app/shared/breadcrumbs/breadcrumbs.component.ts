import { Component, OnDestroy } from '@angular/core';
import { ActivationEnd, Data, Router } from '@angular/router';

import { Observable, interval, Subscription } from 'rxjs';
import { retry, take, map, filter } from 'rxjs/operators';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styles: [
  ]
})
export class BreadcrumbsComponent implements OnDestroy {

  public titulo?: string;
  public titulosSubs$?: Subscription;

  constructor(private router: Router) {
    this.titulosSubs$ = this.getTitle()
    .subscribe( ({titulo}) => {
      this.titulo = titulo;
      document.title = `AdminPro - ${titulo}`;
    });
  }

  ngOnDestroy(): void {
    this.titulosSubs$?.unsubscribe();
  }

  getTitle(): Observable<Data> {
    return this.router.events
      .pipe(
        filter((event: any) => (event instanceof ActivationEnd)),
        filter((event: ActivationEnd) => event.snapshot.firstChild === null),
        map((event: ActivationEnd) => event.snapshot.data)
      );
  }

}
