import { Routes } from '@angular/router';
import { Home } from './home/home';

export const routes: Routes = [
  {
    path: '',
    component: Home,
  },
  {
    path: 'project',
    loadComponent: () => import('./project/project').then((m) => m.Project),
  },
  {
    path: 'work',
    loadComponent: () => import('./work/work').then((m) => m.Work),
  },
  {
    path: 'contact',
    loadComponent: () => import('./contact/contact').then((m) => m.Contact),
  },
  {
    path: 'guestbook',
    loadComponent: () => import('./guestbook/guestbook').then((m) => m.Guestbook),
  },
];
