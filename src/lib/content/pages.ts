import { demoCareerOpenings, demoProofItems, demoStudioProofItems } from './demo-data';
import type { LinkItem } from './types';

// TEMPORARY DEVELOPMENT COPY
// These strings exist to make page hierarchy, typography, spacing, and content rhythm buildable now.
// Replace them with approved Hellocraft copy later without changing route architecture.

export const homeCopy = {
	hero: {
		eyebrow: 'Minecraft game studio',
		title: 'We build Minecraft experiences people want to explore.',
		body:
			'Hellocraft Studios focuses on Minecraft worlds, gameplay, and production, turning clear ideas into polished experiences for players and partners.',
		primaryActionLabel: 'View our work'
	},
	work: {
		title: 'Selected work',
		body: 'A closer look at how different Minecraft ideas can become worlds, systems, and playable experiences.',
		emptyState: 'Approved Hellocraft projects will appear here when the portfolio inventory is supplied.',
		viewAllLabel: 'See all projects'
	},
	studio: {
		eyebrow: 'Studio',
		title: 'Good Minecraft work has to look right, play clearly, and hold together.',
		body:
			'Hellocraft brings creative direction and practical production into the same process, from the first idea through a playable result.',
		actionLabel: 'About the studio'
	},
	capabilities: {
		eyebrow: 'What we do',
		title: 'Creative and technical work, treated as one experience.',
		body:
			'We keep creative decisions and technical constraints close together, so the finished experience feels coherent from the player’s point of view.'
	},
	proof: {
		title: 'A place for real proof'
	},
	contact: {
		eyebrow: 'Start a conversation',
		title: 'Tell us what you want to build.',
		body: 'Share the idea, scope, or problem. We can start from there.',
		actionLabel: 'Contact Hellocraft'
	}
} as const;

export const workCopy = {
	hero: {
		eyebrow: 'Work',
		title: 'Projects, experiments, and playable experiences.',
		body:
			'The entries currently shown are clearly labeled demo projects. They exist only to develop the portfolio architecture before the real Hellocraft project inventory arrives.'
	},
	emptyState: 'Approved project work will appear here.'
} as const;

export const studioCopy = {
	hero: {
		eyebrow: 'Studio',
		title: 'A focused team building for Minecraft.',
		body:
			'Temporary About copy used to establish the studio page structure. The final story, team context, and company facts will be supplied separately.'
	},
	capabilities: {
		eyebrow: 'Capabilities',
		title: 'Creative, technical, and production disciplines working together.',
		body:
			'This section currently uses neutral demo language so the page can be designed before the final capability wording is derived from verified projects.'
	},
	approach: {
		eyebrow: 'How we work',
		title: 'Clear ideas, practical production, and attention to the player experience.',
		body:
			'Temporary process copy. The final working approach will be rewritten from Hellocraft’s actual production practice rather than from generic agency language.'
	},
	proof: {
		title: 'Studio proof and credibility'
	},
	contact: {
		title: 'Build something with Hellocraft.',
		body: 'Temporary studio call-to-action copy. Final business wording will replace this later.',
		actionLabel: 'Get in touch'
	}
} as const;

export const careersCopy = {
	hero: {
		eyebrow: 'Careers',
		title: 'Build things people want to play.',
		body:
			'Temporary recruitment copy used to prepare the careers experience. Role names and hiring details below are development-only examples.'
	},
	openings: {
		title: 'Open roles',
		emptyState: 'No approved openings have been published yet.'
	},
	general: {
		eyebrow: 'Work with us',
		title: 'A place for people who care about craft, play, and collaboration.',
		body:
			'This temporary paragraph gives the page a realistic reading length. Final culture and recruitment messaging will be based on approved studio information.'
	},
	application: {
		title: 'How to apply',
		body:
			'The final application path is still being defined. This section reserves the correct place for application instructions without forcing a form, upload system, or backend yet.'
	}
} as const;

export const contactCopy = {
	hero: {
		eyebrow: 'Contact',
		title: 'Let’s make something worth exploring.',
		body:
			'Temporary business-contact copy. The final public channel and inquiry wording will be added after approval.'
	},
	methods: {
		title: 'Contact channels',
		emptyState: 'Public Hellocraft contact channels will be added here after approval.'
	},
	inquiry: {
		title: 'Project inquiries',
		body:
			'This area is reserved for the final business-inquiry path. It remains structurally ready without assuming a website form, file upload, CRM, or hosting-specific implementation.'
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
