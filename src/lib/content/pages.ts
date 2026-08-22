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
		body: 'Tell us what you want to make and where you need help.',
		actionLabel: 'Contact us'
	}
} as const;

export const careersCopy = {
	hero: {
		label: 'Careers',
		title: 'Careers at Hellocraft Studios.',
		body: 'When we are hiring, current openings and application details will be listed here.'
	},
	openings: {
		title: 'Open positions',
		emptyState: "We don't have any public openings right now."
	},
	general: {
		label: 'Careers',
		title: 'Build Minecraft projects with us.',
		body: 'Each real opening will describe the work, skills, and responsibilities for that role.'
	},
	application: {
		title: 'How to apply',
		body: 'Each opening will include the role details and how to apply.'
	}
} as const;

export const contactCopy = {
	hero: {
		label: 'Contact',
		title: 'Tell us about your project.',
		body: 'For Minecraft projects, partnerships, or other business questions, this is the place to reach Hellocraft.'
	},
	methods: {
		title: 'Contact details',
		emptyState: 'Public contact details will be added here before launch.'
	},
	inquiry: {
		title: 'What should you include?',
		body: 'A useful first message can include what you want to make, who it is for, and any constraints you already know.'
	}
} as const;

export const footerCopy = {
	statement: 'Hellocraft Studios — a game studio focused on Minecraft.'
} as const;

export const aboutExperienceItems = demoAboutExperienceItems;
export const careerOpenings = demoCareerOpenings;

// Add only approved real public contact channels.
export const contactMethods: LinkItem[] = [];
