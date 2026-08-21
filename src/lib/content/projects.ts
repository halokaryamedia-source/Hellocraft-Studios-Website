import type { ProjectEntry } from './types';

export const projects: ProjectEntry[] = [];

export const featuredProjects = projects.filter((project) => project.featured);

export function getProjectBySlug(slug: string): ProjectEntry | undefined {
	return projects.find((project) => project.slug === slug);
}
