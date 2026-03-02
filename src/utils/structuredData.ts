import {
	DEFAULT_META_DESCRIPTION,
	DEFAULT_OG_IMAGE_PATH,
	DEFAULT_SITE_URL,
	SITE_NAME,
} from "./seo";

export const ORGANIZATION_SETTINGS = {
	name: SITE_NAME,
	logoPath: DEFAULT_OG_IMAGE_PATH,
	sameAs: [] as string[],
};

const toAbsoluteUrl = (site: URL | undefined, pathOrUrl: string): string => {
	return new URL(pathOrUrl, site ?? DEFAULT_SITE_URL).toString();
};

export const getOrganizationStructuredData = (site?: URL) => {
	const data: Record<string, unknown> = {
		"@context": "https://schema.org",
		"@type": "Organization",
		name: ORGANIZATION_SETTINGS.name,
		url: toAbsoluteUrl(site, "/"),
		logo: toAbsoluteUrl(site, ORGANIZATION_SETTINGS.logoPath),
	};

	if (ORGANIZATION_SETTINGS.sameAs.length > 0) {
		data.sameAs = ORGANIZATION_SETTINGS.sameAs;
	}

	return data;
};

export const getWebSiteStructuredData = (site?: URL) => {
	return {
		"@context": "https://schema.org",
		"@type": "WebSite",
		name: SITE_NAME,
		url: toAbsoluteUrl(site, "/"),
		description: DEFAULT_META_DESCRIPTION,
		inLanguage: "ja-JP",
	};
};

interface ArticleDataParams {
	site?: URL;
	pathname: string;
	title: string;
	description?: string;
	datePublished: Date;
	image?: string;
}

export const getArticleStructuredData = ({
	site,
	pathname,
	title,
	description,
	datePublished,
	image,
}: ArticleDataParams) => {
	const data: Record<string, unknown> = {
		"@context": "https://schema.org",
		"@type": "Article",
		headline: title,
		description: description ?? DEFAULT_META_DESCRIPTION,
		datePublished: datePublished.toISOString(),
		dateModified: datePublished.toISOString(),
		mainEntityOfPage: toAbsoluteUrl(site, pathname),
		author: {
			"@type": "Organization",
			name: ORGANIZATION_SETTINGS.name,
		},
		publisher: {
			"@type": "Organization",
			name: ORGANIZATION_SETTINGS.name,
			logo: {
				"@type": "ImageObject",
				url: toAbsoluteUrl(site, ORGANIZATION_SETTINGS.logoPath),
			},
		},
	};

	if (image) {
		data.image = toAbsoluteUrl(site, image);
	}

	return data;
};
