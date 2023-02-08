import { NgModule } from '@angular/core';

// 1. Import the router module and the routes module
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { Graficas1Component } from './graficas1/graficas1.component';
import { PagesComponent } from './pages.component';
import { ProgressComponent } from './progress/progress.component';

// 3. Declare the route objects array
const routes: Routes = [
  {
    path: '',
    component: PagesComponent, 
    children: [
      { path: 'dashboard', component: DashboardComponent },
      { path: 'progress', component: ProgressComponent },
      { path: 'graficas1', component: Graficas1Component },
      // The default path
      { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
    ]
  },
];


@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
