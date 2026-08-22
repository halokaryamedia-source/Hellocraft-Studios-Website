import type { ProjectEntry } from './types';

// SAMPLE PORTFOLIO DATA
// These fictional entries are used only to preview the portfolio layout.
// Replace them with approved Hellocraft projects before launch.

export const projects: ProjectEntry[] = [
	{
		slug: 'sample-adventure-world',
		title: 'Sample Adventure World',
		summary:
			'A fictional Minecraft adventure used to preview how exploration, story, and player progression can be presented on the site.',
		featured: true,
		contribution: ['Sample role: world and level design', 'Sample role: gameplay planning'],
		sections: [
			{
				id: 'overview',
				title: 'Overview',
				body: [
					'This is a sample project used only to preview the portfolio page. Real project information and media will replace it before launch.',
					'The final project pages can stay short or include more detail depending on the material available for each project.'
				]
			},
			{
				id: 'experience',
				title: 'Player experience',
				body: [
					'This sample section shows how a project can explain the intended player experience without requiring every project to use the same format.'
				]
			}
		]
	},
	{
		slug: 'sample-multiplayer-game',
		title: 'Sample Multiplayer Game',
		summary:
			'A fictional multiplayer game used to preview objectives, rounds, player feedback, and project information.',
		featured: true,
		contribution: ['Sample role: gameplay and level development'],
		sections: [
			{
				id: 'overview',
				title: 'Overview',
				body: [
					'This sample keeps the page short to show that not every portfolio project needs a long case study.'
				]
			}
		]
	},
	{
		slug: 'sample-environment-build',
		title: 'Sample Environment Build',
		summary:
			'A fictional environment project used to preview landmarks, atmosphere, traversal, and visual presentation.',
		featured: false,
		sections: [
			{
				id: 'overview',
				title: 'Overview',
				body: [
					'This sample shows the simplest project-page format: a short introduction, media, and a concise overview.'
				]
			}
		]
	}
];

export const featuredProjects = projects.filter((project) => project.featured);

export function getProjectBySlug(slug: string): ProjectEntry | undefined {
	return projects.find((project) => project.slug === slug);
}
