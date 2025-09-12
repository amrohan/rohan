import { Component, input } from '@angular/core';
import { ProjectModel } from '../models/project.model';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-project-card',
  standalone: true,
  imports: [NgClass],
  template: `
    <div
      class="group grid w-full grid-cols-1 overflow-hidden rounded-xl border border-accent/20 bg-background shadow-lg transition-all duration-300 ease-in-out hover:shadow-2xl md:grid-cols-5"
    >
      <!-- Project Image -->
      <div class="relative col-span-1 md:col-span-2 h-60 w-full">
        <img
          [src]="project().imageUrl"
          [alt]="project().title + ' Screenshot'"
          class="h-full w-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
          [ngClass]="project().state ? project().state : 'object-fill'"
        />
        <div
          class="absolute inset-0 bg-gradient-to-r from-background via-background/50 to-transparent md:from-transparent"
        ></div>
      </div>

      <!-- Card Content -->
      <div class="col-span-1 flex flex-col justify-center p-6 md:col-span-3">
        <!-- Card Header: Title and GitHub Link -->
        <div class="flex items-start justify-between gap-4">
          <h3 class="text-2xl font-bold text-text">{{ project().title }}</h3>

          @if (project().githubUrl) {
          <a
            [href]="project().githubUrl"
            target="_blank"
            rel="noopener noreferrer"
            class="flex-shrink-0 text-sm flex text-yellow-900 border rounded-lg px-4 py-2 dark:text-yellow-200  justify-center gap-1  transition-colors hover:text-primary"
            aria-label="GitHub Repository"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="size-5"
            >
              <path
                d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"
              />
              <path d="M9 18c-4.51 2-5-2-7-2" />
            </svg>
            @if(project().githubStars ){
            {{ project().githubStars }}
            }
          </a>
          }
        </div>

        <p class="mt-2 text-sm text-text/70 line-clamp-3">
          {{ project().description }}
        </p>

        <!-- Technology Tags -->
        <div class="mt-4 flex flex-wrap items-center gap-2">
          @for (tag of project().tags; track tag) {
          <span class="rounded-full bg-accent/10 px-3 py-1 text-xs font-semibold text-accent"
            >#{{ tag }}</span
          >
          }
        </div>

        <!-- Action Buttons -->
        <div class="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
          <a
            [href]="project().liveDemoUrl"
            target="_blank"
            rel="noopener noreferrer"
            class="flex items-center justify-center gap-2 rounded-lg bg-primary px-4 py-2.5 text-center text-sm font-semibold text-background transition-colors hover:bg-primary/80 dark:text-black"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
              <polyline points="15 3 21 3 21 9" />
              <line x1="10" x2="21" y1="14" y2="3" />
            </svg>
            Live Demo
          </a>
          <a
            [href]="project().articleUrl"
            target="_blank"
            rel="noopener noreferrer"
            class="flex items-center justify-center gap-2 rounded-lg bg-accent/20 px-4 py-2.5 text-center text-sm font-semibold text-accent transition-colors hover:bg-accent hover:text-text"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20" />
            </svg>
            Read Article
          </a>
        </div>
      </div>
    </div>
  `,
})
export class ProjectCard {
  project = input.required<ProjectModel>();
}
