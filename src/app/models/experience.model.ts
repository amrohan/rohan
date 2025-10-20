export interface ExperienceModel {
  id: string;
  title: string;
  company: string;
  description: string;
  startDate: string;
  endDate: string;
  location: string;
  type: 'Full-time' | 'Part-time' | 'Contract' | 'Freelance';
  skills: string[];
  achievements: string[];
  responsibilities: Array<{
    title: string;
    description: string;
    icon: string;
  }>;
}
