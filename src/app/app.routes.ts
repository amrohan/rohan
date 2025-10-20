import { Routes } from '@angular/router';
import { Home } from './home/home';
import { titleResolver } from './core/title-resolver';
import { Project } from './project/project';
import { Experience } from './experience/experience';
import { Contact } from './contact/contact';
import { PageNotFound } from './page-not-found/page-not-found';

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
    path: 'experience',
    component: Experience,
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
  {
    path: 'page-not-found',
    component: PageNotFound,
    title: titleResolver,
  },
  { path: '**', redirectTo: 'page-not-found' },
];
