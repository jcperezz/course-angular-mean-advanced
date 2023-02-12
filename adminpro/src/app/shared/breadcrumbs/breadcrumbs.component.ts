import { Component, OnDestroy } from '@angular/core';
import { ActivationEnd, Data, Router } from '@angular/router';

import { Observable, Subscription } from 'rxjs';
import { map, filter } from 'rxjs/operators';
import { PagesComponent } from 'src/app/pages/pages.component';

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
    .subscribe( ({title}) => {
      //console.log(data)
      this.titulo = title;
      document.title = `AdminPro - ${title}`;
    });
  }

  ngOnDestroy(): void {
    this.titulosSubs$?.unsubscribe();
  }

  getTitle(): Observable<Data> {
    return this.router.events
      .pipe(
        filter((event: any) => (event instanceof ActivationEnd)),
        map((event: ActivationEnd) => event.snapshot.data),
        filter( (data : Data) => data['title']),
      );
  }

}
