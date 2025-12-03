import { NavItem, FooterColumn, ProductPageData } from './types';

export const NAV_ITEMS: NavItem[] = [
  { 
    label: 'Store', 
    path: '/store',
    subItems: [
      { label: 'Shop the Latest', path: '/store' },
      { label: 'Mac', path: '/store/mac' },
      { label: 'iPad', path: '/store/ipad' },
      { label: 'iPhone', path: '/store/iphone' },
      { label: 'Apple Watch', path: '/store/watch' },
      { label: 'Accessories', path: '/store/accessories' },
    ]
  },
  { 
    label: 'Mac', 
    path: '/mac',
    subItems: [
      { label: 'Explore All Mac', path: '/mac' },
      { label: 'MacBook Air', path: '/mac/macbook-air' },
      { label: 'MacBook Pro', path: '/mac/macbook-pro' },
      { label: 'iMac', path: '/mac/imac' },
      { label: 'Mac mini', path: '/mac/mac-mini' },
      { label: 'Mac Studio', path: '/mac/mac-studio' },
      { label: 'Mac Pro', path: '/mac/mac-pro' },
      { label: 'Displays', path: '/mac/displays' },
    ]
  },
  { 
    label: 'iPad', 
    path: '/ipad',
    subItems: [
      { label: 'Explore All iPad', path: '/ipad' },
      { label: 'iPad Pro', path: '/ipad/ipad-pro' },
      { label: 'iPad Air', path: '/ipad/ipad-air' },
      { label: 'iPad', path: '/ipad/ipad' },
      { label: 'iPad mini', path: '/ipad/ipad-mini' },
      { label: 'Apple Pencil', path: '/ipad/apple-pencil' },
      { label: 'Keyboards', path: '/ipad/keyboards' },
    ]
  },
  { 
    label: 'iPhone', 
    path: '/iphone',
    subItems: [
      { label: 'Explore All iPhone', path: '/iphone' },
      { label: 'iPhone 15 Pro', path: '/iphone/iphone-15-pro' },
      { label: 'iPhone 15', path: '/iphone/iphone-15' },
      { label: 'iPhone 14', path: '/iphone/iphone-14' },
      { label: 'iPhone 13', path: '/iphone/iphone-13' },
      { label: 'iPhone SE', path: '/iphone/iphone-se' },
    ]
  },
  { 
    label: 'Watch', 
    path: '/watch',
    subItems: [
      { label: 'Explore All Apple Watch', path: '/watch' },
      { label: 'Apple Watch Series 9', path: '/watch/series-9' },
      { label: 'Apple Watch Ultra 2', path: '/watch/ultra' },
      { label: 'Apple Watch SE', path: '/watch/se' },
      { label: 'Nike', path: '/watch/nike' },
      { label: 'Hermès', path: '/watch/hermes' },
    ]
  },
  { 
    label: 'AirPods', 
    path: '/airpods',
    subItems: [
      { label: 'Explore All AirPods', path: '/airpods' },
      { label: 'AirPods Pro 2nd Gen', path: '/airpods/pro' },
      { label: 'AirPods 2nd Gen', path: '/airpods/2nd-gen' },
      { label: 'AirPods 3rd Gen', path: '/airpods/3rd-gen' },
      { label: 'AirPods Max', path: '/airpods/max' },
    ]
  },
  { 
    label: 'TV & Home', 
    path: '/tv-home',
    subItems: [
      { label: 'Explore TV & Home', path: '/tv-home' },
      { label: 'Apple TV 4K', path: '/tv-home/apple-tv' },
      { label: 'HomePod', path: '/tv-home/homepod' },
      { label: 'HomePod mini', path: '/tv-home/homepod-mini' },
    ]
  },
  { 
    label: 'Entertainment', 
    path: '/entertainment',
    subItems: [
      { label: 'Apple One', path: '/entertainment/apple-one' },
      { label: 'Apple TV+', path: '/entertainment/apple-tv-plus' },
      { label: 'Apple Music', path: '/entertainment/apple-music' },
      { label: 'Apple Arcade', path: '/entertainment/apple-arcade' },
      { label: 'Apple Fitness+', path: '/entertainment/apple-fitness' },
      { label: 'Apple Podcasts', path: '/entertainment/apple-podcasts' },
    ]
  },
  { 
    label: 'Accessories', 
    path: '/accessories',
    subItems: [
      { label: 'Shop All Accessories', path: '/accessories' },
      { label: 'Mac', path: '/accessories/mac' },
      { label: 'iPad', path: '/accessories/ipad' },
      { label: 'iPhone', path: '/accessories/iphone' },
      { label: 'Watch', path: '/accessories/watch' },
      { label: 'AirPods', path: '/accessories/airpods' },
      { label: 'TV & Home', path: '/accessories/tv-home' },
    ]
  },
  { 
    label: 'Support', 
    path: '/support',
    subItems: [
      { label: 'iPhone Support', path: '/support/iphone' },
      { label: 'Mac Support', path: '/support/mac' },
      { label: 'iPad Support', path: '/support/ipad' },
      { label: 'Watch Support', path: '/support/watch' },
      { label: 'AirPods Support', path: '/support/airpods' },
      { label: 'Music Support', path: '/support/music' },
      { label: 'TV Support', path: '/support/tv' },
    ]
  },
];

