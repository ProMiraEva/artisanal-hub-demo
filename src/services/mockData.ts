import type { Product, Artisan, Order, Review } from '../types';

export const mockArtisans: Artisan[] = [
  {
    id: 'artisan-1',
    name: 'Elena Dimitrova',
    avatar: 'https://images.pexels.com/photos/3764119/pexels-photo-3764119.jpeg?auto=compress&cs=tinysrgb&w=150',
    bio: 'Master potter with 20 years of experience creating traditional Bulgarian ceramics. Each piece tells a story of ancient techniques passed down through generations.',
    location: 'Plovdiv',
    country: 'Bulgaria',
    specialty: ['pottery'],
    rating: 4.9,
    reviewCount: 234,
    productCount: 45,
    joinedDate: new Date('2020-03-15'),
    verified: true,
    featured: true,
    socialLinks: {
      instagram: '@elena_ceramics',
      website: 'https://elena-cermetics.bg',
    },
  },
  {
    id: 'artisan-2',
    name: 'Marco Bianchi',
    avatar: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=150',
    bio: 'Florentine leather craftsman specializing in hand-stitched leather bags and accessories using traditional Tuscan techniques.',
    location: 'Florence',
    country: 'Italy',
    specialty: ['leather'],
    rating: 4.8,
    reviewCount: 189,
    productCount: 32,
    joinedDate: new Date('2019-08-22'),
    verified: true,
    featured: true,
    socialLinks: {
      instagram: '@marco_leather',
    },
  },
  {
    id: 'artisan-3',
    name: 'Yuki Tanaka',
    avatar: 'https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=150',
    bio: 'Third-generation textile artist combining traditional Japanese weaving techniques with contemporary designs.',
    location: 'Kyoto',
    country: 'Japan',
    specialty: ['textiles'],
    rating: 5.0,
    reviewCount: 156,
    productCount: 28,
    joinedDate: new Date('2021-01-10'),
    verified: true,
    featured: true,
  },
  {
    id: 'artisan-4',
    name: 'Olaf Svensson',
    avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150',
    bio: 'Swedish woodworker creating minimalist furniture and home decor from locally sourced sustainable timber.',
    location: 'Stockholm',
    country: 'Sweden',
    specialty: ['woodwork'],
    rating: 4.7,
    reviewCount: 98,
    productCount: 22,
    joinedDate: new Date('2022-02-28'),
    verified: true,
    featured: false,
  },
  {
    id: 'artisan-5',
    name: 'Priya Sharma',
    avatar: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=150',
    bio: 'Jewelry artist from Jaipur creating stunning pieces using traditional Indian gemstone setting techniques.',
    location: 'Jaipur',
    country: 'India',
    specialty: ['jewelry'],
    rating: 4.9,
    reviewCount: 312,
    productCount: 67,
    joinedDate: new Date('2018-11-05'),
    verified: true,
    featured: true,
  },
  {
    id: 'artisan-6',
    name: 'Sofia Petrova',
    avatar: 'https://images.pexels.com/photos/3769014/pexels-photo-3769014.jpeg?auto=compress&cs=tinysrgb&w=150',
    bio: 'Icon painter and restoration artist preserving the ancient traditions of Orthodox iconography.',
    location: 'Sofia',
    country: 'Bulgaria',
    specialty: ['painting'],
    rating: 4.8,
    reviewCount: 76,
    productCount: 15,
    joinedDate: new Date('2023-04-12'),
    verified: true,
    featured: false,
  },
];

