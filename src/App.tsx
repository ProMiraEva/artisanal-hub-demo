import { ArrowRight } from 'lucide-react';
import { Navbar, Footer, Hero, ProductCard, CategoryCard, ArtisanCard } from './components';
import { CATEGORIES, FEATURES } from './constants';
import { getFeaturedProducts, getFeaturedArtisans } from './services';

function App() {
  const featuredProducts = getFeaturedProducts();
  const featuredArtisans = getFeaturedArtisans();

  return (
    <div className="min-h-screen">
      <Navbar />

      <main>
        <Hero />

        {/* Featured Products Section */}
        <section className="py-20 bg-white">
          <div className="section-container">
            <div className="flex items-end justify-between mb-12">
              <div>
                <span className="text-sm font-medium text-earth-500 uppercase tracking-wider">
                  Curated Selection
                </span>
                <h2 className="heading-lg mt-2">Featured Products</h2>
                <p className="text-body mt-3 max-w-xl">
                  Discover our handpicked selection of exceptional handmade treasures from master artisans around the world.
                </p>
              </div>
              <a
                href="/shop"
                className="hidden md:flex items-center gap-2 text-earth-700 font-medium hover:text-earth-900 transition-colors"
              >
                View all products
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {featuredProducts.slice(0, 4).map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>

            <div className="mt-10 text-center md:hidden">
              <a href="/shop" className="btn-secondary">
                View all products
              </a>
            </div>
          </div>
        </section>

        {/* Categories Section */}
        <section className="py-20 bg-cream-50">
          <div className="section-container">
            <div className="text-center mb-12">
              <span className="text-sm font-medium text-earth-500 uppercase tracking-wider">
                Browse by Style
              </span>
              <h2 className="heading-lg mt-2">Explore Categories</h2>
              <p className="text-body mt-3 max-w-2xl mx-auto">
                From traditional pottery to contemporary jewelry, find the perfect piece that speaks to your soul.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {CATEGORIES.slice(0, 8).map((category) => (
                <CategoryCard key={category.id} category={category} />
              ))}
            </div>
          </div>
        </section>

        {/* Featured Artisans Section */}
        <section className="py-20 bg-white">
          <div className="section-container">
            <div className="flex items-end justify-between mb-12">
              <div>
                <span className="text-sm font-medium text-earth-500 uppercase tracking-wider">
                  Meet the Makers
                </span>
                <h2 className="heading-lg mt-2">Featured Artisans</h2>
                <p className="text-body mt-3 max-w-xl">
                  Support passionate creators who dedicate their lives to preserving traditional crafts.
                </p>
              </div>
              <a
                href="/artisans"
                className="hidden md:flex items-center gap-2 text-earth-700 font-medium hover:text-earth-900 transition-colors"
              >
                Meet all artisans
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredArtisans.map((artisan) => (
                <ArtisanCard key={artisan.id} artisan={artisan} />
              ))}
            </div>

            <div className="mt-10 text-center md:hidden">
              <a href="/artisans" className="btn-secondary">
                Meet all artisans
              </a>
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-20 bg-gradient-to-b from-earth-800 via-earth-700 to-earth-900 text-white">
          <div className="section-container">
            <div className="text-center mb-16">
              <span className="text-sm font-medium text-earth-300 uppercase tracking-wider">
                Our Promise
              </span>
              <h2 className="heading-lg mt-2 text-white">Why Artisanal Hub?</h2>
              <p className="text-body mt-3 max-w-2xl mx-auto text-earth-200">
                We connect you directly with skilled artisans worldwide, ensuring authenticity, quality, and fair compensation.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {FEATURES.map((feature, index) => (
                <div
                  key={feature.title}
                  className={`p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all animate-slide-up animate-delay-${(index + 1) * 100}`}
                >
                  <div className="w-14 h-14 bg-gradient-to-br from-secondary-400 to-earth-400 rounded-xl flex items-center justify-center mb-6">
                    {getFeatureIcon(feature.icon)}
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-3">{feature.title}</h3>
                  <p className="text-sm text-earth-200 leading-relaxed">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* More Products Grid */}
        <section className="py-20 bg-white">
          <div className="section-container">
            <div className="text-center mb-12">
              <span className="text-sm font-medium text-earth-500 uppercase tracking-wider">
                Just Arrived
              </span>
              <h2 className="heading-lg mt-2">New Arrivals</h2>
              <p className="text-body mt-3 max-w-2xl mx-auto">
                Fresh creations from our artisan community, added this week.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
              {featuredProducts.map((product) => (
                <ProductCard key={product.id} product={product} variant="compact" />
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials/Trust Section */}
        <section className="py-20 bg-cream-50">
          <div className="section-container">
            <div className="max-w-4xl mx-auto text-center">
              <span className="text-sm font-medium text-earth-500 uppercase tracking-wider">
                Trusted Worldwide
              </span>
              <h2 className="heading-lg mt-2">What Customers Say</h2>

              <div className="mt-12 p-8 md:p-12 bg-white rounded-3xl shadow-card">
                <blockquote className="text-xl md:text-2xl text-earth-800 leading-relaxed font-display italic">
                  "Every piece I've purchased tells a story. The quality is extraordinary, and knowing my purchase directly supports artisans makes it even more special. This is what shopping should be."
                </blockquote>
                <div className="mt-8 flex items-center justify-center gap-4">
                  <img
                    src="https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=100"
                    alt="Customer"
                    className="w-14 h-14 rounded-full object-cover border-2 border-earth-100"
                  />
                  <div className="text-left">
                    <p className="font-semibold text-earth-900">Marie Laurent</p>
                    <p className="text-sm text-earth-500">Paris, France</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-earth-900 relative overflow-hidden">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_50%,rgba(212,184,150,0.3),transparent_50%)]" />
            <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_70%_50%,rgba(184,115,59,0.2),transparent_50%)]" />
          </div>
          <div className="section-container relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-display">
                Ready to Discover Unique Treasures?
              </h2>
              <p className="text-xl text-earth-200 mb-10 leading-relaxed">
                Join thousands of happy customers who've found their perfect handmade pieces. Start exploring today.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a href="/shop" className="btn-primary text-lg px-10 py-4">
                  Start Shopping
                </a>
                <a href="/artisans" className="btn-secondary bg-white/10 border-white/30 text-white hover:bg-white/20">
                  Become an Artisan
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

function getFeatureIcon(iconName: string) {
  const icons: Record<string, JSX.Element> = {
    Shield: (
      <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    Heart: (
      <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
      </svg>
    ),
    Award: (
      <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 11v4m4-4v4m5-8v4m-2-2h4m5 0v4h-4M9 3h6m-6 18h6m-9-4v4m12-4v4m-3.5-8a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0z" />
      </svg>
    ),
    Globe: (
      <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  };
  return icons[iconName] || icons.Shield;
}

export default App;
