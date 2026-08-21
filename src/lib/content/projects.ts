import type { ProjectEntry } from './types';

// DEVELOPMENT-ONLY PROJECT DATA
// These entries exist solely to develop Work/Home/project-detail layouts.
// They are not Hellocraft portfolio evidence and must be replaced through the content-intake process.

export const projects: ProjectEntry[] = [
	{
		slug: 'demo-project-01',
		title: 'Concept World Study',
		summary:
			'A story-led Minecraft concept shaped around exploration, environmental storytelling, and clear player progression.',
		featured: true,
		contribution: [
			'Demo contribution item — replace with Hellocraft’s verified role.',
			'Demo contribution item — used only to test repeated list content.'
		],
		sections: [
			{
				id: 'overview',
				title: 'Project overview',
				body: [
					'This is temporary project-detail copy. It provides a realistic paragraph length so the editorial layout can be prepared before real project evidence is supplied.',
					'The final version may become a short showcase or a deeper case study depending on the actual project material.'
				]
			},
			{
				id: 'experience',
				title: 'Experience direction',
				body: [
					'This second section exists to exercise the flexible project-section model. It does not describe a real Hellocraft project.',
					'Replace these paragraphs with approved facts, process, challenges, outcomes, or supporting evidence when available.'
				]
			}
		]
	},
	{
		slug: 'demo-project-02',
		title: 'Multiplayer Gameplay Study',
		summary:
			'A multiplayer-focused development concept exploring readable objectives, replayable rounds, and clear player feedback.',
		featured: true,
		contribution: ['Demo contribution — replace with a verified project responsibility.'],
		sections: [
			{
				id: 'overview',
				title: 'Overview',
				body: [
					'Temporary copy for the second demo project. Its purpose is structural variation rather than content authority.'
				]
			}
		]
	},
	{
		slug: 'demo-project-03',
		title: 'Environment Study',
		summary:
			'A world-design concept focused on memorable landmarks, traversal, atmosphere, and a clear sense of place.',
		featured: false,
		sections: [
			{
				id: 'overview',
				title: 'Overview',
				body: [
					'This project is intentionally minimal to prove that the detail architecture does not require every project to become a long case study.'
				]
			}
		]
	}
];

export const featuredProjects = projects.filter((project) => project.featured);

export function getProjectBySlug(slug: string): ProjectEntry | undefined {
	return projects.find((project) => project.slug === slug);
}
