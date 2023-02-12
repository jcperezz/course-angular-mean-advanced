import { Component } from '@angular/core';
import { ActivationEnd, Router } from '@angular/router';

import { Observable, interval, Subscription } from 'rxjs';
import { retry, take, map, filter } from 'rxjs/operators';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styles: [
  ]
})
export class BreadcrumbsComponent {

  public titulo?: string;

  constructor( private router: Router) {
    this.getTitle();
  }

  getTitle(){
    this.router.events
    .pipe(
      filter( (event : any) => (event instanceof ActivationEnd) ),
      filter( (event : ActivationEnd) => event.snapshot.firstChild === null),
      map( (event : ActivationEnd) => event.snapshot.data )
    )
    .subscribe( ({titulo}) => {
      this.titulo = titulo;
      document.title = `AdminPro - ${titulo}`;
    });
  }

}
