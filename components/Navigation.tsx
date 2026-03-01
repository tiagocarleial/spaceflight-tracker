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

const LEARN_ITEMS = [
  { href: '/articles', label: 'Articles', icon: 'fa-graduation-cap' },
  { href: '/faq', label: 'FAQ', icon: 'fa-circle-question' },
  { href: '/glossary', label: 'Glossary', icon: 'fa-book' },
];

export default function Navigation({ currentPage, variant = 'standard', className = '' }: NavigationProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLearnDropdownOpen, setIsLearnDropdownOpen] = useState(false);

  // Close menu on ESC key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        if (isMobileMenuOpen) setIsMobileMenuOpen(false);
        if (isLearnDropdownOpen) setIsLearnDropdownOpen(false);
      }
    };

    const handleClickOutside = (e: MouseEvent) => {
      if (isLearnDropdownOpen) {
        const target = e.target as HTMLElement;
        if (!target.closest('.learn-dropdown')) {
          setIsLearnDropdownOpen(false);
        }
      }
    };

    document.addEventListener('keydown', handleEscape);
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.removeEventListener('click', handleClickOutside);
    };
  }, [isMobileMenuOpen, isLearnDropdownOpen]);

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
          <Link href="/" className="flex-shrink-0">
            <div className="text-xl md:text-3xl font-bold text-white flex items-center gap-2 md:gap-3">
              <i className="fa-solid fa-rocket text-white"></i>
              <span className="hidden sm:inline">Spaceflight Tracker</span>
              <span className="sm:hidden">SpaceFlight</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex gap-2 md:gap-4 flex-wrap items-center">
            {NAV_ITEMS.map((item) => (
              <Link key={item.id} href={item.href}>
                <button className={getButtonClasses(item.id)}>
                  <i className={`fa-solid ${item.icon} mr-2`}></i>
                  {item.label}
                </button>
              </Link>
            ))}

            {/* Learn Dropdown */}
            <div className="relative learn-dropdown">
              <button
                onClick={() => setIsLearnDropdownOpen(!isLearnDropdownOpen)}
                className="px-3 py-2 md:px-4 md:py-2 rounded-lg transition-colors text-sm md:text-base font-medium bg-gray-800 hover:bg-gray-700 text-gray-300 hover:text-white flex items-center gap-2"
              >
                <i className="fa-solid fa-graduation-cap"></i>
                Learn
                <i className={`fa-solid fa-chevron-down text-xs transition-transform ${isLearnDropdownOpen ? 'rotate-180' : ''}`}></i>
              </button>

              {isLearnDropdownOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-gray-800 border border-gray-700 rounded-lg shadow-xl z-50 learn-dropdown">
                  {LEARN_ITEMS.map((item, idx) => (
                    <Link key={idx} href={item.href}>
                      <button
                        onClick={() => setIsLearnDropdownOpen(false)}
                        className="w-full text-left px-4 py-3 hover:bg-gray-700 text-gray-300 hover:text-white transition-colors flex items-center gap-3 first:rounded-t-lg last:rounded-b-lg"
                      >
                        <i className={`fa-solid ${item.icon} w-5`}></i>
                        {item.label}
                      </button>
                    </Link>
                  ))}
                </div>
              )}
            </div>
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

              {/* Learn Section in Mobile Menu */}
              <div className="mt-4 pt-4 border-t border-gray-700">
                <div className="px-4 py-2 text-gray-500 text-sm font-semibold uppercase tracking-wide">
                  Learn
                </div>
                {LEARN_ITEMS.map((item, idx) => (
                  <Link key={idx} href={item.href} onClick={handleLinkClick}>
                    <button className="w-full text-left px-4 py-3 rounded-lg transition-colors flex items-center gap-3 bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white mb-2">
                      <i className={`fa-solid ${item.icon} text-lg w-6`}></i>
                      <span className="font-medium">{item.label}</span>
                    </button>
                  </Link>
                ))}
              </div>

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
