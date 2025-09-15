import { Routes} from '@angular/router';
import { Home } from './home/home';
import {titleResolver} from './core/title-resolver';

export const routes: Routes = [
  {
    path: '',
    component: Home,
    title: titleResolver,
  },
  {
    path: 'project',
    loadComponent: () => import('./project/project').then((m) => m.Project),
    title: titleResolver,
  },
  {
    path: 'work',
    loadComponent: () => import('./work/work').then((m) => m.Work),
    title: titleResolver,
  },
  {
    path: 'contact',
    loadComponent: () => import('./contact/contact').then((m) => m.Contact),
    title: titleResolver,
  },
  {
    path: 'guestbook',
    loadComponent: () => import('./guestbook/guestbook').then((m) => m.Guestbook),
    title: titleResolver,
  },
];
