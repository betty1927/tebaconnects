import React from 'react';
import Link from 'next/link';
import { Icon } from './Icons';
import SafeImage from './SafeImage';

export default function ImageCard({
  image = '/assets/market-usa.jpg',
  imageAlt = '',
  badge = null,
  title = '',
  subtitle = null,
  description = '',
  href = '#',
  linkText = 'Learn More',
  variant = 'overlay', // 'overlay' | 'stacked' | 'horizontal'
  aspectRatio = 'aspect-[16/10]',
  className = ''
}) {
  if (variant === 'overlay') {
    return (
      <div className={`group relative rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 ${className}`}>
        {/* Background Image Container */}
        <div className={`w-full ${aspectRatio} relative overflow-hidden bg-gray-900`}>
          <SafeImage
            src={image}
            alt={imageAlt || title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 opacity-85"
          />
          {/* Gradient Scrim */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#071B31] via-[#071B31]/60 to-transparent" />
        </div>

        {/* Content Box Positioned at Bottom */}
        <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6 flex flex-col justify-end text-white">
          {badge && (
            <div className="mb-2">
              <span className="inline-block px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider bg-[#B42034] text-white rounded">
                {badge}
              </span>
            </div>
          )}

          <h3 className="text-lg sm:text-xl font-bold font-serif tracking-tight mb-1 text-white group-hover:text-red-300 transition-colors">
            {title}
          </h3>

          {subtitle && (
            <div className="text-xs font-medium text-gray-300 mb-1.5 sm:mb-2">
              {subtitle}
            </div>
          )}

          {description && (
            <p className="text-xs sm:text-sm text-gray-200 line-clamp-3 leading-relaxed mb-3 sm:mb-4 font-light">
              {description}
            </p>
          )}

          {href && (
            <Link
              href={href}
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-white hover:text-red-200 transition-colors group/link"
            >
              <span>{linkText}</span>
              <Icon name="arrow-right" className="w-3.5 h-3.5 transition-transform group-hover/link:translate-x-1 text-[#B42034]" />
            </Link>
          )}
        </div>
      </div>
    );
  }

  // Stacked variant (Image on top, clean card below)
  return (
    <div className={`group rounded-2xl overflow-hidden bg-white border border-gray-200/90 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col ${className}`}>
      <div className={`w-full ${aspectRatio} relative overflow-hidden bg-gray-100`}>
        <SafeImage
          src={image}
          alt={imageAlt || title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {badge && (
          <div className="absolute top-3.5 left-3.5">
            <span className="px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider bg-[#B42034] text-white rounded shadow-sm">
              {badge}
            </span>
          </div>
        )}
      </div>

      <div className="p-5 sm:p-6 flex flex-col flex-grow">
        {subtitle && (
          <span className="text-xs font-semibold uppercase tracking-wider text-[#B42034] mb-1">
            {subtitle}
          </span>
        )}

        <h3 className="text-base sm:text-lg font-bold text-[#071B31] mb-2 group-hover:text-[#B42034] transition-colors">
          {title}
        </h3>

        {description && (
          <p className="text-xs sm:text-sm text-gray-600 line-clamp-3 leading-relaxed flex-grow mb-4">
            {description}
          </p>
        )}

        {href && (
          <div className="pt-2 border-t border-gray-100 mt-auto">
            <Link
              href={href}
              className="inline-flex items-center gap-1.5 text-xs font-bold text-[#B42034] hover:underline"
            >
              <span>{linkText}</span>
              <Icon name="arrow-right" className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
