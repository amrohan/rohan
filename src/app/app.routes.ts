import { Routes } from '@angular/router';
import { Home } from './home/home';
import { titleResolver } from './core/title-resolver';
import { Project } from './project/project';
import { Work } from './work/work';
import { Contact } from './contact/contact';

export const routes: Routes = [
  {
    path: '',
    component: Home,
    title: titleResolver,
  },
  {
    path: 'project',
    component: Project,
    title: titleResolver,
  },
  {
    path: 'work',
    component: Work,
    title: titleResolver,
  },
  {
    path: 'contact',
    component: Contact,
    title: titleResolver,
  },
  {
    path: 'guestbook',
    loadComponent: () => import('./guestbook/guestbook').then((m) => m.Guestbook),
    title: titleResolver,
  },
  { path: '**', redirectTo: '404' },
];
