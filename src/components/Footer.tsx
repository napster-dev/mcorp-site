import React from 'react';
import { ArrowUp } from 'lucide-react';
import Logo from './Logo';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-background pt-24 pb-12 border-t border-border-subtle relative overflow-hidden transition-colors duration-500">
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 lg:col-span-1">
            <a href="#" className="flex items-center mb-8 group">
              <Logo className="h-12 w-auto transition-transform group-hover:scale-105 duration-500" />
            </a>
            <p className="text-muted-strong font-light leading-relaxed mb-8">
              Mcorp — Built Different. Islamabad's premier construction firm dedicated to innovation, efficiency, and excellence.
            </p>
          </div>

          <div>
            <h4 className="text-heading font-poppins font-semibold uppercase tracking-widest mb-8 text-sm">Navigation</h4>
            <ul className="space-y-4">
              {['Home', 'About Us', 'Services', 'Projects', 'Careers', 'Contact'].map((item) => (
                <li key={item}>
                  <a href={`#${item.toLowerCase().replace(' ', '')}`} className="text-muted-strong hover:text-rust transition-colors duration-300 text-sm">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-heading font-poppins font-semibold uppercase tracking-widest mb-8 text-sm">Services</h4>
            <ul className="space-y-4">
              {[
                'Residential Development',
                'Commercial Spaces',
                'Civil Works',
                'Real Estate',
                'Sustainable Construction',
                'Renovation'
              ].map((item) => (
                <li key={item}>
                  <a href="#services" className="text-muted-strong hover:text-rust transition-colors duration-300 text-sm">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-heading font-poppins font-semibold uppercase tracking-widest mb-8 text-sm">Newsletter</h4>
            <p className="text-muted-strong text-sm mb-6">Stay updated with our latest projects and architectural insights.</p>
            <div className="relative">
              <input
                type="email"
                placeholder="Email Address"
                className="w-full bg-glass border border-border-light px-4 py-3 text-heading text-sm focus:outline-none focus:border-rust transition-colors"
              />
              <button className="absolute right-2 top-1/2 -translate-y-1/2 text-rust hover:text-rust-light transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-border-subtle flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-muted-faint text-xs uppercase tracking-widest">
            © 2024 MCORP CONSTRUCTION. ALL RIGHTS RESERVED.
          </p>
          <div className="flex space-x-8">
            <a href="#" className="text-muted-faint hover:text-rust text-[10px] uppercase tracking-widest transition-colors">Privacy Policy</a>
            <a href="#" className="text-muted-faint hover:text-rust text-[10px] uppercase tracking-widest transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>

      {/* Floating Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className="absolute bottom-12 right-12 w-12 h-12 bg-rust/10 border border-rust/20 flex items-center justify-center text-rust hover:bg-rust hover:text-white transition-all duration-500"
      >
        <ArrowUp size={20} />
      </button>

      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-px bg-linear-to-r from-transparent via-rust/20 to-transparent"></div>
    </footer>
  );
};

export default Footer;
