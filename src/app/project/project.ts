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
        'A modern, high-performance file manager for the terminal. Built with .NET and Spectre.Console for a fluid, visually-rich experience.',
      githubUrl: 'https://github.com/amrohan/termix',
      githubStars: 110,
      liveDemoUrl: '',
      articleUrl: 'https://github.com/amrohan/termix/blob/main/README.md',
      tags: ['.NET', 'C#', 'CLI', 'Spectre.Console', 'Developer Tool'],
      year: 2025,
    },
    {
      imageUrl: '',
      title: 'CS2TS',
      description:
        'A developer tool that converts C# models to TypeScript interfaces and compares differences between them. Built with Angular 19+, Signals, and Angular Material, it streamlines the process of keeping your backend and frontend models in sync.',
      githubUrl: 'https://github.com/amrohan/CS2TS',
      githubStars: 1,
      liveDemoUrl: 'https://csts.pages.dev',
      articleUrl: '',
      tags: ['C#', 'TypeScript', 'Angular', 'Model Converter'],
      year: 2025,
    },

    {
      imageUrl:
        'https://res.cloudinary.com/amrohan/image/upload/v1757511898/Portfolio/echomail.webp',
      title: 'Echomail',
      description:
        'Lightning-fast email relay API that just works - JWT auth, contact forms, and Gmail SMTP in one tiny package. Built with .NET 9 Minimal API for portfolios, landing pages, and internal tools.',
      githubUrl: 'https://github.com/amrohan/echomail',
      githubStars: 4,
      liveDemoUrl: '',
      articleUrl: 'https://github.com/amrohan/echomail/blob/main/README.md',
      tags: ['.NET 9', 'C#', 'Minimal API', 'SQLite', 'Gmail API'],
      state: 'object-contain',
      year: 2025,
    },
    {
      imageUrl: '',
      title: 'Migro',
      description:
        'A command-line tool that scans C# controller endpoints and updates their authorization attributes. Migro streamlines managing role-based authorization by bridging a simple CSV file with your source code, offering both a scanner to discover endpoints and an updater to apply changes.',
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
        'A self-hostable media player that allows users to upload and stream content. Built entirely in Go, it provides a lightweight and efficient solution for managing and streaming media on your own server.',
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
        'A minimalistic dot calendar app that visually represents the entire year as a grid of dots. Each dot signifies a day, with the current day highlighted for easy reference. The interface is clean, intuitive, and designed for simplicity.',
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
        'A sleek, user-friendly bookmark manager designed to help you organize, categorize, and quickly access your favorite links. Built with Angular and featuring PWA support, Web Share API integration, and responsive design.',
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
        "A sleek web app for effortlessly curating and sharing life's moments. Organize events with images, titles, and dates in a visually engaging chronological timeline interface.",
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
        'A lightweight, self-hosted note-taking web application built with SvelteKit and Dexie.js. It utilizes IndexedDB for offline storage, allowing users to create, save, import, and export notes seamlessly within their browser.',
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
        'An in-house admin and user tool used by the company for efficient recipe management. Admins can manage and update recipes, while users can browse and track them, streamlining workflow and ensuring consistency across the team.',
      githubUrl: 'https://github.com/amrohan/navami',
      githubStars: 0,
      liveDemoUrl: '',
      articleUrl: '',
      tags: ['C#', 'Blazor', 'SQL', 'Internal Tool', 'Recipe Management', 'Web App'],
      year: 2023,
    },

    {
      imageUrl: '',
      title: 'Dev news',
      description:
        'A modern, responsive web application to deliver the latest tech news. Built with Next.js 13, Prisma, and MongoDB, it also integrates a Telegram bot for curated news updates directly in chat.',
      githubUrl: 'https://github.com/amrohan/DevNews-Frontend',
      githubStars: 2,
      liveDemoUrl: 'https://devxnews.netlify.app',
      articleUrl: '',
      tags: ['Next.js', 'Prisma', 'MongoDB', 'Telegram Bot'],
      year: 2022,
    },
    {
      imageUrl: '',
      title: 'Cloudinary transformation',
      description:
        'A web-based tool that allows users to apply various filters to webcam images. Built with Next.js, it leverages Cloudinary for real-time image transformations, providing an intuitive interface for experimenting with different effects.',
      githubUrl: 'https://github.com/amrohan/Cloudinary-Transformation',
      githubStars: 0,
      liveDemoUrl: 'https://cloudinary-transformation.vercel.app',
      articleUrl: '',
      tags: ['Next.js', 'Cloudinary', 'Image Filters', 'Web App'],
      year: 2023,
    },

    {
      imageUrl: '',
      title: 'Chathub',
      description:
        'A free, open-source real-time chat room built with React.js and Firebase. Chat-Hub allows users to join chat rooms, send messages, and engage in live conversations with an intuitive interface.',
      githubUrl: 'https://github.com/amrohan/Chat-Hub',
      githubStars: 1,
      liveDemoUrl: 'https://chathub.gq',
      articleUrl: '',
      tags: ['React.js', 'Firebase', 'Tailwind CSS', 'Real-time Chat'],
      year: 2021,
    },
    {
      imageUrl: '',
      title: 'Linktree',
      description:
        'A lightweight and free alternative to Linktree that allows you to create a simple, customizable landing page for all your links. Perfect for sharing multiple links through a single URL with a clean and modern design.',
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
