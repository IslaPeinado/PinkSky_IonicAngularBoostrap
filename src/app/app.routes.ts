import {Routes} from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
    children: [
      {
        path: '',
        pathMatch: 'full',
        loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
      },
      {
        path: 'navbarweb',
        loadChildren: () => import('./components/nav-web/nav-web.component').then(m => m.NavWebComponent)
      },
      {
        path: 'navbarmovile',
        loadChildren: () => import('./components/nav-movile/nav-movile.component').then(m => m.NavMovileComponent)
      }
    ]
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
];
