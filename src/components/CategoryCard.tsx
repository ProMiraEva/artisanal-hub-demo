import type { Category } from '../types';
import { ArrowRight } from 'lucide-react';

interface CategoryCardProps {
  category: Category;
  variant?: 'default' | 'large';
}

export default function CategoryCard({ category, variant = 'default' }: CategoryCardProps) {
  if (variant === 'large') {
    return (
      <a href={`/shop?category=${category.id}`} className="card group relative overflow-hidden cursor-pointer">
        <div className="aspect-[3/4]">
          <img
            src={category.image}
            alt={category.name}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-earth-900/90 via-earth-900/30 to-transparent" />
        </div>
        <div className="absolute bottom-0 left-0 right-0 p-6">
          <h3 className="font-display text-2xl font-bold text-white mb-2">{category.name}</h3>
          <p className="text-sm text-earth-200 mb-4 line-clamp-2">{category.description}</p>
          <div className="flex items-center justify-between">
            <span className="text-xs text-earth-300">{category.productCount} products</span>
            <span className="flex items-center gap-1 text-sm text-white font-medium">
              Explore
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </span>
          </div>
        </div>
      </a>
    );
  }

  return (
    <a
      href={`/shop?category=${category.id}`}
      className="group relative rounded-2xl overflow-hidden cursor-pointer"
    >
      <div className="aspect-square">
        <img
          src={category.image}
          alt={category.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-earth-900/80 via-earth-900/20 to-transparent" />
      </div>
      <div className="absolute inset-0 flex flex-col justify-end p-4">
        <h3 className="font-display text-lg font-bold text-white">
          {category.name}
        </h3>
        <p className="text-xs text-earth-200 mt-1">{category.productCount} items</p>
      </div>
    </a>
  );
}
