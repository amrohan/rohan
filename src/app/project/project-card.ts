import { AfterViewInit, Component, ElementRef, inject, input, signal } from '@angular/core';
import { ProjectModel } from '../models/project.model';

@Component({
  selector: 'app-project-card',
  standalone: true,
  template: `
    <div
      class="flex flex-col justify-center items-start gap-1.5"
      [class.animate-fade-in-up]="isVisible()"
    >
      <a [href]="project().githubUrl">
        <h1 class="text-lg md:text-2xl dark:hover:text-shadow-neutral-50">{{ project().title }}</h1>
        <p
          class="text-subtle mt-3 hover:text-shadow-neutral-800 dark:hover:text-shadow-neutral-50 hover:opacity-90"
        >
          {{ project().description }}
        </p>
      </a>

      <div class="flex justify-start items-center gap-6 h-16 w-full">
        <!-- Download Count -->
        @if (project().downloadCount) {
        <div class="relative group">
          <a
            title="Download Count"
            [href]="project().packageUrl"
            class="text-subtle hover:text-[var(--primary)] flex justify-center items-center gap-2"
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
              <path d="M12 15V3" />
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <path d="m7 10 5 5 5-5" />
            </svg>
            {{ project().downloadCount }}K
          </a>
          <!-- Tooltip -->
          <div
            class="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 bg-gray-800 text-white text-xs rounded-md py-1 px-2 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap"
          >
            View package and downloads
          </div>
        </div>
        }

        <!-- GitHub + Demo Links -->
        <div class="flex justify-end items-center gap-6">
          <!-- GitHub -->
          <div class="relative group">
            <a
              title="GitHub Repo"
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
              @if (project().githubStars) {
              <span>{{ project().githubStars }}</span>
              }
            </a>
            <!-- Tooltip -->
            <div
              class="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 bg-gray-800 text-white text-xs rounded-md py-1 px-2 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap"
            >
              View on GitHub
            </div>
          </div>

          <!-- Live Demo -->
          @if (project().liveDemoUrl) {
          <div class="relative group">
            <a
              title="Live Demo"
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
            </a>
            <!-- Tooltip -->
            <div
              class="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 bg-gray-800 text-white text-xs rounded-md py-1 px-2 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap"
            >
              Open Live Demo
            </div>
          </div>
          }
        </div>
      </div>
    </div>
  `,
})
export class ProjectCard implements AfterViewInit {
  project = input.required<ProjectModel>();
  isVisible = signal(false);
  el = inject(ElementRef);

  ngAfterViewInit() {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          this.isVisible.set(true);
          observer.unobserve(this.el.nativeElement);
        }
      },
      { threshold: 0.1 }
    );
    observer.observe(this.el.nativeElement);
  }
}
