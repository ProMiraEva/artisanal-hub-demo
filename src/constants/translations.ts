import type { Category } from '../types';

export const BRAND = {
  name: 'Artisanal Hub',
  tagline: 'Handcrafted Wonders',
  taglineEn: 'Handcrafted Wonders',
  description: 'Discover unique handmade treasures from passionate local artisans around the world.',
};

export const NAV_ITEMS = [
  { id: 'home', label: 'Home', href: '/' },
  { id: 'shop', label: 'Shop', href: '/shop' },
  { id: 'artisans', label: 'Artisans', href: '/artisans' },
  { id: 'categories', label: 'Categories', href: '/categories' },
  { id: 'about', label: 'About', href: '/about' },
  { id: 'contact', label: 'Contact', href: '/contact' },
];

export const CATEGORIES: Category[] = [
  {
    id: 'pottery',
    name: 'Pottery & Ceramics',
    nameBg: 'Керамика и Грънчарство',
    description: 'Beautiful handcrafted pottery and ceramic pieces',
    icon: 'Grape',
    image: 'https://images.pexels.com/photos/1413420/pexels-photo-1413420.jpeg?auto=compress&cs=tinysrgb&w=600',
    productCount: 156,
  },
  {
    id: 'textiles',
    name: 'Textiles & Weaving',
    nameBg: 'Текстил и Тъкачество',
    description: 'Traditional and modern textile artworks',
    icon: 'Wool',
    image: 'https://images.pexels.com/photos/1295147/pexels-photo-1295147.jpeg?auto=compress&cs=tinysrgb&w=600',
    productCount: 234,
  },
  {
    id: 'jewelry',
    name: 'Jewelry',
    nameBg: 'Бижута',
    description: 'Unique handcrafted jewelry pieces',
    icon: 'Gem',
    image: 'https://images.pexels.com/photos/1191531/pexels-photo-1191531.jpeg?auto=compress&cs=tinysrgb&w=600',
    productCount: 312,
  },
  {
    id: 'woodwork',
    name: 'Woodwork',
    nameBg: 'Дърворезба',
    description: 'Exquisite wooden crafts and furniture',
    icon: 'Tree',
    image: 'https://images.pexels.com/photos/1089842/pexels-photo-1089842.jpeg?auto=compress&cs=tinysrgb&w=600',
    productCount: 89,
  },
  {
    id: 'leather',
    name: 'Leather Crafts',
    nameBg: 'Кожени Изделия',
    description: 'Artisan leather goods and accessories',
    icon: 'Hand',
    image: 'https://images.pexels.com/photos/1159670/pexels-photo-1159670.jpeg?auto=compress&cs=tinysrgb&w=600',
    productCount: 127,
  },
  {
    id: 'glass',
    name: 'Glass Art',
    nameBg: 'Стъкларство',
    description: 'Stunning glass art and blown pieces',
    icon: 'Sparkles',
    image: 'https://images.pexels.com/photos/1629780/pexels-photo-1629780.jpeg?auto=compress&cs=tinysrgb&w=600',
    productCount: 67,
  },
  {
    id: 'metalwork',
    name: 'Metalwork',
    nameBg: 'Металообработка',
    description: 'Forged metal art and sculptures',
    icon: 'Anvil',
    image: 'https://images.pexels.com/photos/219550/pexels-photo-219550.jpeg?auto=compress&cs=tinysrgb&w=600',
    productCount: 45,
  },
  {
    id: 'painting',
    name: 'Painting & Art',
    nameBg: 'Живопис',
    description: 'Original paintings and artworks',
    icon: 'Palette',
    image: 'https://images.pexels.com/photos/102127/pexels-photo-102127.jpeg?auto=compress&cs=tinysrgb&w=600',
    productCount: 198,
  },
];

export const HERO_CONTENT = {
  title: 'Discover Handcrafted Wonders',
  titleHighlight: 'Wonders',
  subtitle: 'Support local artisans and find unique, one-of-a-kind pieces crafted with passion and tradition.',
  cta: {
    primary: { label: 'Explore Collection', href: '/shop' },
    secondary: { label: 'Meet Our Artisans', href: '/artisans' },
  },
  stats: [
    { value: '2,500+', label: 'Unique Products' },
    { value: '350+', label: 'Verified Artisans' },
    { value: '45+', label: 'Countries' },
    { value: '50K+', label: 'Happy Customers' },
  ],
};

export const FEATURES = [
  {
    icon: 'Shield',
    title: 'Authentic Handmade',
    description: 'Every item is genuinely handcrafted by skilled artisans using traditional techniques.',
  },
  {
    icon: 'Heart',
    title: 'Support Local Artisans',
    description: 'Your purchase directly supports independent creators and their families.',
  },
  {
    icon: 'Award',
    title: 'Quality Guaranteed',
    description: 'We verify every artisan and ensure craftsmanship meets our high standards.',
  },
  {
    icon: 'Globe',
    title: 'Global Community',
    description: 'Connect with artisans from around the world and discover diverse traditions.',
  },
];

export const NEWSLETTER = {
  title: 'Stay Connected',
  subtitle: 'Subscribe to get updates on new artisans, exclusive collections, and artisan stories.',
  placeholder: 'Enter your email',
  cta: 'Subscribe',
  disclaimer: 'By subscribing, you agree to receive marketing emails. Unsubscribe anytime.',
};

export const FOOTER = {
  columns: [
    {
      title: 'Shop',
      links: [
        { label: 'All Products', href: '/shop' },
        { label: 'Categories', href: '/categories' },
        { label: 'Featured', href: '/featured' },
        { label: 'New Arrivals', href: '/new' },
      ],
    },
    {
      title: 'Artisans',
      links: [
        { label: 'All Artisans', href: '/artisans' },
        { label: 'Become an Artisan', href: '/join' },
        { label: 'Artisan Stories', href: '/stories' },
        { label: 'Verification', href: '/verification' },
      ],
    },
    {
      title: 'Support',
      links: [
        { label: 'Help Center', href: '/help' },
        { label: 'Shipping', href: '/shipping' },
        { label: 'Returns', href: '/returns' },
        { label: 'Contact Us', href: '/contact' },
      ],
    },
    {
      title: 'Company',
      links: [
        { label: 'About Us', href: '/about' },
        { label: 'Blog', href: '/blog' },
        { label: 'Careers', href: '/careers' },
        { label: 'Press', href: '/press' },
      ],
    },
  ],
  social: [
    { label: 'Instagram', href: '#', icon: 'Instagram' },
    { label: 'Facebook', href: '#', icon: 'Facebook' },
    { label: 'Pinterest', href: '#', icon: 'Pin' },
    { label: 'Twitter', href: '#', icon: 'Twitter' },
  ],
  copyright: '© 2024 Artisanal Hub. All rights reserved.',
  madeWith: 'Made with love for artisans everywhere.',
};
