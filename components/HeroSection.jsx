import React from 'react';
import Link from 'next/link';
import { Icon } from './Icons';
import SafeImage from './SafeImage';

/**
 * Unified HeroSection Component
 * Responsive and cross-browser optimized:
 * - Desktop: Two-column layout with lateral gradient blend on photographic visual
 * - Mobile & Tablet: Fluid typography, top gradient blend, optimized aspect ratios
 * - Safe typography: break-words to eliminate horizontal overflow
 */
export default function HeroSection({
  kicker = 'GLOBAL BUSINESS ADVISORY | MARKET ENTRY | STRATEGIC REPRESENTATION',
  breadcrumbs = null,
  titleBlack = 'Bridging Markets.',
  titleBlack2 = null,
  titleRed = 'Building Futures.',
  titleSub = null,
  titleLines = null,
  description = 'Turning market ambitions into sustainable cross-border growth.',
  introduction = null,
  taglinePill = null, // e.g. "CONNECT | EXPAND | DOMINATE"
  primaryCta = null,
  secondaryCta = null,
  image = '/assets/hero-home-landing.jpg',
  imageAlt = 'Teba Connects Global Advisory',
  imageClassName = null,
  isHome = false
}) {
  const resolvedImageClass = imageClassName || (isHome ? 'object-cover object-bottom lg:object-right-bottom' : 'object-cover object-center');

  return (
    <section className="relative overflow-hidden bg-white border-b border-gray-100">
      
      {/* Background subtle ambiance */}
      <div className="absolute top-0 right-0 w-full sm:w-1/2 h-full bg-gradient-to-l from-orange-50/30 via-red-50/15 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumbs for Inner Pages */}
        {breadcrumbs && (
          <nav aria-label="Breadcrumb" className="pt-4 sm:pt-5 flex flex-wrap items-center gap-1 text-xs font-medium text-gray-500">
            {breadcrumbs.map((crumb, idx) => (
              <React.Fragment key={crumb.href || idx}>
                {idx > 0 && <span className="text-gray-300">/</span>}
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

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-center min-h-[440px] sm:min-h-[500px] lg:min-h-[540px] py-6 sm:py-8 lg:py-0">
          
          {/* Left Column: Editorial Typography & Actions */}
          <div className="lg:col-span-7 flex flex-col justify-center space-y-3.5 sm:space-y-4 lg:pr-8 z-10">
            
            {/* Eyebrow Kicker with red indicator */}
            {kicker && (
              <div className="inline-flex items-center gap-2 max-w-full">
                <span className="w-1.5 h-1.5 rounded-full bg-[#B42034] shrink-0" />
                <span className="text-[10px] sm:text-xs font-bold tracking-[0.14em] sm:tracking-[0.2em] text-[#071B31] uppercase font-mono break-words">
                  {kicker}
                </span>
              </div>
            )}

            {/* Two-Tone Editorial Serif Headline */}
            <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-serif font-bold text-[#071B31] leading-[1.16] tracking-tight">
              {titleLines ? (
                titleLines.map((line, idx) => (
                  <span
                    key={idx}
                    className={`block ${line.color === 'red' ? 'text-[#B42034]' : 'text-[#071B31]'}`}
                  >
                    {line.text}
                  </span>
                ))
              ) : (
                <>
                  {titleBlack && <span className="block text-[#071B31]">{titleBlack}</span>}
                  {titleBlack2 && <span className="block text-[#071B31]">{titleBlack2}</span>}
                  {titleRed && <span className="block text-[#B42034]">{titleRed}</span>}
                  {titleSub && <span className="block text-[#071B31] text-xl sm:text-2xl lg:text-3xl font-serif mt-1 font-semibold">{titleSub}</span>}
                </>
              )}
            </h1>

            {/* Subheadline */}
            {description && (
              <p className="text-sm sm:text-base lg:text-lg text-gray-700 font-medium leading-relaxed max-w-xl">
                {description}
              </p>
            )}

            {/* Introduction prose */}
            {introduction && (
              <p className="text-xs sm:text-sm lg:text-base text-gray-600 leading-relaxed max-w-xl font-normal">
                {introduction}
              </p>
            )}

            {/* Tagline Pill (CONNECT | EXPAND | DOMINATE) */}
            {taglinePill && (
              <div className="pt-1">
                <span className="text-[11px] sm:text-xs font-bold tracking-[0.2em] sm:tracking-[0.26em] text-[#B42034] uppercase font-sans">
                  {taglinePill}
                </span>
              </div>
            )}

            {/* Action Buttons */}
            {(primaryCta || secondaryCta) && (
              <div className="flex flex-wrap items-center gap-3 pt-2">
                {primaryCta && (
                  <Link
                    href={primaryCta.href}
                    className="inline-flex items-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 text-xs sm:text-sm font-semibold text-white bg-[#B42034] hover:bg-[#931828] rounded-full shadow-sm hover:shadow-md transition-all duration-200 active:scale-95 group"
                  >
                    <span>{primaryCta.label}</span>
                    <Icon name="arrow-right" className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                )}

                {secondaryCta && (
                  <Link
                    href={secondaryCta.href}
                    className="inline-flex items-center justify-center px-5 sm:px-6 py-2.5 sm:py-3 text-xs sm:text-sm font-semibold text-[#071B31] hover:text-[#B42034] bg-white hover:bg-gray-50 border border-gray-300 rounded-full transition-all duration-200 active:scale-95 shadow-2xs"
                  >
                    {secondaryCta.label}
                  </Link>
                )}
              </div>
            )}
          </div>

          {/* Right Column: Photographic Hero Visual */}
          <div className="lg:col-span-5 relative h-full flex items-end justify-center lg:justify-end my-2 lg:my-0">
            <div className="relative w-full max-w-lg lg:max-w-none h-[260px] sm:h-[360px] md:h-[440px] lg:h-[530px] flex items-end justify-end overflow-hidden rounded-2xl lg:rounded-none">
              
              {/* Desktop Left Lateral Mask: Blends photo seamlessly into white background */}
              <div className="hidden lg:block absolute inset-y-0 left-0 w-24 lg:w-36 bg-gradient-to-r from-white via-white/80 to-transparent z-10 pointer-events-none" />

              {/* Mobile Top Fade: Blends photo softly beneath stacked text */}
              <div className="block lg:hidden absolute inset-x-0 top-0 h-10 bg-gradient-to-b from-white/90 via-white/40 to-transparent z-10 pointer-events-none" />

              {/* The Hero Visual */}
              <SafeImage
                src={image}
                alt={imageAlt}
                className={`w-full h-full ${resolvedImageClass}`}
              />

              {/* Subtle bottom edge fade */}
              <div className="absolute inset-x-0 bottom-0 h-5 bg-gradient-to-t from-white/60 to-transparent pointer-events-none" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
