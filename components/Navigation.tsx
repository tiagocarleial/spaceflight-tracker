'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';

interface NavigationProps {
  currentPage?: string;
  variant?: 'standard' | 'compact';
  className?: string;
}

interface NavItem {
  href: string;
  label: string;
  icon: string;
  id: string;
}

const NAV_ITEMS: NavItem[] = [
  { href: '/launches', label: 'Launches', icon: 'fa-rocket', id: 'launches' },
  { href: '/rockets', label: 'Rockets', icon: 'fa-space-shuttle', id: 'rockets' },
  { href: '/iss', label: 'ISS Live', icon: 'fa-satellite', id: 'iss' },
  { href: '/asteroids', label: 'Asteroids', icon: 'fa-meteor', id: 'asteroids' },
  { href: '/events', label: 'Events', icon: 'fa-calendar-star', id: 'events' },
  { href: '/earthquakes', label: 'Earthquakes', icon: 'fa-earth-americas', id: 'earthquakes' },
  { href: '/blog', label: 'Blog', icon: 'fa-newspaper', id: 'blog' },
];

export default function Navigation({ currentPage, variant = 'standard', className = '' }: NavigationProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Close menu on ESC key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isMobileMenuOpen]);

  const handleLinkClick = () => {
    setIsMobileMenuOpen(false);
  };

  const isActive = (itemId: string) => currentPage === itemId;

  const getButtonClasses = (itemId: string) => {
    const baseClasses = 'px-3 py-2 md:px-4 md:py-2 rounded-lg transition-colors text-sm md:text-base font-medium';
    const activeClasses = 'bg-blue-600 hover:bg-blue-700 text-white';
    const inactiveClasses = 'bg-gray-800 hover:bg-gray-700 text-gray-300 hover:text-white';

    return `${baseClasses} ${isActive(itemId) ? activeClasses : inactiveClasses}`;
  };

  const headerClasses = variant === 'compact'
    ? 'absolute top-0 left-0 right-0 z-[1001] py-3'
    : 'sticky top-0 z-[9999] py-4 md:py-6';

  return (
    <header className={`border-b border-gray-800 bg-gray-900/95 backdrop-blur ${headerClasses} ${className}`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between gap-4">
          {/* Logo */}
          <Link href="/launches" className="flex-shrink-0">
            <div className="text-xl md:text-3xl font-bold text-white flex items-center gap-2 md:gap-3">
              <i className="fa-solid fa-rocket text-white"></i>
              <span className="hidden sm:inline">Spaceflight Tracker</span>
              <span className="sm:hidden">SpaceFlight</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex gap-2 md:gap-4 flex-wrap">
            {NAV_ITEMS.map((item) => (
              <Link key={item.id} href={item.href}>
                <button className={getButtonClasses(item.id)}>
                  <i className={`fa-solid ${item.icon} mr-2`}></i>
                  {item.label}
                </button>
              </Link>
            ))}
          </nav>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-white hover:text-gray-300 transition-colors"
            aria-label="Toggle navigation menu"
            aria-expanded={isMobileMenuOpen}
          >
            <i className={`fa-solid ${isMobileMenuOpen ? 'fa-times' : 'fa-bars'} text-2xl`}></i>
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        {isMobileMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-gray-800 pt-4">
            <div className="flex flex-col space-y-2">
              {NAV_ITEMS.map((item) => (
                <Link key={item.id} href={item.href} onClick={handleLinkClick}>
                  <button
                    className={`w-full text-left px-4 py-3 rounded-lg transition-colors flex items-center gap-3 ${
                      isActive(item.id)
                        ? 'bg-blue-600 text-white'
                        : 'bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white'
                    }`}
                  >
                    <i className={`fa-solid ${item.icon} text-lg w-6`}></i>
                    <span className="font-medium">{item.label}</span>
                    {isActive(item.id) && (
                      <i className="fa-solid fa-check ml-auto text-sm"></i>
                    )}
                  </button>
                </Link>
              ))}

              {/* Footer Links in Mobile Menu */}
              <div className="mt-4 pt-4 border-t border-gray-700">
                <Link
                  href="/about"
                  className="block text-gray-400 hover:text-white transition-colors py-2 px-4"
                  onClick={handleLinkClick}
                >
                  <i className="fa-solid fa-info-circle mr-2"></i>
                  About
                </Link>
                <Link
                  href="/privacy"
                  className="block text-gray-400 hover:text-white transition-colors py-2 px-4"
                  onClick={handleLinkClick}
                >
                  <i className="fa-solid fa-shield-halved mr-2"></i>
                  Privacy Policy
                </Link>
              </div>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
