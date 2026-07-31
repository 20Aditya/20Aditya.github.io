import React, { useState, useEffect } from 'react';
import { Menu, X, Linkedin, Mail } from 'lucide-react';
import { resumeData } from '../data/resumeData';

const navItems = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Awards', href: '#awards' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
];

const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('about');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Simple active section detection
      const sections = navItems.map(item => item.href.substring(1));
      const scrollPosition = window.scrollY + 120;

      for (let i = sections.length - 1; i >= 0; i--) {
        const sectionEl = document.getElementById(sections[i]);
        if (sectionEl && sectionEl.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      const offsetTop = element.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth',
      });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-slate-950/80 backdrop-blur-md border-b border-slate-800/60 py-3 shadow-xl'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center">
          {/* Logo / Name */}
          <a
            href="#hero"
            onClick={(e) => handleNavClick(e, '#hero')}
            className="flex items-center gap-3 group"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-500 via-sky-500 to-indigo-500 flex items-center justify-center text-slate-950 font-bold text-lg shadow-lg shadow-cyan-500/20 group-hover:scale-105 transition-transform">
              AC
            </div>
            <div>
              <span className="text-lg font-bold tracking-tight text-slate-100 group-hover:text-cyan-400 transition-colors">
                {resumeData.name}
              </span>
              <span className="block text-xs font-mono text-cyan-400/80">
                {resumeData.title}
              </span>
            </div>
          </a>

          {/* Desktop Nav + CTAs */}
          <div className="flex items-center gap-3 mx-auto">
            <nav className="hidden md:flex items-center gap-1 bg-slate-900/60 p-1.5 rounded-full border border-slate-800/80 backdrop-blur-md">
              {navItems.map((item) => {
                const isActive = activeSection === item.href.substring(1);
                return (
                  <a
                    key={item.label}
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-200 ${
                      isActive
                        ? 'bg-cyan-500/10 text-cyan-400 border border-cyan-500/30 shadow-sm'
                        : 'text-slate-400 hover:text-slate-100 hover:bg-slate-800/50'
                    }`}
                  >
                    {item.label}
                  </a>
                );
              })}
            </nav>

            <div className="hidden lg:flex items-center gap-2">
              <a
                href={resumeData.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-xl text-slate-400 hover:text-cyan-400 hover:bg-slate-900 border border-transparent hover:border-slate-800 transition-all"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href={`mailto:${resumeData.email}`}
                className="p-2 rounded-xl text-slate-400 hover:text-cyan-400 hover:bg-slate-900 border border-transparent hover:border-slate-800 transition-all"
                aria-label="Send Email"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-xl bg-slate-900 text-slate-300 border border-slate-800 focus:outline-none focus:ring-2 focus:ring-cyan-500"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-slate-950/95 border-b border-slate-800 backdrop-blur-xl px-4 pt-3 pb-6 space-y-2 mt-2 shadow-2xl">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={(e) => handleNavClick(e, item.href)}
              className="block px-4 py-2.5 rounded-xl text-base font-medium text-slate-300 hover:text-cyan-400 hover:bg-slate-900 border border-transparent hover:border-slate-800/60 transition-all"
            >
              {item.label}
            </a>
          ))}
          <div className="pt-4 border-t border-slate-800 flex items-center justify-between gap-3">
            <a
              href={`mailto:${resumeData.email}`}
              className="flex-1 py-2.5 px-4 rounded-xl bg-slate-900 text-slate-200 text-center font-medium text-sm flex items-center justify-center gap-2 border border-slate-800"
            >
              <Mail className="w-4 h-4 text-cyan-400" />
              <span>Email</span>
            </a>
            <a
              href={resumeData.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 py-2.5 px-4 rounded-xl bg-slate-900 text-slate-200 text-center font-medium text-sm flex items-center justify-center gap-2 border border-slate-800"
            >
              <Linkedin className="w-4 h-4 text-cyan-400" />
              <span>LinkedIn</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;