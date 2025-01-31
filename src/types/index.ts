export type Project = {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
};

export type Skill = {
  name: string;
  icon: string;
  category: 'frontend' | 'backend' | 'tools';
};