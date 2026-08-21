import type { ProjectEntry } from './types';

// DEVELOPMENT-ONLY PROJECT DATA
// These entries exist solely to develop Work/Home/project-detail layouts.
// They are not Hellocraft portfolio evidence and must be replaced through the content-intake process.

export const projects: ProjectEntry[] = [
	{
		slug: 'demo-project-01',
		title: 'Demo Project 01',
		summary:
			'A temporary project entry used to establish card proportions, title hierarchy, summary length, and the selected-work rhythm.',
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
		title: 'Demo Project 02 — Longer Working Title',
		summary:
			'A longer temporary project summary used to test card wrapping, different title lengths, and portfolio pacing across responsive layouts.',
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
		title: 'Demo Project 03',
		summary:
			'A compact development-only project entry used to make the full Work index feel populated before real portfolio data is available.',
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
