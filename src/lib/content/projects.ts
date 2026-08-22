import type { ProjectEntry } from './types';

// SAMPLE PORTFOLIO DATA
// These fictional entries are used only to preview the portfolio layout.
// Replace them with approved Hellocraft projects before launch.
//
// PORTFOLIO LISTING RULE — APPROVED
// Keep each listing simple: project name + short description + media + View project.
// Client / partner and year are optional and should appear only when public, confirmed, and useful.
// Do not add tags, categories, Work Areas, role labels, or technical metadata to the listing by default.
//
// SHORT DESCRIPTION RULE — APPROVED
// Explain what the project is + what players/visitors do or experience.
// Lead with the project itself, not Hellocraft's contribution or a marketing claim.
// Keep it to one concise sentence and write only from approved real project information.
// Avoid generic claims such as "innovative", "immersive", or "custom solution".
//
// PROJECT DETAIL STRUCTURE — APPROVED
// Keep one clear information order when the evidence exists:
// Project -> Our Role -> Player Experience -> Results -> Credits / Links.
// The Project explains what the project is and the useful context around it.
// Our Role explains what Hellocraft actually designed, built, developed, or otherwise handled.
// Do not create a separate permanent "What We Made" section; that information belongs in Our Role.
// Player Experience, Results, Credits, and Links are optional and appear only when real approved data supports them.
// Not every project needs every section, and short showcases are valid.
// Follow docs/foundation/08-writing-style.md and do not invent missing facts.

export const projects: ProjectEntry[] = [
	{
		slug: 'sample-adventure-world',
		title: 'Sample Adventure World',
		summary:
			'A fictional Minecraft adventure used to preview how exploration, story, and player progression can be presented on the site.',
		featured: true,
		projectContext: [
			'This is a sample project used only to preview the portfolio page. Real project information and media will replace it before launch.',
			'The final project pages can stay short or include more detail depending on the material available for each project.'
		],
		ourRole: ['Sample role: world and level design', 'Sample role: gameplay planning'],
		playerExperience: [
			'This sample section shows how a project can explain the intended player experience without requiring every project to use the same format.'
		]
	},
	{
		slug: 'sample-multiplayer-game',
		title: 'Sample Multiplayer Game',
		summary:
			'A fictional multiplayer game used to preview objectives, rounds, player feedback, and project information.',
		featured: true,
		projectContext: [
			'This sample keeps the page short to show that not every portfolio project needs a long case study.'
		],
		ourRole: ['Sample role: gameplay and level development']
	},
	{
		slug: 'sample-environment-build',
		title: 'Sample Environment Build',
		summary:
			'A fictional environment project used to preview landmarks, atmosphere, traversal, and visual presentation.',
		featured: false,
		projectContext: [
			'This sample shows the simplest project-page format: a short introduction, media, and a concise project overview.'
		]
	}
];

export const featuredProjects = projects.filter((project) => project.featured);

export function getProjectBySlug(slug: string): ProjectEntry | undefined {
	return projects.find((project) => project.slug === slug);
}
