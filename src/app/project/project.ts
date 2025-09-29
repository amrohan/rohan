import { Component, signal, computed } from '@angular/core';
import { ProjectModel } from '../models/project.model';
import { ProjectCard } from './project-card';

@Component({
  selector: 'app-project',
  standalone: true,
  imports: [ProjectCard],
  templateUrl: './project.html',
  styleUrls: ['./project.css'],
})
export class Project {
  projectData = signal<ProjectModel[]>([
    {
      imageUrl: 'https://res.cloudinary.com/amrohan/image/upload/v1757511898/Portfolio/termix.webp',
      title: 'Termix',
      description:
        'A modern, high-performance file manager for the terminal. Built with .NET and Spectre.Console, it offers a visually rich, intuitive interface. Designed for speed, productivity, and a smooth developer experience.',
      githubUrl: 'https://github.com/amrohan/termix',
      githubStars: 111,
      liveDemoUrl: '',
      articleUrl: 'https://github.com/amrohan/termix/blob/main/README.md',
      tags: ['.NET', 'C#', 'CLI', 'Spectre.Console', 'Developer Tool'],
      downloadCount: 2.6,
      packageUrl: 'https://www.nuget.org/packages/Termix/',
      year: 2025,
    },
    {
      imageUrl:
        'https://res.cloudinary.com/amrohan/image/upload/v1757511898/Portfolio/echomail.webp',
      title: 'Echomail',
      description:
        'A lightning-fast email relay API with JWT auth, Gmail SMTP, and contact form support. Built with .NET 9 Minimal API, it is ideal for portfolios, landing pages, and lightweight internal tools and anything.',
      githubUrl: 'https://github.com/amrohan/echomail',
      githubStars: 4,
      liveDemoUrl: '',
      articleUrl: 'https://github.com/amrohan/echomail/blob/main/README.md',
      tags: ['.NET 9', 'C#', 'Minimal API', 'SQLite', 'Gmail API'],
      year: 2025,
    },
    {
      imageUrl: '',
      title: 'CS2TS',
      description:
        'A developer tool that converts C# models into TypeScript interfaces and compares differences between them. Built with Angular 19+, Signals, and Angular Material, it keeps backend and frontend models perfectly in sync.',
      githubUrl: 'https://github.com/amrohan/CS2TS',
      githubStars: 1,
      liveDemoUrl: 'https://csts.pages.dev',
      articleUrl: '',
      tags: ['C#', 'TypeScript', 'Angular', 'Model Converter'],
      year: 2025,
    },
    {
      imageUrl: '',
      title: 'Migro',
      description:
        'A CLI tool for managing role-based authorization in .NET projects. It scans C# controllers, maps endpoints to a CSV, and updates authorization attributes automatically, making security audits faster and easier.',
      githubUrl: 'https://github.com/amrohan/migro',
      githubStars: 0,
      liveDemoUrl: '',
      articleUrl: '',
      tags: ['C#', 'CLI Tool', 'Authorization Management'],
      year: 2025,
    },
    {
      imageUrl: '',
      title: 'Go Stream',
      description:
        'A lightweight, self-hostable media player written in Go. It lets users upload and stream their own content, providing a simple yet powerful solution for personal media hosting and streaming.',
      githubUrl: 'https://github.com/amrohan/Go-Stream',
      githubStars: 0,
      liveDemoUrl: '',
      articleUrl: '',
      tags: ['Go', 'Media Player', 'Self-hosted', 'Streaming'],
      year: 2025,
    },
    {
      imageUrl: 'https://github.com/amrohan/dotcal/blob/main/public/preview.png',
      title: 'Dotcal',
      description:
        'A minimal dot-calendar app that represents the year as a grid of days. Each dot signifies a day, with the current one highlighted. Its clean, intuitive design makes time tracking visually simple.',
      githubUrl: 'https://github.com/amrohan/dotcal',
      githubStars: 0,
      liveDemoUrl: 'https://dotcal.vercel.app',
      articleUrl: '',
      tags: ['Next.js', 'TypeScript', 'Tailwind CSS'],
      year: 2025,
    },
    {
      imageUrl: 'https://res.cloudinary.com/amrohan/image/upload/v1757511898/Portfolio/memora.webp',
      title: 'Memora',
      description:
        'A sleek bookmark manager to organize and access your favorite links. Built with Angular, it supports PWA features, Web Share API, and works seamlessly across devices.',
      githubUrl: 'https://github.com/amrohan/memora',
      githubStars: 0,
      liveDemoUrl: 'https://memora.pages.dev',
      articleUrl: 'https://github.com/amrohan/memora/blob/main/README.md',
      tags: ['Angular', 'Nodejs', 'PWA', 'Sqlite', 'Web Share API'],
      year: 2024,
    },
    {
      imageUrl: 'timeline.webp',
      title: 'Timeline',
      description:
        'A web app to curate and share life’s moments in a visual timeline. Users can add events with images, titles, and dates, then browse them in a sleek, chronological, and shareable interface.',
      githubUrl: 'https://github.com/amrohan/timeline',
      githubStars: 1,
      liveDemoUrl: 'https://vangu.pages.dev',
      articleUrl: 'https://github.com/amrohan/timeline/blob/main/README.md',
      tags: ['Angular 17', 'Firebase', 'Firestore', 'Firebase Auth'],
      year: 2024,
    },
    {
      imageUrl: 'https://github.com/amrohan/notebook/raw/main/static/preview.png',
      title: 'Notebook',
      description:
        'A lightweight note-taking app built with SvelteKit and Dexie.js. It stores notes offline in IndexedDB, and supports creating, saving, importing, and exporting notes directly in the browser.',
      githubUrl: 'https://github.com/amrohan/notebook',
      githubStars: 0,
      liveDemoUrl: 'https://roro.pages.dev',
      articleUrl: '',
      tags: ['SvelteKit', 'Dexie.js', 'IndexedDB', 'Note-taking', 'Web App'],
      year: 2023,
    },
    {
      imageUrl: '',
      title: 'Navami',
      description:
        'An internal recipe management tool for both admins and users. Admins can add and update recipes, while users browse and track them. Built with Blazor and SQL, it streamlines team workflows.',
      githubUrl: 'https://github.com/amrohan/navami',
      githubStars: 0,
      liveDemoUrl: '',
      articleUrl: '',
      tags: ['C#', 'Blazor', 'SQL', 'Internal Tool', 'Recipe Management', 'Web App'],
      year: 2023,
    },
    {
      imageUrl: '',
      title: 'Cloudinary Transformation',
      description:
        'A fun web-based tool for experimenting with real-time webcam filters. Built on Next.js and Cloudinary, it allows users to apply, preview, and tweak image effects in a simple browser UI.',
      githubUrl: 'https://github.com/amrohan/Cloudinary-Transformation',
      githubStars: 0,
      liveDemoUrl: 'https://cloudinary-transformation.vercel.app',
      articleUrl: '',
      tags: ['Next.js', 'Cloudinary', 'Image Filters', 'Web App'],
      year: 2023,
    },

    {
      imageUrl: '',
      title: 'Dev News',
      description:
        'A modern tech news platform powered by Next.js, Prisma, and MongoDB. It provides curated developer updates and integrates with a Telegram bot for real-time, chat-based news delivery.',
      githubUrl: 'https://github.com/amrohan/DevNews-Frontend',
      githubStars: 2,
      liveDemoUrl: 'https://devxnews.netlify.app',
      articleUrl: '',
      tags: ['Next.js', 'Prisma', 'MongoDB', 'Telegram Bot'],
      year: 2022,
    },
    {
      imageUrl: '',
      title: 'Chat Bot',
      description:
        'A is a simple Telegram bot that automatically answers to people when they communicate with it, as well as providing new recent news articles from the tldr and dev.to pages.',
      githubUrl: 'https://github.com/amrohan/ChatBot',
      githubStars: 4,
      liveDemoUrl: 'https://t.me/amrohan_bot',
      articleUrl: 'https://github.com/amrohan/ChatBot/blob/main/readme.md',
      tags: ['Python', 'Telegram Bot', 'Web Scraping', 'News Aggregator'],
      year: 2022,
    },
    {
      imageUrl: '',
      title: 'Chathub',
      description:
        'An open-source real-time chat app built with React and Firebase. It enables users to join rooms, exchange messages, and engage in live conversations.',
      githubUrl: 'https://github.com/amrohan/Chat-Hub',
      githubStars: 1,
      liveDemoUrl: 'https://chathub.gq',
      articleUrl: '',
      tags: ['React.js', 'Firebase', 'Tailwind CSS', 'Real-time Chat'],
      year: 2021,
    },
    {
      imageUrl: '',
      title: 'Linktree Alternative',
      description:
        'A free alternative to Linktree that creates customizable landing pages for multiple links. Lightweight, responsive, and perfect for sharing all your profiles or projects with a single URL.',
      githubUrl: 'https://github.com/amrohan/LinkTree-Alternative',
      githubStars: 14,
      liveDemoUrl: 'https://amrohan.github.io/LinkTree-Alternative/templates/darktheme.html',
      articleUrl: 'https://github.com/amrohan/timeline/blob/main/README.md',
      tags: ['HTML', 'CSS'],
      year: 2021,
    },
  ]);

  sortedProjectsByYear = computed(() => {
    const grouped = this.projectData().reduce((acc, project) => {
      const year = project.year;
      if (!acc[year]) {
        acc[year] = [];
      }
      acc[year].push(project);
      return acc;
    }, {} as Record<number, ProjectModel[]>);

    return Object.keys(grouped)
      .map(Number)
      .sort((a, b) => b - a)
      .map((year) => ({
        year: year,
        projects: grouped[year],
      }));
  });
}
