import { NgModule } from '@angular/core';

// 1. Import the router module and the routes module
import { RouterModule, Routes } from '@angular/router';
import { AccountSettingsComponent } from './account-settings/account-settings.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { Graficas1Component } from './graficas1/graficas1.component';
import { PagesComponent } from './pages.component';
import { ProgressComponent } from './progress/progress.component';
import { PromisesComponent } from './promises/promises.component';
import { RxjsComponent } from './rxjs/rxjs.component';

// 3. Declare the route objects array
const routes: Routes = [
  {
    path: 'dashboard',
    component: PagesComponent,
    //data: { title: 'Dashboard'}, 
    children: [
      { path: 'dashboard', component: DashboardComponent, data : { title: 'Dashboard'} },
      { path: 'progress', component: ProgressComponent, data : { title: 'Progress'}  },
      { path: 'graficas1', component: Graficas1Component, data : { title: 'Graficas'}  },
      { path: 'promises', component: PromisesComponent, data : { title: 'Promises'}  },
      { path: 'rxjs', component: RxjsComponent, data : { title: 'RxJs'}  },
      { path: 'accountSettings', component: AccountSettingsComponent, data : { title: 'Settings'}  },
    ]
  },
];


@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
