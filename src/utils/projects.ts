export interface ProjectFrontmatter {
  title: string;
  description: string;
  category: string;
  status: 'completed' | 'in-progress' | 'planning';
  technologies: string[];
  color: string;
  link?: string;
  github?: string;
  date: string;
}

export interface Project {
  slug: string;
  frontmatter: ProjectFrontmatter;
  content: string;
}

export function getAllProjects(): Project[] {
  // TODO: Implement actual project loading from content collections or CMS
  return [];
}

export function getProjectsByCategory(): Record<string, Project[]> {
  const projects = getAllProjects();
  const categories: Record<string, Project[]> = {};
  
  projects.forEach(project => {
    const category = project.frontmatter.category;
    if (!categories[category]) {
      categories[category] = [];
    }
    categories[category].push(project);
  });
  
  return categories;
}

export function getProjectBySlug(_slug: string): Project | null {
  // TODO: Implement actual project loading from content collections or CMS
  return null;
}