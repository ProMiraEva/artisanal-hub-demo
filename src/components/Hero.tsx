import { ArrowRight, ArrowLeft, Sparkles } from 'lucide-react';
import { HERO_CONTENT, BRAND } from '../constants';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-b from-cream-100 via-cream-50 to-white">
      {/* Background Pattern */}
      <div className="absolute inset-0 overflow-hidden opacity-30">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-earth-200 rounded-full blur-3xl" />
        <div className="absolute top-1/2 -left-24 w-80 h-80 bg-secondary-100 rounded-full blur-3xl" />
        <div className="absolute -bottom-24 right-1/3 w-72 h-72 bg-accent-100 rounded-full blur-3xl" />
      </div>

      {/* Main Content */}
      <div className="section-container relative z-10 pt-32 pb-20">
        <div className="max-w-5xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-card mb-8 animate-fade-in">
            <Sparkles className="w-4 h-4 text-secondary-500" />
            <span className="text-sm font-medium text-earth-700">{BRAND.taglineEn}</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-earth-900 mb-6 leading-tight animate-slide-up">
            Discover{' '}
            <span className="relative">
              <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-earth-600 via-secondary-600 to-earth-700">
                Handcrafted
              </span>
              <span className="absolute bottom-2 left-0 right-0 h-3 bg-secondary-200/50 -rotate-1 z-0" />
            </span>
            <br />
            Wonders
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-earth-600 leading-relaxed max-w-3xl mx-auto mb-10 animate-slide-up animate-delay-100">
            {HERO_CONTENT.subtitle}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 animate-slide-up animate-delay-200">
            <a href={HERO_CONTENT.cta.primary.href} className="btn-primary group">
              {HERO_CONTENT.cta.primary.label}
              <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
            </a>
            <a href={HERO_CONTENT.cta.secondary.href} className="btn-secondary group">
              {HERO_CONTENT.cta.secondary.label}
              <ArrowLeft className="w-4 h-4 mr-2 transition-transform group-hover:-translate-x-1" />
            </a>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-12 max-w-4xl mx-auto animate-fade-in animate-delay-300">
            {HERO_CONTENT.stats.map((stat, index) => (
              <div
                key={stat.label}
                className={`p-6 bg-white rounded-2xl shadow-card hover:shadow-elevated transition-shadow animate-slide-up animate-delay-${(index + 3) * 100}`}
              >
                <span className="block text-3xl md:text-4xl font-bold text-earth-900 mb-1">
                  {stat.value}
                </span>
                <span className="text-sm text-earth-600">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-float">
        <span className="text-xs text-earth-400 font-medium">Scroll to explore</span>
        <div className="w-6 h-10 border-2 border-earth-300 rounded-full flex justify-center">
          <div className="w-1.5 h-3 bg-earth-400 rounded-full mt-2 animate-bounce" />
        </div>
      </div>
    </section>
  );
}
