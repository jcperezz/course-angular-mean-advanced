import { NgModule } from '@angular/core';

// 1. Import the router module and the routes module
import { RouterModule, Routes } from '@angular/router';


import { LoginComponent } from './auth/login/login.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { Graficas1Component } from './pages/graficas1/graficas1.component';
import { NopagefoundComponent } from './pages/nopagefound/nopagefound.component';
import { PagesComponent } from './pages/pages.component';
import { ProgressComponent } from './pages/progress/progress.component';
import { RegisterComponent } from './pages/register/register.component';

// 3. Declare the route objects array
const routes: Routes = [
  // The normal way for asociate a path with a component
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },

  // Routing with children
  {
    path: '',
    // Parent component should has a router-outlet label
    component: PagesComponent, 
    children: [
      { path: 'dashboard', component: DashboardComponent },
      { path: 'progress', component: ProgressComponent },
      { path: 'graficas1', component: Graficas1Component },
      // The default path
      { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
    ]
  },
  // No found paths
  { path: '**', component: NopagefoundComponent },

];


@NgModule({
  declarations: [],
  imports: [
    // 4. Import the Router module with the route objects array
    /**
     * 5. Add the app-routing module in the app.module @see AppModule
     * 6. Add the <router-outlet></router-outlet> on the app.component.html
     * 
     */
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule] // 2. Exports the router module
})
export class AppRoutingModule { }
