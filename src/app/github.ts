import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable, shareReplay } from 'rxjs';
import { ProjectModel } from './models/project.model';

@Injectable({
  providedIn: 'root',
})
export class GithubService {
  private readonly http = inject(HttpClient);

  private projects$?: Observable<ProjectModel[]>;
  private lastFetch = 0;

  private readonly showcaseProjects = new Set([
    1074843028, 1028452453, 1022164471, 870722968, 997975839, 1014685479, 944529851, 937488987,
    776784671, 767060651, 857828741, 469616202, 520517279, 395011585, 395668881, 381775090,
  ]);

  getProjects() {
    const CACHE_TIME = 5 * 60 * 1000;

    if (!this.projects$ || Date.now() - this.lastFetch > CACHE_TIME) {
      this.lastFetch = Date.now();

      this.projects$ = this.http
        .get<any[]>(
          'https://api.github.com/users/amrohan/repos?sort=updated&direction=desc&per_page=100',
          {
            headers: {
              Accept: 'application/vnd.github+json',
            },
          },
        )
        .pipe(
          map((repos) =>
            repos
              .filter((r) => !r.fork && this.showcaseProjects.has(r.id))
              .map((repo) => ({
                title: repo.name,
                description: repo.description ?? '',
                githubUrl: repo.html_url,
                githubStars: repo.stargazers_count,
                liveDemoUrl: repo.homepage || '',
                articleUrl: `${repo.html_url}/blob/main/README.md`,
                packageUrl: '',
                downloadCount: 0,
                tags: repo.topics ?? (repo.language ? [repo.language] : []),
                createdAt: repo.created_at,
                year: new Date(repo.created_at).getFullYear(),
              })),
          ),
          shareReplay({
            bufferSize: 1,
            refCount: false,
          }),
        );
    }
    return this.projects$;
  }
}
