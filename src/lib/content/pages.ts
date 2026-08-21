import { demoCareerOpenings, demoProofItems, demoStudioProofItems } from './demo-data';
import type { LinkItem } from './types';

// TEMPORARY DEVELOPMENT COPY
// These strings exist to make page hierarchy, typography, spacing, and content rhythm buildable now.
// Replace them with approved Hellocraft copy later without changing route architecture.

export const homeCopy = {
	hero: {
		eyebrow: 'Game studio focused on Minecraft',
		title: 'We create worlds, gameplay, and experiences made to be explored.',
		body:
			'Temporary demo copy for the Hellocraft website. This space will later carry the final studio message while keeping the same page structure.',
		primaryActionLabel: 'Explore our work'
	},
	work: {
		title: 'Selected work',
		body:
			'A temporary selection of demo projects used to shape portfolio pacing, card hierarchy, and the project-detail experience.',
		emptyState: 'Approved Hellocraft projects will appear here when the portfolio inventory is supplied.',
		viewAllLabel: 'View all work'
	},
	studio: {
		eyebrow: 'The studio',
		title: 'Creative craft and technical thinking in one place.',
		body:
			'This temporary studio introduction is here to establish reading length and composition. Final About content will replace it after the studio facts are approved.',
		actionLabel: 'Meet the studio'
	},
	capabilities: {
		eyebrow: 'What we do',
		title: 'From an idea to a playable Minecraft experience.',
		body:
			'This is representative development copy only. The final capability narrative will be derived from real Hellocraft work instead of forcing a permanent services taxonomy too early.'
	},
	proof: {
		title: 'A place for real proof'
	},
	contact: {
		eyebrow: 'Start a project',
		title: 'Have something in mind?',
		body:
			'Temporary call-to-action copy. The final business message and public contact channel will be added after they are approved.',
		actionLabel: 'Contact us'
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
