import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Graficas1Component } from './graficas1/graficas1.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    Graficas1Component,
    DashboardComponent,
  ],
  exports: [
    Graficas1Component,
    DashboardComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
  ]
})
export class PagesModule { }
