export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  currency: string;
  images: string[];
  category: ProductCategory;
  artisanId: string;
  artisan: Artisan;
  materials: string[];
  dimensions?: ProductDimensions;
  weight?: number;
  inStock: boolean;
  stockCount: number;
  rating: number;
  reviewCount: number;
  featured: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export type ProductCategory =
  | 'pottery'
  | 'textiles'
  | 'jewelry'
  | 'woodwork'
  | 'leather'
  | 'glass'
  | 'metalwork'
  | 'painting'
  | 'sculpture'
  | 'other';

export interface ProductDimensions {
  length: number;
  width: number;
  height: number;
  unit: 'cm' | 'in';
}

export interface Artisan {
  id: string;
  name: string;
  avatar: string;
  bio: string;
  location: string;
  country: string;
  specialty: ProductCategory[];
  rating: number;
  reviewCount: number;
  productCount: number;
  joinedDate: Date;
  verified: boolean;
  featured: boolean;
  socialLinks?: SocialLinks;
}

export interface SocialLinks {
  instagram?: string;
  facebook?: string;
  pinterest?: string;
  website?: string;
}

export interface Order {
  id: string;
  customerId: string;
  products: OrderItem[];
  status: OrderStatus;
  shippingAddress: Address;
  billingAddress?: Address;
  subtotal: number;
  shipping: number;
  tax: number;
  total: number;
  paymentMethod: PaymentMethod;
  paymentStatus: PaymentStatus;
  createdAt: Date;
  updatedAt: Date;
}

export interface OrderItem {
  productId: string;
  product: Product;
  quantity: number;
  price: number;
}

export type OrderStatus =
  | 'pending'
  | 'confirmed'
  | 'processing'
  | 'shipped'
  | 'delivered'
  | 'cancelled'
  | 'refunded';

export type PaymentMethod = 'card' | 'paypal' | 'bank_transfer';

export type PaymentStatus = 'pending' | 'paid' | 'failed' | 'refunded';

export interface Address {
  fullName: string;
  line1: string;
  line2?: string;
  city: string;
  state?: string;
  postalCode: string;
  country: string;
  phone?: string;
}

export interface Review {
  id: string;
  productId: string;
  customerId: string;
  customerName: string;
  rating: number;
  title: string;
  comment: string;
  images?: string[];
  helpful: number;
  verified: boolean;
  createdAt: Date;
}

export interface Category {
  id: ProductCategory;
  name: string;
  nameBg: string;
  description: string;
  icon: string;
  image: string;
  productCount: number;
}
