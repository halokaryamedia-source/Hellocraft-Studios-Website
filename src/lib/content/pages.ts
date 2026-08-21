import { slot } from './slots';
import type { CareerOpening, LinkItem } from './types';

export const homeCopy = {
	hero: {
		eyebrow: slot('HOME_HERO_EYEBROW'),
		title: slot('HOME_HERO_TITLE'),
		body: slot('HOME_HERO_BODY'),
		primaryActionLabel: slot('HOME_HERO_PRIMARY_ACTION')
	},
	work: {
		title: slot('HOME_WORK_TITLE'),
		body: slot('HOME_WORK_BODY'),
		emptyState: slot('HOME_WORK_EMPTY_STATE'),
		viewAllLabel: slot('HOME_WORK_VIEW_ALL')
	},
	studio: {
		eyebrow: slot('HOME_STUDIO_EYEBROW'),
		title: slot('HOME_STUDIO_TITLE'),
		body: slot('HOME_STUDIO_BODY'),
		actionLabel: slot('HOME_STUDIO_ACTION')
	},
	capabilities: {
		eyebrow: slot('HOME_CAPABILITIES_EYEBROW'),
		title: slot('HOME_CAPABILITIES_TITLE'),
		body: slot('HOME_CAPABILITIES_BODY')
	},
	proof: {
		title: slot('HOME_PROOF_TITLE')
	},
	contact: {
		eyebrow: slot('HOME_CONTACT_EYEBROW'),
		title: slot('HOME_CONTACT_TITLE'),
		body: slot('HOME_CONTACT_BODY'),
		actionLabel: slot('HOME_CONTACT_ACTION')
	}
} as const;

export const workCopy = {
	hero: {
		eyebrow: slot('WORK_HERO_EYEBROW'),
		title: slot('WORK_HERO_TITLE'),
		body: slot('WORK_HERO_BODY')
	},
	emptyState: slot('WORK_EMPTY_STATE')
} as const;

export const studioCopy = {
	hero: {
		eyebrow: slot('STUDIO_HERO_EYEBROW'),
		title: slot('STUDIO_HERO_TITLE'),
		body: slot('STUDIO_HERO_BODY')
	},
	capabilities: {
		eyebrow: slot('STUDIO_CAPABILITIES_EYEBROW'),
		title: slot('STUDIO_CAPABILITIES_TITLE'),
		body: slot('STUDIO_CAPABILITIES_BODY')
	},
	approach: {
		eyebrow: slot('STUDIO_APPROACH_EYEBROW'),
		title: slot('STUDIO_APPROACH_TITLE'),
		body: slot('STUDIO_APPROACH_BODY')
	},
	proof: {
		title: slot('STUDIO_PROOF_TITLE')
	},
	contact: {
		title: slot('STUDIO_CONTACT_TITLE'),
		body: slot('STUDIO_CONTACT_BODY'),
		actionLabel: slot('STUDIO_CONTACT_ACTION')
	}
} as const;

export const careersCopy = {
	hero: {
		eyebrow: slot('CAREERS_HERO_EYEBROW'),
		title: slot('CAREERS_HERO_TITLE'),
		body: slot('CAREERS_HERO_BODY')
	},
	openings: {
		title: slot('CAREERS_OPENINGS_TITLE'),
		emptyState: slot('CAREERS_OPENINGS_EMPTY_STATE')
	},
	general: {
		eyebrow: slot('CAREERS_GENERAL_EYEBROW'),
		title: slot('CAREERS_GENERAL_TITLE'),
		body: slot('CAREERS_GENERAL_BODY')
	},
	application: {
		title: slot('CAREERS_APPLICATION_TITLE'),
		body: slot('CAREERS_APPLICATION_BODY')
	}
} as const;

export const contactCopy = {
	hero: {
		eyebrow: slot('CONTACT_HERO_EYEBROW'),
		title: slot('CONTACT_HERO_TITLE'),
		body: slot('CONTACT_HERO_BODY')
	},
	methods: {
		title: slot('CONTACT_METHODS_TITLE'),
		emptyState: slot('CONTACT_METHODS_EMPTY_STATE')
	},
	inquiry: {
		title: slot('CONTACT_INQUIRY_TITLE'),
		body: slot('CONTACT_INQUIRY_BODY')
	}
} as const;

export const footerCopy = {
	statement: slot('FOOTER_STATEMENT')
} as const;

export const proofItems: string[] = [];
export const studioProofItems: string[] = [];
export const careerOpenings: CareerOpening[] = [];
export const contactMethods: LinkItem[] = [];
