'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Logo from './Logo';
import { Icon } from './Icons';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname() || '/';

  const navLinks = [
    { label: 'Home', href: '/' },
    { label: 'About Us', href: '/about-us' },
    { label: 'Services', href: '/services' },
    { label: 'Global Markets', href: '/global-markets' },
    { label: 'Partnerships', href: '/partnerships' },
    { label: 'Events', href: '/events' },
    { label: 'Insights', href: '/insights' },
    { label: 'Contact', href: '/contact' }
  ];

  const isActive = (href) => {
    if (href === '/') return pathname === '/';
    return pathname.startsWith(href);
  };

  // Close mobile drawer on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  // Lock body scroll when mobile menu is open & listen for Escape key
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
      const handleKeyDown = (e) => {
        if (e.key === 'Escape') setMobileMenuOpen(false);
      };
      window.addEventListener('keydown', handleKeyDown);
      return () => {
        document.body.style.overflow = '';
        window.removeEventListener('keydown', handleKeyDown);
      };
    } else {
      document.body.style.overflow = '';
    }
  }, [mobileMenuOpen]);

  return (
    <header className="sticky top-0 z-50 bg-white/98 backdrop-blur-md border-b border-gray-100 transition-all duration-200 shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Official TC Monogram Logo */}
          <Link
            href="/"
            className="flex items-center group transition-transform group-hover:scale-105 py-2"
            aria-label="Teba Connects Home"
          >
            <Logo className="h-11 sm:h-12" showText={false} />
          </Link>

          {/* Desktop Navigation (XL Screens >= 1280px) */}
          <nav
            aria-label="Desktop Navigation"
            className="hidden xl:flex items-center space-x-7"
          >
            {navLinks.map((link) => {
              const active = isActive(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-sm font-medium transition-colors duration-150 py-1 relative ${
                    active
                      ? 'text-[#B42034] font-semibold'
                      : 'text-[#071B31] hover:text-[#B42034]'
                  }`}
                >
                  {link.label}
                  {active && (
                    <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#B42034] rounded-full" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Desktop Persistent CTA: Book a Consultation (XL Screens >= 1280px) */}
          <div className="hidden xl:flex items-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-5 py-2.5 text-xs sm:text-sm font-semibold text-white bg-[#B42034] hover:bg-[#931828] rounded-full shadow-sm hover:shadow-md transition-all duration-200 active:scale-95"
            >
              Book a Consultation
            </Link>
          </div>

          {/* Tablet & Mobile Right Actions (< 1280px) */}
          <div className="flex xl:hidden items-center gap-2 sm:gap-3">
            {/* Tablet Book a Consultation button (sm to xl) */}
            <Link
              href="/contact"
              className="hidden sm:inline-flex items-center justify-center px-4 py-2 text-xs font-semibold text-white bg-[#B42034] hover:bg-[#931828] rounded-full shadow-xs transition-all active:scale-95"
            >
              Book a Consultation
            </Link>

            {/* Mobile compact Consult button (< sm) */}
            <Link
              href="/contact"
              className="inline-flex sm:hidden items-center justify-center px-3 py-1.5 text-xs font-semibold text-white bg-[#B42034] rounded-full shadow-xs active:scale-95"
            >
              Consult
            </Link>

            {/* Accessible Hamburger / Close Toggle Button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 min-w-[44px] min-h-[44px] rounded-lg text-[#071B31] hover:text-[#B42034] hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-[#B42034]/20 flex items-center justify-center transition-colors"
              aria-label={mobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-navigation"
            >
              <Icon name={mobileMenuOpen ? 'close' : 'menu'} className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div
          id="mobile-navigation"
          aria-label="Mobile Navigation"
          className="xl:hidden bg-white border-b border-gray-200 shadow-xl px-4 pt-3 pb-6 space-y-2 animate-in slide-in-from-top-2 duration-200 max-h-[calc(100vh-80px)] overflow-y-auto"
        >
          <div className="flex flex-col space-y-1">
            {navLinks.map((link) => {
              const active = isActive(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-3.5 py-3 rounded-xl text-base font-medium transition-colors ${
                    active
                      ? 'bg-red-50 text-[#B42034] font-semibold'
                      : 'text-[#071B31] hover:bg-gray-50 hover:text-[#B42034]'
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>
          <div className="pt-4 border-t border-gray-100">
            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="block w-full text-center py-3.5 text-sm font-semibold text-white bg-[#B42034] hover:bg-[#931828] rounded-full shadow-sm active:scale-95"
            >
              Book a Consultation
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
