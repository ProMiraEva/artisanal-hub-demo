import { useState, useEffect } from 'react';
import { Menu, X, ShoppingCart, Heart, Search, User } from 'lucide-react';
import { BRAND, NAV_ITEMS } from '../constants';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-soft'
          : 'bg-transparent'
      }`}
    >
      <div className="section-container">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 bg-gradient-to-br from-earth-600 to-earth-800 rounded-xl flex items-center justify-center shadow-card group-hover:shadow-elevated transition-shadow">
              <span className="text-white font-display font-bold text-lg">A</span>
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-display font-bold text-earth-900">{BRAND.name}</span>
              <span className="text-xs text-earth-500 font-light tracking-wide">{BRAND.tagline}</span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.id}
                href={item.href}
                className="relative px-4 py-2 text-sm font-medium text-earth-700 hover:text-earth-900 transition-colors group"
              >
                {item.label}
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-earth-600 rounded-full transition-all group-hover:w-3/4" />
              </a>
            ))}
          </div>

          {/* Right Actions */}
          <div className="flex items-center gap-2">
            {/* Search */}
            <button
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className="p-2.5 rounded-xl text-earth-600 hover:text-earth-900 hover:bg-earth-100 transition-all"
              aria-label="Search"
            >
              <Search className="w-5 h-5" />
            </button>

            {/* Desktop Actions */}
            <div className="hidden md:flex items-center gap-2">
              <button
                className="p-2.5 rounded-xl text-earth-600 hover:text-earth-900 hover:bg-earth-100 transition-all relative"
                aria-label="Favorites"
              >
                <Heart className="w-5 h-5" />
                <span className="absolute -top-1 -right-1 w-4 h-4 bg-accent-600 text-white text-xs rounded-full flex items-center justify-center">
                  3
                </span>
              </button>
              <button
                className="p-2.5 rounded-xl text-earth-600 hover:text-earth-900 hover:bg-earth-100 transition-all relative"
                aria-label="Cart"
              >
                <ShoppingCart className="w-5 h-5" />
                <span className="absolute -top-1 -right-1 w-4 h-4 bg-accent-600 text-white text-xs rounded-full flex items-center justify-center">
                  2
                </span>
              </button>
              <button
                className="p-2.5 rounded-xl text-earth-600 hover:text-earth-900 hover:bg-earth-100 transition-all"
                aria-label="Account"
              >
                <User className="w-5 h-5" />
              </button>
            </div>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2.5 rounded-xl text-earth-600 hover:text-earth-900 hover:bg-earth-100 transition-all"
              aria-label="Menu"
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Search Bar */}
        <div
          className={`overflow-hidden transition-all duration-300 ${
            isSearchOpen ? 'max-h-20 pb-4' : 'max-h-0'
          }`}
        >
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-earth-400" />
            <input
              type="text"
              placeholder="Search for products, artisans, categories..."
              className="w-full pl-12 pr-4 py-3 bg-white border border-earth-200 rounded-xl text-earth-900 placeholder:text-earth-400 focus:outline-none focus:ring-2 focus:ring-earth-500 focus:border-transparent shadow-card"
            />
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden absolute top-full left-0 right-0 bg-white shadow-elevated transition-all duration-300 ${
          isMobileMenuOpen ? 'max-h-screen border-t border-earth-100' : 'max-h-0 overflow-hidden'
        }`}
      >
        <div className="section-container py-6">
          <div className="flex flex-col gap-2">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.id}
                href={item.href}
                className="px-4 py-3 text-earth-700 hover:text-earth-900 hover:bg-earth-50 rounded-xl transition-colors font-medium"
              >
                {item.label}
              </a>
            ))}
          </div>

          <div className="mt-6 pt-6 border-t border-earth-100 flex items-center gap-4">
            <button className="flex-1 flex items-center justify-center gap-2 px-4 py-3 text-earth-600 hover:text-earth-900 hover:bg-earth-50 rounded-xl transition-colors">
              <Heart className="w-5 h-5" />
              <span className="font-medium">Favorites</span>
            </button>
            <button className="flex-1 flex items-center justify-center gap-2 px-4 py-3 text-earth-600 hover:text-earth-900 hover:bg-earth-50 rounded-xl transition-colors">
              <ShoppingCart className="w-5 h-5" />
              <span className="font-medium">Cart</span>
            </button>
          </div>

          <div className="mt-4">
            <button className="w-full btn-primary">Sign In</button>
          </div>
        </div>
      </div>
    </nav>
  );
}
