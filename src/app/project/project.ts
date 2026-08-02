import { Component, computed, inject, input } from '@angular/core';
import { ProjectCard } from './project-card';
import { ProjectModel } from '../models/project.model';

@Component({
  selector: 'app-project',
  standalone: true,
  imports: [ProjectCard],
  templateUrl: './project.html',
  styleUrls: ['./project.css'],
})
export class Project {
  readonly projects = input.required<ProjectModel[]>();

  readonly sortedProjectsByYear = computed(() => {
    const grouped = this.projects().reduce(
      (acc, project) => {
        (acc[project.year] ??= []).push(project);
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
