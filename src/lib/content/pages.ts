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
		title: 'We build games and experiences in Minecraft.',
		body:
			'Hellocraft Studios designs and develops Minecraft projects across custom worlds, gameplay, technical systems, and 3D art.',
		primaryActionLabel: 'View portfolio'
	},
	portfolio: {
		title: 'Featured projects',
		body: 'A selection of Minecraft projects showing what we built and the role we played.',
		emptyState: 'Projects will be added here.',
		viewAllLabel: 'View portfolio'
	},
	whatWeDo: {
		label: 'What we do',
		title: 'We make Minecraft projects from idea to playable experience.',
		body: 'We work across four areas. The mix changes with the project.'
	},
	about: {
		label: 'About',
		title: 'A game studio built around Minecraft.',
		body:
			'Hellocraft Studios works on Minecraft games, custom worlds, and projects for events, exhibitions, and other public experiences.',
		actionLabel: 'About Hellocraft'
	},
	contact: {
		label: 'Contact',
		title: 'Tell us about your Minecraft project.',
		body: 'Tell us what you want to make, who it is for, and where you need help.',
		actionLabel: 'Contact us'
	}
} as const;

export const portfolioCopy = {
	hero: {
		label: 'Portfolio',
		title: 'Selected Minecraft projects.',
		body: 'Each project focuses on what was made, our role, and the player experience.'
	},
	emptyState: 'No projects have been published yet.'
} as const;

export const aboutCopy = {
	hero: {
		label: 'About',
		title: 'We build Minecraft games, worlds, and experiences.',
		body:
			'Hellocraft Studios works across Minecraft game content, custom worlds, and projects for events, exhibitions, and other public experiences.'
	},
	whatWeDo: {
		label: 'What we do',
		title: 'Four areas of work.',
		body:
			'Our work covers game and experience design, world and level design, game development, and 3D art. The mix depends on the project.'
	},
	howWeWork: {
		label: 'How we work',
		title: 'The project comes first.',
		body:
			'We shape the scope around what needs to be built, keeping the creative and technical work connected instead of forcing every project into the same package.'
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
