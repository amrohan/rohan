import { Component, computed, inject } from '@angular/core';
import { ProjectCard } from './project-card';
import { GithubService } from '../github';
import { ProjectModel } from '../models/project.model';

@Component({
  selector: 'app-project',
  standalone: true,
  imports: [ProjectCard],
  templateUrl: './project.html',
  styleUrls: ['./project.css'],
})
export class Project {
  private readonly github = inject(GithubService);

  readonly projects = this.github.projects;

  readonly sortedProjectsByYear = computed(() => {
    const grouped = this.projects().reduce(
      (acc, project) => {
        const year = project.year;

        (acc[year] ??= []).push(project);

        return acc;
      },
      {} as Record<number, ProjectModel[]>,
    );

    return Object.keys(grouped)
      .map(Number)
      .sort((a, b) => b - a)
      .map((year) => ({
        year,
        projects: grouped[year].sort(
          (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime(),
        ),
      }));
  });
}
