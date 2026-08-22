import { demoAboutExperienceItems, demoCareerOpenings } from './demo-data';
import type { LinkItem } from './types';

// DRAFT WEBSITE COPY
// Keep this copy clear and factual. Replace or refine it when final company and portfolio material is approved.

export const homeCopy = {
	hero: {
		label: 'Minecraft game studio',
		title: 'We build Minecraft games and experiences.',
		body:
			'Hellocraft Studios designs and develops custom Minecraft projects, from worlds and gameplay to technical systems and 3D art.',
		primaryActionLabel: 'View portfolio'
	},
	portfolio: {
		title: 'Featured projects',
		body: 'Explore selected Minecraft projects from Hellocraft Studios.',
		emptyState: 'Projects will be added here.',
		viewAllLabel: 'View portfolio'
	},
	about: {
		label: 'About',
		title: 'A game studio focused on Minecraft.',
		body:
			'We make Minecraft games and custom worlds, and we also build projects for events, exhibitions, and other public experiences.',
		actionLabel: 'About Hellocraft'
	},
	whatWeDo: {
		label: 'What we do',
		title: 'Games, worlds, and systems for Minecraft.',
		body:
			'Some projects need world design and gameplay. Others need game development, technical systems, or 3D art. The mix depends on the project.'
	},
	contact: {
		label: 'Contact',
		title: 'Tell us about your Minecraft project.',
		body: 'Tell us what you are building, who it is for, and where you need help.',
		actionLabel: 'Contact us'
	}
} as const;

export const portfolioCopy = {
	hero: {
		label: 'Portfolio',
		title: 'Selected Minecraft projects.',
		body: 'Each project page shows what was made, Hellocraft\'s role, and the work behind it.'
	},
	emptyState: 'No projects have been published yet.'
} as const;

export const aboutCopy = {
	hero: {
		label: 'About',
		title: 'We make Minecraft games, worlds, and experiences.',
		body:
			'Hellocraft Studios works across Minecraft game content, custom worlds, and projects for events, exhibitions, and other public experiences.'
	},
	whatWeDo: {
		label: 'What we do',
		title: 'The work changes with the project.',
		body:
			'Depending on the project, our work can include world and level design, gameplay, game development, technical systems, and 3D art.'
	},
	howWeWork: {
		label: 'How we work',
		title: 'The scope follows the project.',
		body:
			'We focus on the parts the project actually needs instead of forcing every client into the same package.'
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
