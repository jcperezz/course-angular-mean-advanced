# Adminpro

This is a test project for Advanced Angular Course.
This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.1.4.

## Quick guide
For run this project you should the following steps:
1. Clone this repository.
2. Run `ng install` for install Node modules
3. Run `ng serve -o` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Course steps

### 1. Create an Angular Project
Run `ng new <name>` where `<name>` is the name of project.

### 2. Create your first component
For create a component you should run the following sentence:
`ng g c <name> -s --skip-tests`
Where `<name>` is the name of the component.
For see the help about the command you can use 
`ng g c --help`

### 3. Add the HTML template

### 4. Add the rounting module for main routes

1. Create the `app-routing-module` with `ng g m appRouting --flat`.

2. Open the app routing module and modify with the following:

```typescript
import { NgModule } from '@angular/core';
/**
 * 1.1 Delete de CommonModule
 * 1.2 Import the RouterModule and Routes
 */
import { RouterModule, Routes } from '@angular/router';

@NgModule({
  declarations: [],
  imports: [], // 1.1. Delete de CommonModule
  exports: [RouterModule] // 1.3. Export the RouterModule to expose it
})
export class AppRouting2Module { }

```

3. Declare the route objects array const

```typescript
const routes: Routes = [
  // The 'normal' path for every component
  {path: 'dashboard', component: DashboardComponent },
  // The default path
  {path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  // No found paths
  {path: '**', component: NopagefoundComponent },
];
```

4. Import the Router module with the route objects array

```typescript
    @NgModule({
    ...
    imports: [
        // 4. Import the Router module with the route objects array
        RouterModule.forRoot( routes )
    ],
    ...
    })
```

5. Add the app-routing module in the **app.module.ts**

```typescript
@NgModule({
  ...
  imports: [
    ...
    AppRoutingModule,
  ],
  ...
})
```

6. Add the `<router-outlet></router-outlet>` in the html. e.g. the **app.component.html**
