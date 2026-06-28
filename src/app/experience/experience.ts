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
      id: 'exp-2',
      title: 'Software Engineer',
      company: 'TEBillion Systems Pvt. Ltd.',
      linkedinUrl: 'https://www.linkedin.com/company/tebillion/',
      websiteUrl: 'https://www.tebillion.com',
      description:
        'Developing and modernizing a cloud-based CRM platform using a microservices architecture. Contributing to large-scale frontend and backend systems, migrating legacy modules to modern technologies, and building customer-facing integrations that improve lead generation and business workflows.',
      startDate: 'April 2026',
      endDate: 'Present',
      location: 'Mumbai, India',
      type: 'Full-time',
      skills: [
        'Angular',
        'TypeScript',
        'Native Federation',
        'Micro Frontends',
        'Angular Elements',
        'C#',
        '.NET',
        'ASP.NET Core',
        'Microservices',
        'gRPC',
        'CQRS',
        'MongoDB',
        'MongoDB Compass',
        'MySQL',
        'OData',
        'Amazon SNS',
        'AWS',
        'CodeCommit',
        'Docker',
        'Linux',
        'Git',
        'REST APIs',
        'EF Core',
      ],
      achievements: [
        'Built Web Connect, an end-to-end website form integration platform for CRM lead generation.',
        'Designed backend services and APIs for dynamic form generation, submission processing, and customer verification.',
        'Contributed to migrating legacy modules to newer Angular and .NET versions while resolving compatibility and performance issues.',
        'Developed scalable microservice-based features using gRPC communication and the CQRS architectural pattern.',
      ],
      responsibilities: [
        {
          title: 'Modern Architecture & Migration',
          description:
            'Modernize legacy applications by migrating existing modules to the latest Angular and .NET versions, resolving technical debt, improving maintainability, and fixing migration-related issues.',
          icon: 'layout',
        },
        {
          title: 'Micro Frontends & Microservices',
          description:
            'Develop features using a Micro Frontend architecture powered by Native Federation and build backend microservices communicating through gRPC while following the CQRS pattern for scalable and maintainable business applications.',
          icon: 'database',
        },
        {
          title: 'Web Connect Platform',
          description:
            'Built Web Connect, a complete website-to-CRM integration that dynamically generates embeddable Angular Elements for customer websites. The platform serves configurable forms through generated JSON, captures submissions, automatically creates CRM leads, supports URL-based tracking parameters, and verifies mobile numbers using Amazon SNS (Simple Notification Service). Designed and implemented the complete frontend and backend workflow using Angular and .NET.',
          icon: 'users',
        },
      ],
    },
    {
      id: 'exp-1',
      title: 'Software Engineer',
      company: 'Seagull Victsoft Private Ltd.',
      description:
        'A hybrid role combining hands on development with product leadership. Responsible for leading the frontend team, architecting scalable backend systems, and aligning technical strategy with stakeholder objectives to deliver robust business applications.',
      startDate: 'May 2022',
      endDate: 'March 2026',
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
