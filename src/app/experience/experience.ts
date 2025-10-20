import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExperienceModel } from '../models/experience.model';

@Component({
  selector: 'app-work',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './experience.html',
  styleUrl: './experience.css',
})
export class Experience {
  experiences: ExperienceModel[] = [
    {
      id: 'exp-1',
      title: 'Software Developer Executive',
      company: 'Seagull Victsoft Private Ltd.',
      description:
        'A hybrid role combining hands on development with product leadership. Responsible for leading the frontend team, architecting scalable backend systems, and aligning technical strategy with stakeholder objectives to deliver robust business applications.',
      startDate: 'May 2022',
      endDate: 'Present',
      location: 'Mumbai, India',
      type: 'Full-time',
      skills: [
        'Angular',
        'NextJs',
        'TypeScript',
        'C#',
        '.NET Core',
        'NodeJs',
        'Mysql',
        'Sqlite',
        'Docker',
        'Linux',
        'EF Core',
        'Git',
        'SQL',
        'APIs',
        'Caddy',
        'Nginx',
        'Redux',
        'Ngrx',
        'Jotai',
        'Mui',
        'Mantine',
        'Angular Material',
        'Product Management',
        'Team Leadership',
      ],
      achievements: [
        'Won the official Next.js Hackathon hosted by Vercel.',
        'Architected a scalable frontend framework.',
        'Implemented secure authentication and notification systems.',
        'Managed the product roadmap with stakeholders.',
      ],
      responsibilities: [
        {
          title: 'Frontend Architecture & Leadership',
          description:
            'Directed the frontend team, established the architectural roadmap, and personally coded critical UI components to ensure high-quality, user-centric application delivery.',
          icon: 'layout',
        },
        {
          title: 'Backend & Infrastructure',
          description:
            'Engineered core backend services including a robust authentication system, a real-time notification engine, and performance-optimized APIs using .NET.',
          icon: 'database',
        },
        {
          title: 'Product Management & Strategy',
          description:
            'Led the product lifecycle by collaborating with stakeholders to gather requirements, define project scope, and translate business needs into actionable technical plans.',
          icon: 'users',
        },
      ],
    },
  ];
}
