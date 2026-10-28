import { Heart, Instagram, Facebook, Mail } from 'lucide-react';
import { BRAND, FOOTER, NEWSLETTER } from '../constants';

export default function Footer() {
  return (
    <footer className="bg-earth-900 text-earth-100">
      {/* Newsletter Section */}
      <div className="border-b border-earth-700">
        <div className="section-container py-16">
          <div className="max-w-2xl mx-auto text-center">
            <Mail className="w-10 h-10 mx-auto mb-4 text-secondary-400" />
            <h3 className="heading-md text-white mb-3">{NEWSLETTER.title}</h3>
            <p className="text-earth-300 mb-6">{NEWSLETTER.subtitle}</p>
            <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder={NEWSLETTER.placeholder}
                className="flex-1 px-4 py-3 bg-earth-800 border border-earth-700 rounded-xl text-white placeholder:text-earth-500 focus:outline-none focus:ring-2 focus:ring-secondary-500 focus:border-transparent"
              />
              <button type="submit" className="btn-accent whitespace-nowrap">
                {NEWSLETTER.cta}
              </button>
            </form>
            <p className="text-xs text-earth-500 mt-4">{NEWSLETTER.disclaimer}</p>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="section-container py-16">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 md:gap-12">
          {/* Brand Column */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-secondary-400 to-secondary-600 rounded-xl flex items-center justify-center">
                <span className="text-white font-display font-bold text-lg">A</span>
              </div>
              <div>
                <span className="text-lg font-display font-bold text-white">{BRAND.name}</span>
                <span className="block text-xs text-earth-400">{BRAND.tagline}</span>
              </div>
            </div>
            <p className="text-sm text-earth-400 mb-6 leading-relaxed">{BRAND.description}</p>
            <div className="flex items-center gap-3">
              {FOOTER.social.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  aria-label={link.label}
                  className="w-10 h-10 bg-earth-800 hover:bg-earth-700 rounded-xl flex items-center justify-center transition-colors group"
                >
                  <SocialIcon icon={link.icon} />
                </a>
              ))}
            </div>
          </div>

          {/* Link Columns */}
          {FOOTER.columns.map((column) => (
            <div key={column.title}>
              <h4 className="font-semibold text-white mb-4">{column.title}</h4>
              <ul className="space-y-3">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-earth-400 hover:text-white transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-earth-700">
        <div className="section-container py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-earth-400">
            <p>{FOOTER.copyright}</p>
            <p className="flex items-center gap-1">
              {FOOTER.madeWith}
              <Heart className="w-4 h-4 text-red-400 fill-red-400 animate-pulse" />
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

function SocialIcon({ icon }: { icon: string }) {
  const iconClass = 'w-5 h-5 text-earth-400 group-hover:text-white transition-colors';

  switch (icon) {
    case 'Instagram':
      return <Instagram className={iconClass} />;
    case 'Facebook':
      return <Facebook className={iconClass} />;
    default:
      return <Instagram className={iconClass} />;
  }
}
