import React from 'react';
import Link from 'next/link';
import Logo from './Logo';
import { Icon } from './Icons';

export default function Footer() {
  const quickActions = [
    { title: 'Book a Consultation', icon: 'calendar', href: '/contact?type=consultation' },
    { title: 'Discuss Market Entry', icon: 'globe', href: '/contact?type=market-entry' },
    { title: 'Partner With Us', icon: 'handshake', href: '/contact?type=partnership' },
    { title: 'Explore Events', icon: 'ticket', href: '/events' }
  ];

  const links = [
    { label: 'Home', href: '/' },
    { label: 'About Us', href: '/about-us' },
    { label: 'Services', href: '/services' },
    { label: 'Global Markets', href: '/global-markets' },
    { label: 'Partnerships', href: '/partnerships' },
    { label: 'Events', href: '/events' },
    { label: 'Insights', href: '/insights' },
    { label: 'Contact', href: '/contact' }
  ];

  return (
    <footer className="bg-[#071B31] text-gray-300">
      
      {/* Top Quick Actions Bar */}
      <div className="border-b border-gray-800 bg-[#0A223D]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 sm:py-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6">
            {quickActions.map((action) => (
              <Link
                key={action.title}
                href={action.href}
                className="flex items-center gap-3 p-3 rounded-xl bg-white/5 hover:bg-white/10 transition-colors border border-white/5 group active:scale-[0.98]"
              >
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-[#B42034]/20 text-[#B42034] flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                  <Icon name={action.icon} className="w-5 h-5" />
                </div>
                <span className="text-xs sm:text-sm font-semibold text-white group-hover:text-red-300 transition-colors">
                  {action.title}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12">
          
          {/* Brand Column */}
          <div className="lg:col-span-5 space-y-4">
            <Link href="/" className="inline-block" aria-label="Teba Connects Home">
              <Logo variant="white" className="h-11 sm:h-12" showText={false} />
            </Link>
            <p className="text-xs sm:text-sm text-gray-300 max-w-sm leading-relaxed">
              Teba Connects is a US headquartered global business advisory and market development Firm that helps organizations enter new markets, build strategic partnerships and accelerate cross-border growth.
            </p>
            <div className="pt-2 flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-xs text-gray-400">
              <div className="flex items-center gap-1.5">
                <Icon name="map-pin" className="w-4 h-4 text-[#B42034] shrink-0" />
                <span>Virginia, USA (HQ)</span>
              </div>
              <span className="hidden sm:inline">•</span>
              <div className="flex items-center gap-1.5">
                <Icon name="map-pin" className="w-4 h-4 text-[#B42034] shrink-0" />
                <span>Addis Ababa, Ethiopia (Hub)</span>
              </div>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="lg:col-span-4">
            <h4 className="text-xs font-bold uppercase tracking-widest text-white mb-4">
              Navigation
            </h4>
            <div className="grid grid-cols-2 gap-2 text-xs sm:text-sm">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-gray-400 hover:text-[#B42034] transition-colors py-1 inline-block"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact Details & Connect */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-white mb-4">
              Connect
            </h4>
            <div className="text-xs sm:text-sm space-y-2.5 text-gray-400">
              <div className="flex items-center gap-2">
                <Icon name="mail" className="w-4 h-4 text-[#B42034] shrink-0" />
                <a href="mailto:info@tebaconnects.com" className="hover:text-white transition-colors break-all">
                  info@tebaconnects.com
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Icon name="phone" className="w-4 h-4 text-[#B42034] shrink-0" />
                <a href="tel:+12068500926" className="hover:text-white transition-colors whitespace-nowrap">
                  +1 206 850 0926 (USA)
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Icon name="phone" className="w-4 h-4 text-[#B42034] shrink-0" />
                <a href="tel:+251912669532" className="hover:text-white transition-colors whitespace-nowrap">
                  +251 912 669 532 (ETH)
                </a>
              </div>
              <div className="pt-2">
                <a
                  href="https://linkedin.com/company/tebaconnects"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg bg-white/10 hover:bg-[#B42034] text-white text-xs font-semibold transition-colors active:scale-95"
                >
                  <Icon name="linkedin" className="w-3.5 h-3.5" />
                  <span>LinkedIn Company Page</span>
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-10 sm:mt-12 pt-6 sm:pt-8 border-t border-gray-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500 text-center sm:text-left">
          <p>© {new Date().getFullYear()} Teba Connects. All rights reserved.</p>
          <div className="flex flex-wrap justify-center sm:justify-end gap-x-6 gap-y-2">
            <Link href="/contact" className="hover:text-gray-400 transition-colors">Privacy Notice</Link>
            <Link href="/contact" className="hover:text-gray-400 transition-colors">Terms of Engagement</Link>
            <Link href="/contact" className="hover:text-gray-400 transition-colors">Global Inquiries</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
