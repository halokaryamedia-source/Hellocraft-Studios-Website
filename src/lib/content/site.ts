import type { LinkItem } from './types';

export const siteIdentity = {
	name: 'Hellocraft Studios',
	homeHref: '/'
} as const;

export const primaryNavigation = [
	{ label: 'Work', href: '/work' },
	{ label: 'Studio', href: '/studio' },
	{ label: 'Careers', href: '/careers' },
	{ label: 'Contact', href: '/contact' }
] as const satisfies readonly LinkItem[];

export const socialLinks: LinkItem[] = [];
