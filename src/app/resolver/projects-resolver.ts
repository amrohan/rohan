import { inject } from '@angular/core';
import { ResolveFn } from '@angular/router';
import { ProjectModel } from '../models/project.model';
import { GithubService } from '../github';

export const projectsResolver: ResolveFn<ProjectModel[]> = () => {
  return inject(GithubService).getProjects();
};
