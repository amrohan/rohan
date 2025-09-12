import { Component } from '@angular/core';
import { Title } from '../components/title';
import { ProjectModel } from '../models/project.model';
import { ProjectCard } from './project-card';

@Component({
  selector: 'app-project',
  imports: [Title, ProjectCard],
  templateUrl: './project.html',
  styleUrl: './project.css',
})
export class Project {
  projectData: ProjectModel[] = [
    {
      imageUrl: 'https://res.cloudinary.com/amrohan/image/upload/v1757511898/Portfolio/termix.webp',
      title: 'Termix',
      description:
        'A modern, high-performance file manager for the terminal. Built with .NET and Spectre.Console for a fluid, visually-rich experience.',
      githubUrl: 'https://github.com/amrohan/termix',
      githubStars: 110,
      liveDemoUrl: 'https://github.com/amrohan/termix#installation',
      articleUrl: 'https://github.com/amrohan/termix/blob/main/README.md',
      tags: ['.NET', 'C#', 'CLI', 'Spectre.Console', 'Developer Tool'],
    },
    {
      imageUrl: 'https://res.cloudinary.com/amrohan/image/upload/v1757511898/Portfolio/memora.webp',
      title: 'Memora',
      description:
        'A sleek, user-friendly bookmark manager designed to help you organize, categorize, and quickly access your favorite links. Built with Angular and featuring PWA support, Web Share API integration, and responsive design.',
      githubUrl: 'https://github.com/amrohan/memora',
      githubStars: 0,
      liveDemoUrl: 'https://memora.pages.dev',
      articleUrl: 'https://github.com/amrohan/memora/blob/main/README.md',
      tags: ['Angular', 'Nodejs', 'PWA', 'Sqlite', 'Web Share API'],
    },
    {
      imageUrl:
        'https://res.cloudinary.com/amrohan/image/upload/v1757511898/Portfolio/echomail.webp',
      title: 'Echomail',
      description:
        'Lightning-fast email relay API that just works - JWT auth, contact forms, and Gmail SMTP in one tiny package. Built with .NET 9 Minimal API for portfolios, landing pages, and internal tools.',
      githubUrl: 'https://github.com/amrohan/echomail',
      githubStars: 4,
      liveDemoUrl: 'https://github.com/amrohan/echomail#-getting-started',
      articleUrl: 'https://github.com/amrohan/echomail/blob/main/README.md',
      tags: ['.NET 9', 'C#', 'Minimal API', 'SQLite', 'Gmail API'],
      state: 'object-contain',
    },
    // {
    //   imageUrl: 'timeline.webp',
    //   title: 'TimeLine',
    //   description:
    //     "A sleek web app for effortlessly curating and sharing life's moments. Organize events with images, titles, and dates in a visually engaging chronological timeline interface.",
    //   githubUrl: 'https://github.com/amrohan/timeline',
    //   githubStars: 1,
    //   liveDemoUrl: 'https://vangu.pages.dev',
    //   articleUrl: 'https://github.com/amrohan/timeline/blob/main/README.md',
    //   tags: ['Angular 17', 'Firebase', 'Firestore', 'Firebase Auth'],
    // },
  ];
}
