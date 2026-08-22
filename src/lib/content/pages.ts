import { demoAboutExperienceItems, demoCareerOpenings } from './demo-data';
import type { LinkItem } from './types';

// DRAFT WEBSITE COPY
// All public copy in this file must follow docs/foundation/08-writing-style.md.
// Keep the voice direct, creator-led, Minecraft-native, and evidence-based.
// The working copy is tracked in docs/knowledge/content-draft.md.
// Replace or refine factual details when final company and portfolio material is approved.

// CANONICAL WORK AREAS
// Use these same four names everywhere: Home, About, project attribution, and internal documentation.
// Job titles are separate and must come from real hiring/project data; do not create a second role taxonomy.
export const workAreas = [
	{
		title: 'Game & Experience Design',
		body:
			'We shape the concept, gameplay, objectives, and player experience around what the project needs.'
	},
	{
		title: 'World & Level Design',
		body:
			'We design and build Minecraft worlds, environments, levels, and spaces around how players move and play.'
	},
	{
		title: 'Game Development',
		body:
			'We develop gameplay systems, mechanics, technical features, and the logic that makes each experience work.'
	},
	{
		title: '3D Art',
		body:
			'We create models, textures, and animation for custom Minecraft content when the project needs them.'
	}
] as const;

export const homeCopy = {
	hero: {
		label: 'Minecraft game studio',
		title: 'We make games and experiences in Minecraft.',
		body:
			'We work on games and adventures, as well as Minecraft projects for events and exhibitions.',
		primaryActionLabel: 'View portfolio'
	},
	portfolio: {
		title: 'Featured projects',
		body: "Minecraft projects we've worked on.",
		emptyState: 'Projects will be added here.',
		viewAllLabel: 'View portfolio'
	},
	whatWeDo: {
		label: 'What we do',
		title: 'We handle both the creative and technical sides of Minecraft projects.'
	},
	about: {
		label: 'About',
		title: "We're a studio focused on Minecraft.",
		body:
			'We make games and adventures, and also work on projects for events and exhibitions.',
		actionLabel: 'About Hellocraft'
	},
	contact: {
		label: 'Contact',
		title: 'Tell us about your Minecraft project.',
		body: "Tell us what you're working on and where we can help.",
		actionLabel: 'Contact us'
	}
} as const;

export const portfolioCopy = {
	hero: {
		label: 'Portfolio',
		title: "Projects we've worked on.",
		body: 'A closer look at what we made and our role in each project.'
	},
	emptyState: 'No projects have been published yet.'
} as const;

export const aboutCopy = {
	hero: {
		label: 'About',
		title: "We're a game studio focused on Minecraft.",
		body: 'We make games and adventures, and work on projects for events and exhibitions.'
	},
	whatWeDo: {
		label: 'What we do',
		title: 'We handle both the creative and technical sides of Minecraft projects.'
	},
	howWeWork: {
		label: 'How we work',
		title: 'We work around what each project needs.',
		body: 'We keep the creative and technical work connected throughout the project.'
	},
	experience: {
		title: 'Experience'
	},
	contact: {
		title: 'Planning a Minecraft project?',
		body: "Tell us what you're working on and where we can help.",
		actionLabel: 'Contact us'
	}
} as const;

export const careersCopy = {
	hero: {
		label: 'Careers',
		title: 'Join Hellocraft Studios.',
		body: "Open roles and application details will be posted here when we're hiring."
	},
	openings: {
		title: 'Open positions',
		emptyState: "We don't have any public openings right now."
	}
} as const;

// CAREERS APPLICATION RULE — APPROVED
// Keep this null unless there are real public openings and those openings share one
// approved application workflow. If each opening carries its own application link or
// instructions, keep this null and place the instructions with the real role instead.
// Do not invent an email address, form, Discord workflow, or recruitment process.
export const careerApplication: { title: string; body: string } | null = null;

export const contactCopy = {
	hero: {
		label: 'Contact',
		title: 'Tell us about your project.',
		body: "Tell us what you're working on and how we can help."
	},
	methods: {
		title: 'Contact details',
		emptyState: 'Public contact details will be added here before launch.'
	},
	inquiry: {
		title: 'What should you include?',
		body: "A short description of the project, who it's for, and where you need our help."
	}
} as const;

export const footerCopy = {
	statement: 'Games and experiences in Minecraft.'
} as const;

export const aboutExperienceItems = demoAboutExperienceItems;
export const careerOpenings = demoCareerOpenings;

// Add only approved real public contact channels.
export const contactMethods: LinkItem[] = [];
