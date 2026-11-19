import React from 'react';
import Link from 'next/link';
import { Icon } from './Icons';

export default function CtaBanner({
  title = "Let’s Turn Opportunities Into Impact",
  subtitle = "Schedule an executive consultation to discuss your market entry, strategic representation, or investment priorities.",
  buttonText = "Book a Consultation",
  buttonHref = "/contact",
  variant = "navy", // 'navy' | 'red' | 'neutral'
  className = ""
}) {
  return (
    <section className={`relative overflow-hidden ${
      variant === 'navy'
        ? 'bg-[#071B31] text-white'
        : variant === 'red'
        ? 'bg-[#B42034] text-white'
        : 'bg-[#F5F5F5] text-[#071B31]'
    } py-12 sm:py-14 lg:py-16 ${className}`}>
      
      {/* Decorative background grid pattern / subtle wireframe */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
          <defs>
            <pattern id="cta-grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#cta-grid)" />
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6 sm:gap-8 text-center lg:text-left">
          
          <div className="max-w-2xl">
            <h2 className="text-xl sm:text-3xl lg:text-4xl font-serif font-bold tracking-tight mb-2">
              {title}
            </h2>
            {subtitle && (
              <p className="text-xs sm:text-base lg:text-lg text-gray-300 font-light">
                {subtitle}
              </p>
            )}
          </div>

          <div className="shrink-0">
            <Link
              href={buttonHref}
              className={`inline-flex items-center gap-2.5 px-6 sm:px-8 py-3 sm:py-3.5 text-xs sm:text-sm lg:text-base font-semibold rounded-full shadow-lg transition-all duration-200 active:scale-95 group ${
                variant === 'navy'
                  ? 'bg-[#B42034] hover:bg-[#931828] text-white shadow-red-950/40 hover:shadow-red-950/60'
                  : 'bg-white hover:bg-gray-50 text-[#071B31] shadow-black/20'
              }`}
            >
              <span>{buttonText}</span>
              <Icon name="arrow-right" className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
}