export const FOOTER_LINKS: FooterColumn[] = [
  {
    title: 'Shop and Learn',
    links: ['Store', 'Mac', 'iPad', 'iPhone', 'Watch', 'AirPods', 'TV & Home', 'AirTag', 'Accessories', 'Gift Cards'],
  },
  {
    title: 'Services',
    links: ['Apple Music', 'Apple TV+', 'Apple Fitness+', 'Apple News+', 'Apple Arcade', 'iCloud', 'Apple One', 'Apple Pay', 'Apple Books', 'Apple Podcasts'],
  },
  {
    title: 'Account',
    links: ['Manage Your Apple ID', 'Apple Store Account', 'iCloud.com'],
  },
  {
    title: 'Apple Store',
    links: ['Find a Store', 'Genius Bar', 'Today at Apple', 'Apple Camp', 'Apple Store App', 'Refurbished and Clearance', 'Financing', 'Carrier Deals at Apple', 'Order Status', 'Shopping Help'],
  },
  {
    title: 'For Business',
    links: ['Apple and Business', 'Shop for Business'],
  },
];

// Mock Data for dynamic pages
export const PRODUCT_DATA: Record<string, ProductPageData> = {
  mac: {
    id: 'mac',
    title: 'MacBook Air',
    tagline: 'Don’t take it lightly.',
    heroImage: 'https://picsum.photos/id/180/1920/1080', // Laptop placeholder
    darkHero: false,
    features: [
      {
        title: 'M3 Chip',
        description: 'Lean. Mean. M3 machine.',
        image: 'https://picsum.photos/id/0/800/600',
        dark: true
      },
      {
        title: 'Retina Display',
        description: 'See the bigger picture.',
        image: 'https://picsum.photos/id/1/800/600',
        dark: false
      },
      {
        title: 'All-day Battery',
        description: 'Goes all day. And all night.',
        image: 'https://picsum.photos/id/2/800/600',
        dark: false
      }
    ]
  },
  iphone: {
    id: 'iphone',
    title: 'iPhone 15 Pro',
    tagline: 'Titanium. So strong. So light. So Pro.',
    heroImage: 'https://picsum.photos/id/3/1920/1080', // Tech placeholder
    darkHero: true,
    features: [
      {
        title: 'A17 Pro',
        description: 'Monster win for gaming.',
        image: 'https://picsum.photos/id/4/800/600',
        dark: true
      },
      {
        title: 'Camera',
        description: 'Megapixel generation.',
        image: 'https://picsum.photos/id/5/800/600',
        dark: true
      }
    ]
  },
  ipad: {
    id: 'ipad',
    title: 'iPad Pro',
    tagline: 'Supercharged by M2.',
    heroImage: 'https://picsum.photos/id/6/1920/1080',
    darkHero: true,
    features: [
      {
        title: 'Performance',
        description: 'Astonishing performance.',
        image: 'https://picsum.photos/id/7/800/600',
        dark: true
      }
    ]
  },
  watch: {
    id: 'watch',
    title: 'Apple Watch Series 9',
    tagline: 'Smarter. Brighter. Mightier.',
    heroImage: 'https://picsum.photos/id/8/1920/1080',
    darkHero: false,
    features: [
      {
        title: 'Double Tap',
        description: 'Magic at your fingertips.',
        image: 'https://picsum.photos/id/9/800/600',
        dark: false
      }
    ]
  },
  airpods: {
    id: 'airpods',
    title: 'AirPods Pro',
    tagline: 'Adaptive Audio. Now playing.',
    heroImage: 'https://picsum.photos/id/10/1920/1080',
    darkHero: true,
    features: [
      {
        title: 'Noise Cancellation',
        description: 'Up to 2x more Active Noise Cancellation.',
        image: 'https://picsum.photos/id/11/800/600',
        dark: true
      }
    ]
  },
  support: {
    id: 'support',
    title: 'Apple Support',
    tagline: 'We’re here to help.',
    heroImage: 'https://picsum.photos/id/12/1920/1080',
    darkHero: false,
    features: []
  }
};