export interface NavItem {
  label: string;
  path: string;
  subItems?: { label: string; path: string }[];
}

export interface ProductFeature {
  title: string;
  description: string;
  image: string;
  dark?: boolean;
}

export interface ProductPageData {
  id: string;
  title: string;
  tagline: string;
  heroImage: string;
  darkHero?: boolean;
  features: ProductFeature[];
}

export interface FooterColumn {
  title: string;
  links: string[];
}

export enum ButtonType {
  Primary = 'primary', // Blue link with arrow
  Filled = 'filled',   // Blue pill button
  Outline = 'outline', // White/Transparent pill button
}