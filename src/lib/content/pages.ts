import { demoAboutExperienceItems, demoCareerOpenings } from './demo-data';
import type { LinkItem } from './types';

// DRAFT WEBSITE COPY
// Keep this copy clear and factual. Replace or refine it when final company and portfolio material is approved.

export const homeCopy = {
	hero: {
		label: 'Minecraft game studio',
		title: 'We build Minecraft experiences.',
		body:
			'Hellocraft Studios designs and develops Minecraft projects, from custom worlds and gameplay to technical systems and 3D art.',
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
		title: 'A Minecraft-focused game studio.',
		body:
			'Hellocraft works on Minecraft games, custom worlds, and projects for events, exhibitions, and other public experiences.',
		actionLabel: 'About Hellocraft'
	},
	whatWeDo: {
		label: 'What we do',
		title: 'From custom worlds to playable systems.',
		body:
			'Depending on the project, our work can include world design, gameplay, game development, technical systems, and 3D art.'
	},
	contact: {
		label: 'Contact',
		title: 'Have a Minecraft project in mind?',
		body: 'Tell us what you are building, who it is for, and where you need help.',
		actionLabel: 'Contact Hellocraft'
	}
} as const;

export const portfolioCopy = {
	hero: {
		label: 'Portfolio',
		title: 'Minecraft projects by Hellocraft Studios.',
		body:
			'A selection of Minecraft projects showing what was made, Hellocraft\'s role, and the work behind each project.'
	},
	emptyState: 'No projects have been published yet.'
} as const;

export const aboutCopy = {
	hero: {
		label: 'About',
		title: 'Hellocraft Studios is focused on Minecraft.',
		body:
			'We work on Minecraft games and custom worlds, as well as projects for events, exhibitions, and other public experiences.'
	},
	whatWeDo: {
		label: 'What we do',
		title: 'Different projects need different kinds of work.',
		body:
			'Depending on the project, our work can include custom worlds, gameplay, game development, technical systems, and 3D art.'
	},
	howWeWork: {
		label: 'How we work',
		title: 'The scope follows the project.',
		body:
			'The mix of creative and technical work depends on what the project needs, rather than a fixed package for every client.'
	},
	experience: {
		title: 'Experience'
	},
	contact: {
		title: 'Planning a Minecraft project?',
		body: 'Use the Contact page to start a project conversation or ask about working with Hellocraft.',
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
		title: 'Work on Minecraft projects with Hellocraft.',
		body:
			'Roles can span Minecraft building and level design, game development, and 3D art, depending on what the team needs.'
	},
	application: {
		title: 'How to apply',
		body: 'Each opening will include the role details and how to apply.'
	}
} as const;

export const contactCopy = {
	hero: {
		label: 'Contact',
		title: 'Contact Hellocraft Studios.',
		body: 'Use this page for project inquiries, partnerships, or other business questions.'
	},
	methods: {
		title: 'Contact details',
		emptyState: 'Public contact details will be added here before launch.'
	},
	inquiry: {
		title: 'Starting a project?',
		body:
			'A useful first message can include what you want to make, who it is for, and any constraints you already know.'
	}
} as const;

export const footerCopy = {
	statement: 'Hellocraft Studios — a game studio focused on Minecraft.'
} as const;

export const aboutExperienceItems = demoAboutExperienceItems;
export const careerOpenings = demoCareerOpenings;

// Add only approved real public contact channels.
export const contactMethods: LinkItem[] = [];
