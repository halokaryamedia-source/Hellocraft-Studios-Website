import { demoAboutExperienceItems, demoCareerOpenings, demoExperienceItems } from './demo-data';
import type { LinkItem } from './types';

// TEMPORARY DEVELOPMENT COPY
// Replace these strings with approved Hellocraft copy when final content is ready.

export const homeCopy = {
	hero: {
		eyebrow: 'Minecraft game studio',
		title: 'We create Minecraft games and experiences.',
		body: 'This website will present Hellocraft projects, company information, and the work behind each project.',
		primaryActionLabel: 'View portfolio'
	},
	portfolio: {
		title: 'Featured projects',
		body: 'Approved Hellocraft projects will be shown here when the final portfolio information and media are supplied.',
		emptyState: 'Approved Hellocraft projects will appear here.',
		viewAllLabel: 'View portfolio'
	},
	about: {
		eyebrow: 'About',
		title: 'About Hellocraft Studios.',
		body: 'This section will introduce the company and summarize the type of Minecraft work Hellocraft provides.',
		actionLabel: 'About Hellocraft'
	},
	whatWeDo: {
		eyebrow: 'What we do',
		title: 'What Hellocraft works on.',
		body: 'Final details will be based on approved company information and the real project portfolio.'
	},
	experience: {
		title: 'Experience and results'
	},
	contact: {
		eyebrow: 'Contact',
		title: 'Contact Hellocraft Studios.',
		body: 'Approved business contact details and project inquiry information will be available here.',
		actionLabel: 'Contact Hellocraft'
	}
} as const;

export const portfolioCopy = {
	hero: {
		eyebrow: 'Portfolio',
		title: 'Minecraft projects by Hellocraft Studios.',
		body: 'This page will show approved Hellocraft projects, project details, and media when the final portfolio is supplied.'
	},
	emptyState: 'Approved projects will appear here.'
} as const;

export const aboutCopy = {
	hero: {
		eyebrow: 'About',
		title: 'About Hellocraft Studios.',
		body: 'This page will explain the company, its work, and the team behind Hellocraft projects.'
	},
	whatWeDo: {
		eyebrow: 'What we do',
		title: 'What Hellocraft works on.',
		body: 'Final information will be based on the approved portfolio and confirmed company information.'
	},
	howWeWork: {
		eyebrow: 'How we work',
		title: 'How Hellocraft works.',
		body: 'Final working-process information will be added after the company information is reviewed and approved.'
	},
	experience: {
		title: 'Experience and results'
	},
	contact: {
		title: 'Work with Hellocraft Studios.',
		body: 'Use the Contact page for approved business contact details and project inquiries.',
		actionLabel: 'Contact us'
	}
} as const;

export const careersCopy = {
	hero: {
		eyebrow: 'Careers',
		title: 'Careers at Hellocraft Studios.',
		body: 'Current job openings and application details will be listed here when they are available.'
	},
	openings: {
		title: 'Open positions',
		emptyState: 'There are no current job openings.'
	},
	general: {
		eyebrow: 'Join our team',
		title: 'Join the Hellocraft team.',
		body: 'Final team and recruitment information will be added when it is approved for public use.'
	},
	application: {
		title: 'How to apply',
		body: 'Application instructions will be included with each real job opening.'
	}
} as const;

export const contactCopy = {
	hero: {
		eyebrow: 'Contact',
		title: 'Contact Hellocraft Studios.',
		body: 'Approved business contact details will be listed on this page.'
	},
	methods: {
		title: 'Contact information',
		emptyState: 'Public Hellocraft contact details are being prepared.'
	},
	inquiry: {
		title: 'Project inquiries',
		body: 'Project inquiry information will explain what details are useful when contacting Hellocraft about a project.'
	}
} as const;

export const footerCopy = {
	statement: 'Hellocraft Studios — a game studio focused on Minecraft.'
} as const;

export const experienceItems = demoExperienceItems;
export const aboutExperienceItems = demoAboutExperienceItems;
export const careerOpenings = demoCareerOpenings;

// Add only approved real public contact channels.
export const contactMethods: LinkItem[] = [];