export const mockProducts: Product[] = [
  {
    id: 'product-1',
    name: 'Traditional Bulgarian Vase',
    description: 'Hand-thrown ceramic vase featuring authentic Bulgarian patterns. Each piece is individually painted using natural pigments and fired in a traditional wood kiln.',
    price: 89.99,
    currency: 'USD',
    images: [
      'https://images.pexels.com/photos/1413420/pexels-photo-1413420.jpeg?auto=compress&cs=tinysrgb&w=600',
      'https://images.pexels.com/photos/1295147/pexels-photo-1295147.jpeg?auto=compress&cs=tinysrgb&w=600',
    ],
    category: 'pottery',
    artisanId: 'artisan-1',
    artisan: mockArtisans[0],
    materials: ['Clay', 'Natural pigments', 'Glaze'],
    dimensions: { length: 15, width: 15, height: 30, unit: 'cm' },
    inStock: true,
    stockCount: 12,
    rating: 4.9,
    reviewCount: 45,
    featured: true,
    createdAt: new Date('2024-01-15'),
    updatedAt: new Date('2024-03-20'),
  },
  {
    id: 'product-2',
    name: 'Florentine Leather Tote',
    description: 'Handcrafted leather tote bag made from premium Tuscan leather. Features traditional hand-stitched details and vegetable-tanned finish.',
    price: 285.00,
    currency: 'USD',
    images: [
      'https://images.pexels.com/photos/1159670/pexels-photo-1159670.jpeg?auto=compress&cs=tinysrgb&w=600',
      'https://images.pexels.com/photos/1666418/pexels-photo-1666418.jpeg?auto=compress&cs=tinysrgb&w=600',
    ],
    category: 'leather',
    artisanId: 'artisan-2',
    artisan: mockArtisans[1],
    materials: ['Full-grain leather', 'Brass hardware', 'Cotton lining'],
    dimensions: { length: 35, width: 15, height: 40, unit: 'cm' },
    inStock: true,
    stockCount: 8,
    rating: 4.8,
    reviewCount: 67,
    featured: true,
    createdAt: new Date('2024-02-10'),
    updatedAt: new Date('2024-04-05'),
  },
  {
    id: 'product-3',
    name: 'Japanese Silk Scarf',
    description: 'Hand-woven silk scarf using traditional Japanese weaving techniques. Features a delicate cherry blossom pattern in natural dyes.',
    price: 165.00,
    currency: 'USD',
    images: [
      'https://images.pexels.com/photos/1295147/pexels-photo-1295147.jpeg?auto=compress&cs=tinysrgb&w=600',
    ],
    category: 'textiles',
    artisanId: 'artisan-3',
    artisan: mockArtisans[2],
    materials: ['100% Silk', 'Natural dyes'],
    dimensions: { length: 180, width: 50, height: 0.5, unit: 'cm' },
    inStock: true,
    stockCount: 15,
    rating: 5.0,
    reviewCount: 34,
    featured: true,
    createdAt: new Date('2024-03-01'),
    updatedAt: new Date('2024-04-15'),
  },
  {
    id: 'product-4',
    name: 'Minimalist Oak Desk',
    description: 'Modern desk crafted from solid oak with traditional joinery techniques. Clean lines meet old-world craftsmanship.',
    price: 1250.00,
    currency: 'USD',
    images: [
      'https://images.pexels.com/photos/1089842/pexels-photo-1089842.jpeg?auto=compress&cs=tinysrgb&w=600',
    ],
    category: 'woodwork',
    artisanId: 'artisan-4',
    artisan: mockArtisans[3],
    materials: ['Solid oak', 'Natural oil finish'],
    dimensions: { length: 140, width: 70, height: 75, unit: 'cm' },
    inStock: true,
    stockCount: 3,
    rating: 4.7,
    reviewCount: 12,
    featured: false,
    createdAt: new Date('2024-01-20'),
    updatedAt: new Date('2024-04-20'),
  },
  {
    id: 'product-5',
    name: 'Emerald Statement Ring',
    description: 'Handcrafted sterling silver ring featuring a natural Colombian emerald. Set using traditional Indian techniques.',
    price: 485.00,
    currency: 'USD',
    images: [
      'https://images.pexels.com/photos/1191531/pexels-photo-1191531.jpeg?auto=compress&cs=tinysrgb&w=600',
      'https://images.pexels.com/photos/2735970/pexels-photo-2735970.jpeg?auto=compress&cs=tinysrgb&w=600',
    ],
    category: 'jewelry',
    artisanId: 'artisan-5',
    artisan: mockArtisans[4],
    materials: ['Sterling silver 925', 'Colombian emerald'],
    inStock: true,
    stockCount: 5,
    rating: 4.9,
    reviewCount: 89,
    featured: true,
    createdAt: new Date('2024-02-28'),
    updatedAt: new Date('2024-04-10'),
  },
  {
    id: 'product-6',
    name: 'Orthodox Icon - St. George',
    description: 'Traditional Orthodox icon painted on natural wood using egg tempera and authentic gilding techniques.',
    price: 320.00,
    currency: 'USD',
    images: [
      'https://images.pexels.com/photos/102127/pexels-photo-102127.jpeg?auto=compress&cs=tinysrgb&w=600',
    ],
    category: 'painting',
    artisanId: 'artisan-6',
    artisan: mockArtisans[5],
    materials: ['Linden wood', 'Egg tempera', '24K gold leaf', 'Natural varnish'],
    dimensions: { length: 25, width: 3, height: 35, unit: 'cm' },
    inStock: true,
    stockCount: 4,
    rating: 4.8,
    reviewCount: 23,
    featured: false,
    createdAt: new Date('2024-03-15'),
    updatedAt: new Date('2024-04-25'),
  },
  {
    id: 'product-7',
    name: 'Handwoven Wall Tapestry',
    description: 'Large-scale wall tapestry featuring geometric Bulgarian folk motifs. Woven on a traditional vertical loom.',
    price: 420.00,
    currency: 'USD',
    images: [
      'https://images.pexels.com/photos/709143/pexels-photo-709143.jpeg?auto=compress&cs=tinysrgb&w=600',
    ],
    category: 'textiles',
    artisanId: 'artisan-1',
    artisan: mockArtisans[0],
    materials: ['Wool', 'Cotton', 'Natural dyes'],
    dimensions: { length: 150, width: 2, height: 100, unit: 'cm' },
    inStock: true,
    stockCount: 2,
    rating: 4.9,
    reviewCount: 16,
    featured: false,
    createdAt: new Date('2024-04-01'),
    updatedAt: new Date('2024-05-01'),
  },
  {
    id: 'product-8',
    name: 'Turquoise Pendant Necklace',
    description: 'Sterling silver pendant featuring natural turquoise in a flowing organic design inspired by nature.',
    price: 195.00,
    currency: 'USD',
    images: [
      'https://images.pexels.com/photos/1413420/pexels-photo-1413420.jpeg?auto=compress&cs=tinysrgb&w=600',
    ],
    category: 'jewelry',
    artisanId: 'artisan-5',
    artisan: mockArtisans[4],
    materials: ['Sterling silver', 'Natural turquoise'],
    inStock: true,
    stockCount: 10,
    rating: 4.7,
    reviewCount: 45,
    featured: false,
    createdAt: new Date('2024-03-20'),
    updatedAt: new Date('2024-04-30'),
  },
];

