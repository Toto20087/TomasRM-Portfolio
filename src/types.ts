export interface Project {
  id: number;
  title: string;
  description: string;
  category: 'development' | 'design' | 'video';
  image: string;
  technologies: string[];
  link?: string;
}

export interface Skill {
  name: string;
  level: number;
  category: 'development' | 'design' | 'video';
  icon: string;
}