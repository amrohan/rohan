export interface ProjectModel {
  title: string;
  description: string;
  githubUrl: string;
  githubStars: number;
  liveDemoUrl: string;
  articleUrl: string;
  packageUrl: string;
  downloadCount: number;
  tags: string[];
  year: number;
  createdAt: string;
}

export interface GithubRepo {
  name: string;
  description: string;
  html_url: string;
  homepage: string;
  stargazers_count: number;
  created_at: string;
  language: string;
  topics: string[];
}
