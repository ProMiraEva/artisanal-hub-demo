import { MapPin, Award, ShoppingBag } from 'lucide-react';
import type { Artisan } from '../types';

interface ArtisanCardProps {
  artisan: Artisan;
}

export default function ArtisanCard({ artisan }: ArtisanCardProps) {
  return (
    <a href={`/artisans/${artisan.id}`} className="card group cursor-pointer p-6">
      {/* Header */}
      <div className="flex items-start gap-4 mb-4">
        <div className="relative">
          <img
            src={artisan.avatar}
            alt={artisan.name}
            className="w-16 h-16 rounded-2xl object-cover border-2 border-earth-100 group-hover:border-earth-300 transition-colors"
          />
          {artisan.verified && (
            <div className="absolute -bottom-1 -right-1 p-1 bg-accent-500 rounded-full border-2 border-white">
              <Award className="w-3 h-3 text-white" />
            </div>
          )}
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="font-semibold text-earth-900 group-hover:text-earth-700 transition-colors truncate">
            {artisan.name}
          </h3>
          <div className="flex items-center gap-1 text-sm text-earth-500 mt-1">
            <MapPin className="w-3.5 h-3.5" />
            <span>{artisan.location}, {artisan.country}</span>
          </div>
          <div className="flex items-center gap-2 mt-2">
            <span className="px-2 py-0.5 bg-earth-100 text-earth-700 text-xs font-medium rounded-full capitalize">
              {artisan.specialty[0]}
            </span>
            {artisan.featured && (
              <span className="px-2 py-0.5 bg-secondary-100 text-secondary-700 text-xs font-medium rounded-full">
                Featured
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Bio */}
      <p className="text-sm text-earth-600 line-clamp-3 mb-4">{artisan.bio}</p>

      {/* Stats */}
      <div className="flex items-center justify-between pt-4 border-t border-earth-100">
        <div className="flex items-center gap-4 text-sm">
          <div className="flex items-center gap-1">
            <span className="font-semibold text-earth-900">{artisan.productCount}</span>
            <span className="text-earth-500">products</span>
          </div>
          <div className="flex items-center gap-1">
            <span className="font-semibold text-earth-900">{artisan.reviewCount}</span>
            <span className="text-earth-500">reviews</span>
          </div>
        </div>
        <div className="flex items-center gap-1 px-3 py-1.5 bg-earth-50 rounded-lg text-earth-700 font-medium text-sm group-hover:bg-earth-100 transition-colors">
          <ShoppingBag className="w-4 h-4" />
          View Shop
        </div>
      </div>
    </a>
  );
}
