import projectJson from '../data/projects.json';

export interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  images: string[];
  year: string;
  client: string;
  location: string;
}

export const projects: Project[] = projectJson;

