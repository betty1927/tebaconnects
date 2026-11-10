import React from 'react';
import Link from 'next/link';
import { Icon } from './Icons';
import SafeImage from './SafeImage';

export default function HeroSection({
  kicker = 'GLOBAL BUSINESS ADVISORY | MARKET ENTRY | STRATEGIC REPRESENTATION',
  breadcrumbs = null,
  titleBlack = 'Bridging Markets.',
  titleRed = 'Building Futures.',
  titleSub = null,
  description = 'Turning market ambitions into sustainable cross-border growth.',
  introduction = null,
  taglinePill = null, // e.g. "CONNECT | EXPAND | DOMINATE"
  primaryCta = { label: 'Explore Our Services', href: '/services' },
  secondaryCta = { label: 'Partner With Us', href: '/partnerships' },
  image = '/assets/founder-hero.jpg',
  imageAlt = 'Teba H. Molla - Founder & CEO',
  isHome = false
}) {
  return (
    <section className="relative overflow-hidden bg-white border-b border-gray-100">
      
      {/* Background subtle ambiance */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-orange-50/40 via-red-50/20 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Optional Breadcrumbs for Inner Pages */}
        {breadcrumbs && (
          <nav className="pt-6 flex items-center space-x-2 text-xs font-medium text-gray-500">
            {breadcrumbs.map((crumb, idx) => (
              <React.Fragment key={crumb.href || idx}>
                {idx > 0 && <Icon name="chevron-right" className="w-3 h-3 text-gray-400" />}
                {idx === breadcrumbs.length - 1 ? (
                  <span className="text-[#B42034] font-semibold">{crumb.label}</span>
                ) : (
                  <Link href={crumb.href} className="hover:text-[#071B31] transition-colors">
                    {crumb.label}
                  </Link>
                )}
              </React.Fragment>
            ))}
          </nav>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center min-h-[500px] lg:min-h-[560px] py-10 lg:py-0">
          
          {/* Left Column: Typography & CTAs (Exact Mockup Layout) */}
          <div className="lg:col-span-6 xl:col-span-7 flex flex-col justify-center space-y-5 lg:pr-6 z-10">
            
            {/* Eyebrow kicker */}
            {kicker && (
              <div className="inline-flex items-center">
                <span className="text-[11px] sm:text-xs font-bold tracking-[0.2em] text-[#071B31] uppercase">
                  {kicker}
                </span>
              </div>
            )}

            {/* Headline with Two-Tone Styling */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.35rem] font-serif font-bold text-[#071B31] leading-[1.12] tracking-tight">
              {titleBlack && <span className="block text-[#071B31]">{titleBlack}</span>}
              {titleRed && <span className="block text-[#B42034]">{titleRed}</span>}
              {titleSub && <span className="block text-[#071B31] text-2xl sm:text-3xl font-serif mt-1 font-semibold">{titleSub}</span>}
            </h1>

            {/* Subheadline */}
            {description && (
              <p className="text-base sm:text-lg text-gray-600 max-w-lg font-normal leading-relaxed">
                {description}
              </p>
            )}

            {/* Tagline Pill (CONNECT | EXPAND | DOMINATE) */}
            {taglinePill && (
              <div className="pt-1">
                <span className="text-xs font-bold tracking-[0.28em] text-[#071B31] uppercase font-sans">
                  {taglinePill}
                </span>
              </div>
            )}

            {/* Action Buttons */}
            {(primaryCta || secondaryCta) && (
              <div className="flex flex-wrap items-center gap-3.5 pt-3">
                {primaryCta && (
                  <Link
                    href={primaryCta.href}
                    className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-[#B42034] hover:bg-[#931828] rounded-md shadow-sm hover:shadow transition-all duration-200 active:scale-95 group"
                  >
                    <span>{primaryCta.label}</span>
                    <Icon name="arrow-right" className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                )}

                {secondaryCta && (
                  <Link
                    href={secondaryCta.href}
                    className="inline-flex items-center justify-center px-6 py-3 text-sm font-semibold text-[#071B31] bg-white hover:bg-gray-50 border border-gray-400 rounded-md shadow-xs hover:border-gray-600 transition-all duration-200 active:scale-95"
                  >
                    {secondaryCta.label}
                  </Link>
                )}
              </div>
            )}
          </div>

          {/* Right Column: Hero Visual Proportion (Matching Mockup Composition) */}
          <div className="lg:col-span-6 xl:col-span-5 relative h-full flex items-end justify-center lg:justify-end">
            <div className="relative w-full max-w-lg lg:max-w-none h-[380px] sm:h-[460px] lg:h-[540px] flex items-end justify-end overflow-hidden">
              
              {/* Soft left gradient blend so the skyline melts into the white background on desktop */}
              <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-white via-white/70 to-transparent z-10 hidden lg:block pointer-events-none" />

              {/* The Hero Visual */}
              <SafeImage
                src={image}
                alt={imageAlt}
                className="w-full h-full object-cover object-bottom lg:object-right-bottom"
              />

              {/* Subtle bottom fade */}
              <div className="absolute inset-x-0 bottom-0 h-6 bg-gradient-to-t from-white to-transparent pointer-events-none" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