export const mockReviews: Review[] = [
  {
    id: 'review-1',
    productId: 'product-1',
    customerId: 'customer-1',
    customerName: 'Sarah Johnson',
    rating: 5,
    title: 'More beautiful in person!',
    comment: 'This vase exceeded all my expectations. The craftsmanship is incredible and you can truly feel the love that went into making it. A stunning centerpiece in my home.',
    helpful: 12,
    verified: true,
    createdAt: new Date('2024-04-15'),
  },
  {
    id: 'review-2',
    productId: 'product-1',
    customerId: 'customer-2',
    customerName: 'Michael Chen',
    rating: 5,
    title: 'Authentic and stunning',
    comment: 'Bought this as a gift and it was absolutely perfect. The colors are vibrant and the traditional patterns are beautiful. Highly recommend!',
    helpful: 8,
    verified: true,
    createdAt: new Date('2024-04-10'),
  },
];

export const mockOrders: Order[] = [];

export function getFeaturedProducts(): Product[] {
  return mockProducts.filter((p) => p.featured);
}

export function getProductsByCategory(category: string): Product[] {
  return mockProducts.filter((p) => p.category === category);
}

export function getProductById(id: string): Product | undefined {
  return mockProducts.find((p) => p.id === id);
}

export function getArtisanById(id: string): Artisan | undefined {
  return mockArtisans.find((a) => a.id === id);
}

export function getFeaturedArtisans(): Artisan[] {
  return mockArtisans.filter((a) => a.featured);
}

export function searchProducts(query: string): Product[] {
  const lowerQuery = query.toLowerCase();
  return mockProducts.filter(
    (p) =>
      p.name.toLowerCase().includes(lowerQuery) ||
      p.description.toLowerCase().includes(lowerQuery) ||
      p.artisan.name.toLowerCase().includes(lowerQuery) ||
      p.category.toLowerCase().includes(lowerQuery)
  );
}
