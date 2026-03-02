export const DEFAULT_META_DESCRIPTION =
	"佛性寺の公式サイトです。お知らせ、年間行事、アクセス情報などをご案内しています。";
export const DEFAULT_SITE_URL = "https://busshouji-website.pages.dev";
export const SITE_NAME = "Busshouji";
export const DEFAULT_OG_IMAGE_PATH = "/images/hero/home-hero.webp";

export const getMetaDescription = (description?: string): string => {
	if (description && description.trim().length > 0) {
		return description.trim();
	}
	return DEFAULT_META_DESCRIPTION;
};

export const getCanonicalUrl = (pathname: string, site?: URL): URL => {
	return new URL(pathname, site ?? DEFAULT_SITE_URL);
};

export const getOgImageUrl = (site?: URL, imagePath?: string): string => {
	return new URL(imagePath ?? DEFAULT_OG_IMAGE_PATH, site ?? DEFAULT_SITE_URL).toString();
};
