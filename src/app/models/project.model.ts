export interface ProjectModel {
  imageUrl: string;
  title: string;
  description: string;
  githubUrl: string;
  githubStars?: number; // Optional property
  liveDemoUrl: string;
  articleUrl: string;
  tags: string[];
  state?: string;
}
