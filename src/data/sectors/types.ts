export interface SectorHeroData {
  titleKey: string;
  descriptionKey: string;
  eyebrowKey: string;
  breadcrumbCurrentKey: string;
  image: string;
}

export interface SectorCapabilitiesData {
  eyebrowKey: string;
  titleKey: string;
  descriptionKey: string;
  items: string[];
  image: string;
}

export interface SectorAchievement {
  textKey: string;
}

export interface SectorAchievementsData {
  eyebrowKey: string;
  titleKey: string;
  descriptionKey: string;
  items: SectorAchievement[];
  image: string;
}

export interface SectorProduct {
  id: number;

  slug: string;

  titleKey: string;

  descriptionKey: string;

  detailsKey: string;

  specificationsKey: string;

  images: string[];
}
export interface SectorProductsData {
  eyebrowKey: string;
  titleKey: string;
  descriptionKey?: string;

  products: SectorProduct[];

  viewDetailsKey: string;
  requestQuoteKey: string;

  previousKey: string;
  nextKey: string;
}

export interface SectorData {
  hero: SectorHeroData;
  capabilities: SectorCapabilitiesData;
  achievements: SectorAchievementsData;
  products: SectorProductsData;
}