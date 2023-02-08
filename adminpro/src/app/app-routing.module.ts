import { NgModule } from '@angular/core';

// 1. Import the router module and the routes module
import { RouterModule, Routes } from '@angular/router';


import { LoginComponent } from './auth/login/login.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { Graficas1Component } from './pages/graficas1/graficas1.component';
import { NopagefoundComponent } from './nopagefound/nopagefound.component';
import { PagesComponent } from './pages/pages.component';
import { ProgressComponent } from './pages/progress/progress.component';
import { RegisterComponent } from './auth/register/register.component';
import { PagesRoutingModule } from './pages/pages.routing';
import { AuthRoutingModule } from './auth/auth.routing';

// 3. Declare the route objects array
const routes: Routes = [
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
    RouterModule.forRoot(routes),
    // Add the routes for child
    PagesRoutingModule,
    AuthRoutingModule,
  ],
  exports: [RouterModule] // 2. Exports the router module
})
export class AppRoutingModule { }
