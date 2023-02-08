import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Graficas1Component } from './graficas1/graficas1.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RouterModule } from '@angular/router';
import { NgChartsModule } from 'ng2-charts';

import { FormsModule } from "@angular/forms";
import { ProgressComponent } from './progress/progress.component';
import { ComponentsModule } from '../components/components.module';


@NgModule({
  declarations: [
    Graficas1Component,
    DashboardComponent,
    ProgressComponent,
  ],
  exports: [
    Graficas1Component,
    DashboardComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    ComponentsModule,
    NgChartsModule,
  ]
})
export class PagesModule { }
