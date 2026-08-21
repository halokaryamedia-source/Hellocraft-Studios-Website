import { demoCareerOpenings, demoProofItems, demoStudioProofItems } from './demo-data';
import type { LinkItem } from './types';

// TEMPORARY DEVELOPMENT COPY
// These strings exist to make page hierarchy, typography, spacing, and content rhythm buildable now.
// Replace them with approved Hellocraft copy later without changing route architecture.

export const homeCopy = {
	hero: {
		eyebrow: 'Minecraft game studio',
		title: 'We build Minecraft experiences worth exploring.',
		body:
			'Hellocraft brings world design, gameplay thinking, and production together to shape clear, playable experiences.',
		primaryActionLabel: 'View portfolio'
	},
	work: {
		title: 'Featured projects',
		body: 'A development selection exploring atmosphere, play, and production detail across different Minecraft experiences.',
		emptyState: 'Approved Hellocraft projects will appear here when the portfolio inventory is supplied.',
		viewAllLabel: 'View portfolio'
	},
	studio: {
		eyebrow: 'About',
		title: 'Creative direction and production, kept close from the start.',
		body:
			'We treat the player experience and the production reality as one problem, so ideas stay clear as they move toward something playable.',
		actionLabel: 'About Hellocraft'
	},
	capabilities: {
		eyebrow: 'How we think',
		title: 'From world design to playable systems.',
		body:
			'Each project can ask for a different mix of creative and technical work. The structure stays flexible so the experience, not a fixed service menu, leads the process.'
	},
	proof: {
		title: 'A place for real proof'
	},
	contact: {
		eyebrow: 'Contact',
		title: 'Have a Minecraft project in mind?',
		body: 'Share the idea, the audience, or the problem you are trying to solve. We can start from there.',
		actionLabel: 'Contact Hellocraft'
	}
} as const;

export const portfolioCopy = {
	hero: {
		eyebrow: 'Portfolio',
		title: 'Minecraft projects shaped around play, place, and purpose.',
		body:
			'This development selection is being used to establish how Hellocraft projects will be presented before the final portfolio is supplied.'
	},
	emptyState: 'Approved projects will appear here.'
} as const;

// Legacy internal alias while old /work redirect remains in source.
export const workCopy = portfolioCopy;

export const aboutCopy = {
	hero: {
		eyebrow: 'About',
		title: 'A focused team building for Minecraft.',
		body:
			'Hellocraft brings creative and technical production together around the experience players actually see, understand, and play.'
	},
	capabilities: {
		eyebrow: 'Capabilities',
		title: 'Different projects need different combinations of craft.',
		body:
			'Worlds, gameplay, art, and production can overlap in different ways. The final capability language will be grounded in the real project portfolio.'
	},
	approach: {
		eyebrow: 'How we work',
		title: 'Keep the idea clear while the production gets real.',
		body:
			'We prefer practical decisions, direct communication, and a close connection between what is being built and how it should feel to play.'
	},
	proof: {
		title: 'Experience and credibility'
	},
	contact: {
		title: 'Build something with Hellocraft.',
		body: 'If the project needs Minecraft thinking from the start, we can begin with the idea and the constraints around it.',
		actionLabel: 'Get in touch'
	}
} as const;

// Legacy internal alias while old /studio redirect remains in source.
export const studioCopy = aboutCopy;

export const careersCopy = {
	hero: {
		eyebrow: 'Careers',
		title: 'Build things people want to play.',
		body:
			'This page is being prepared for future Hellocraft openings across the creative and technical work behind Minecraft experiences.'
	},
	openings: {
		title: 'Open roles',
		emptyState: 'No approved openings have been published yet.'
	},
	general: {
		eyebrow: 'Work with us',
		title: 'A place for people who care about craft, play, and collaboration.',
		body:
			'We value people who can think clearly about their part of the work while staying connected to the experience the whole team is building.'
	},
	application: {
		title: 'How to apply',
		body:
			'Application details will be published with each approved opening. The current structure is ready without assuming a form or upload workflow yet.'
	}
} as const;

export const contactCopy = {
	hero: {
		eyebrow: 'Contact',
		title: 'Tell us what you want to build.',
		body:
			'Share the idea, audience, scope, or production problem. The approved public contact route will live here when it is ready.'
	},
	methods: {
		title: 'Contact channels',
		emptyState: 'Public Hellocraft contact details are being prepared.'
	},
	inquiry: {
		title: 'Project inquiries',
		body:
			'A useful project conversation can start with the goal, the audience, the expected experience, and the constraints already known.'
	}
} as const;

export const footerCopy = {
	statement: 'Hellocraft Studios — a game studio focused on Minecraft.'
} as const;

export const proofItems = demoProofItems;
export const studioProofItems = demoStudioProofItems;
export const careerOpenings = demoCareerOpenings;

// Public links are intentionally not fabricated. Add only approved real contact channels.
export const contactMethods: LinkItem[] = [];
