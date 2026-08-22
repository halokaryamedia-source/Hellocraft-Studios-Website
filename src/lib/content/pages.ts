import { demoAboutExperienceItems, demoCareerOpenings } from './demo-data';
import type { LinkItem } from './types';

// DRAFT WEBSITE COPY
// All public copy in this file must follow docs/foundation/08-writing-style.md.
// Keep the voice direct, creator-led, Minecraft-native, and evidence-based.
// The working copy is tracked in docs/knowledge/content-draft.md.
// Replace or refine factual details when final company and portfolio material is approved.

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
	about: {
		label: 'About',
		title: 'We build for Minecraft.',
		body:
			'Hellocraft Studios works on Minecraft games, custom worlds, and projects for events, exhibitions, and other public experiences.',
		actionLabel: 'About Hellocraft'
	},
	whatWeDo: {
		label: 'What we do',
		title: 'Worlds, gameplay, development, and art.',
		body:
			'Every project needs a different mix. Our work can include world and level design, gameplay, game development, technical systems, and 3D art.'
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
		title: 'What we work on.',
		body:
			'Our work can include world and level design, gameplay, game development, technical systems, and 3D art. The mix depends on the project.'
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
		label: 'Roles',
		title: 'Build Minecraft projects with us.',
		body:
			'Our work can involve Minecraft building and level design, game development, and 3D art, depending on what the team needs.'
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
