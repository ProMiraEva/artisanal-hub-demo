import { Heart, ShoppingBag, Star } from 'lucide-react';
import type { Product } from '../types';
import { useState } from 'react';

interface ProductCardProps {
  product: Product;
  variant?: 'default' | 'compact' | 'featured';
}

export default function ProductCard({ product, variant = 'default' }: ProductCardProps) {
  const [isLiked, setIsLiked] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const formatPrice = (price: number, currency: string) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: currency,
    }).format(price);
  };

  const renderStars = (rating: number) => {
    return (
      <div className="flex items-center gap-0.5">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            className={`w-3.5 h-3.5 ${
              star <= Math.floor(rating)
                ? 'fill-secondary-400 text-secondary-400'
                : 'text-earth-200'
            }`}
          />
        ))}
        <span className="ml-1.5 text-xs text-earth-500 font-medium">
          ({product.reviewCount})
        </span>
      </div>
    );
  };

  if (variant === 'featured') {
    return (
      <div
        className="card group cursor-pointer"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Image Container */}
        <div className="relative aspect-[4/3] overflow-hidden">
          <img
            src={product.images[0]}
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />

          {/* Overlay */}
          <div
            className={`absolute inset-0 bg-gradient-to-t from-earth-900/60 via-transparent to-transparent transition-opacity duration-300 ${
              isHovered ? 'opacity-100' : 'opacity-0'
            }`}
          />

          {/* Featured Badge */}
          {product.featured && (
            <div className="absolute top-4 left-4 px-3 py-1.5 bg-secondary-500 text-white text-xs font-semibold rounded-lg shadow-soft">
              Featured
            </div>
          )}

          {/* Quick Actions */}
          <div
            className={`absolute bottom-4 left-4 right-4 flex gap-2 transition-all duration-300 ${
              isHovered ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
            }`}
          >
            <button className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 bg-white text-earth-900 rounded-xl font-semibold text-sm hover:bg-earth-50 transition-colors shadow-card">
              <ShoppingBag className="w-4 h-4" />
              Add to Cart
            </button>
          </div>

          {/* Like Button */}
          <button
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              setIsLiked(!isLiked);
            }}
            className={`absolute top-4 right-4 p-2.5 rounded-xl transition-all duration-300 ${
              isLiked
                ? 'bg-red-500 text-white'
                : 'bg-white/90 text-earth-600 hover:bg-white hover:text-red-500'
            }`}
            aria-label={isLiked ? 'Remove from favorites' : 'Add to favorites'}
          >
            <Heart className={`w-4 h-4 ${isLiked ? 'fill-current' : ''}`} />
          </button>
        </div>

        {/* Content */}
        <div className="p-5">
          <div className="flex items-center gap-2 mb-2">
            <img
              src={product.artisan.avatar}
              alt={product.artisan.name}
              className="w-6 h-6 rounded-full object-cover border border-earth-200"
            />
            <span className="text-xs text-earth-500 font-medium">{product.artisan.name}</span>
            {product.artisan.verified && (
              <span className="ml-auto px-2 py-0.5 bg-accent-50 text-accent-700 text-xs font-medium rounded-full">
                Verified
              </span>
            )}
          </div>

          <h3 className="font-semibold text-earth-900 mb-1 group-hover:text-earth-700 transition-colors line-clamp-1">
            {product.name}
          </h3>

          <p className="text-sm text-earth-500 line-clamp-2 mb-3">{product.description}</p>

          <div className="flex items-center justify-between">
            <span className="text-lg font-bold text-earth-900">
              {formatPrice(product.price, product.currency)}
            </span>
            {renderStars(product.rating)}
          </div>
        </div>
      </div>
    );
  }

  // Default & Compact variants
  return (
    <div
      className="card group cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image Container */}
      <div className={`relative overflow-hidden ${variant === 'compact' ? 'aspect-square' : 'aspect-[4/3]'}`}>
        <img
          src={product.images[0]}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />

        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-2">
          {product.featured && (
            <span className="px-2.5 py-1 bg-secondary-500 text-white text-xs font-semibold rounded-lg shadow-soft">
              Featured
            </span>
          )}
          {!product.inStock && (
            <span className="px-2.5 py-1 bg-earth-800 text-white text-xs font-semibold rounded-lg shadow-soft">
              Out of Stock
            </span>
          )}
        </div>

        {/* Like Button */}
        <button
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            setIsLiked(!isLiked);
          }}
          className={`absolute top-3 right-3 p-2 rounded-lg transition-all duration-300 ${
            isLiked
              ? 'bg-red-500 text-white'
              : 'bg-white/90 text-earth-600 hover:bg-white hover:text-red-500 opacity-0 group-hover:opacity-100'
          }`}
          aria-label={isLiked ? 'Remove from favorites' : 'Add to favorites'}
        >
          <Heart className={`w-4 h-4 ${isLiked ? 'fill-current' : ''}`} />
        </button>

        {/* Quick Add */}
        <button
          className={`absolute bottom-3 right-3 p-2.5 bg-white rounded-xl shadow-card transition-all duration-300 ${
            isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
          } hover:bg-earth-50`}
          aria-label="Add to cart"
        >
          <ShoppingBag className="w-4 h-4 text-earth-700" />
        </button>
      </div>

      {/* Content */}
      <div className={`p-4 ${variant === 'compact' ? 'p-3' : ''}`}>
        <div className="flex items-center gap-2 mb-1.5">
          <span className="text-xs text-earth-500 capitalize">
            {product.category.replace(/([A-Z])/g, ' $1').trim()}
          </span>
          <span className="w-1 h-1 rounded-full bg-earth-200" />
          <span className="text-xs text-earth-500">{product.artisan.name}</span>
        </div>

        <h3 className={`font-semibold text-earth-900 group-hover:text-earth-700 transition-colors line-clamp-1 ${variant === 'compact' ? 'text-sm' : 'mb-1'}`}>
          {product.name}
        </h3>

        {variant !== 'compact' && (
          <div className="mb-2">
            {renderStars(product.rating)}
          </div>
        )}

        <div className="flex items-center justify-between">
          <span className={`font-bold text-earth-900 ${variant === 'compact' ? 'text-sm' : ''}`}>
            {formatPrice(product.price, product.currency)}
          </span>
          {variant === 'compact' && (
            <div className="flex items-center gap-1">
              <Star className="w-3 h-3 fill-secondary-400 text-secondary-400" />
              <span className="text-xs text-earth-500">{product.rating}</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
