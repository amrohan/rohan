import { Component, input } from '@angular/core';
import { ProjectModel } from '../models/project.model';

@Component({
  selector: 'app-project-card',
  standalone: true,
  template: `
    <a [href]="project().githubUrl" class="flex flex-col justify-center items-start gap-1.5 ">
      <h1 class="text-lg md:text-2xl hover:border-b border-green-600">{{ project().title }}</h1>
      <p class="text-neutral-400 ">{{ project().description }}</p>
    </a>
    <div class="flex justify-end items-center gap-10 h-16">
      <!--Github   -->
      <a
        [href]="project().githubUrl"
        class="text-subtle hover:text-blue-700 dark:hover:text-blue-300 flex justify-center items-center gap-2"
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
          class="size-5 text-current"
        >
          <path
            d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"
          />
          <path d="M9 18c-4.51 2-5-2-7-2" />
        </svg>
        @if(project().githubStars){
        <span>{{ project().githubStars }}</span>
        }
      </a>

      @if(project().liveDemoUrl){
      <a
        [href]="project().liveDemoUrl"
        class="text-subtle hover:text-blue-700 dark:hover:text-blue-300 flex justify-center items-center gap-2"
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
          class="size-5 text-current"
        >
          <path d="M15 3h6v6" />
          <path d="M10 14 21 3" />
          <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
        </svg>
        demo
      </a>
      }
    </div>
  `,
})
export class ProjectCard {
  project = input.required<ProjectModel>();
}
