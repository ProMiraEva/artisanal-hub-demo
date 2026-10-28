import type { LucideIcon } from 'lucide-react';
import {
  Shield,
  Heart,
  Award,
  Globe,
  Truck,
  Clock,
  Leaf,
  Star,
} from 'lucide-react';

interface FeatureCardProps {
  icon: string;
  title: string;
  description: string;
}

const iconMap: Record<string, LucideIcon> = {
  Shield,
  Heart,
  Award,
  Globe,
  Truck,
  Clock,
  Leaf,
  Star,
};

export default function FeatureCard({ icon, title, description }: FeatureCardProps) {
  const IconComponent = iconMap[icon] || Shield;

  return (
    <div className="relative p-6 bg-white rounded-2xl shadow-card hover:shadow-soft transition-shadow group">
      <div className="w-14 h-14 bg-gradient-to-br from-earth-100 to-earth-50 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
        <IconComponent className="w-7 h-7 text-earth-600" />
      </div>
      <h3 className="font-semibold text-earth-900 mb-2">{title}</h3>
      <p className="text-sm text-earth-600 leading-relaxed">{description}</p>
    </div>
  );
}
