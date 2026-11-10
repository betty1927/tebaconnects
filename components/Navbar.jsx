'use client';

import React, { useState } from 'react';
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

  return (
    <header className="sticky top-0 z-50 bg-white/98 backdrop-blur-md border-b border-gray-100 transition-all duration-200 shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Official TC Monogram Logo */}
          <Link href="/" className="flex items-center group transition-transform group-hover:scale-105">
            <Logo className="h-10 sm:h-11" showText={true} />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden xl:flex items-center space-x-7">
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

          {/* Desktop Persistent CTA: Book a Consultation */}
          <div className="hidden lg:flex items-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-5 py-2.5 text-xs sm:text-sm font-semibold text-white bg-[#B42034] hover:bg-[#931828] rounded-full shadow-sm hover:shadow-md transition-all duration-200 active:scale-95"
            >
              Book a Consultation
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex xl:hidden items-center gap-2">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-3 py-1.5 text-xs font-semibold text-white bg-[#B42034] rounded-full sm:hidden"
            >
              Consult
            </Link>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-[#071B31] hover:text-[#B42034] hover:bg-gray-100 focus:outline-none"
              aria-label="Toggle navigation"
            >
              <Icon name={mobileMenuOpen ? 'close' : 'menu'} className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-white border-b border-gray-200 shadow-xl px-4 pt-3 pb-6 space-y-2 animate-in slide-in-from-top-2 duration-200">
          <div className="flex flex-col space-y-1">
            {navLinks.map((link) => {
              const active = isActive(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
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
              className="block w-full text-center py-3 text-sm font-semibold text-white bg-[#B42034] hover:bg-[#931828] rounded-full shadow-sm"
            >
              Book a Consultation
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
