export type LinkItem = {
	label: string;
	href: string;
	external?: boolean;
};

export type IntroBlock = {
	eyebrow?: string;
	title: string;
	body?: string;
};

export type ProjectSection = {
	id: string;
	title: string;
	body: string[];
};

export type ProjectEntry = {
	slug: string;
	title: string;
	summary: string;
	featured?: boolean;
	year?: string;
	client?: string;
	contribution?: string[];
	sections?: ProjectSection[];
	links?: LinkItem[];
};

export type CareerOpening = {
	id: string;
	title: string;
	summary: string;
	location?: string;
	engagement?: string;
	href?: string;
};
