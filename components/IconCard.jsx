import React from 'react';
import Link from 'next/link';
import { Icon } from './Icons';

export default function IconCard({
  icon = 'globe',
  title = '',
  description = '',
  number = null,
  href = null,
  linkText = 'Learn More',
  variant = 'default', // 'default' | 'card' | 'minimal' | 'redAccent' | 'outline'
  className = ''
}) {
  const content = (
    <div
      className={`group relative transition-all duration-200 h-full flex flex-col ${
        variant === 'card'
          ? 'p-6 bg-white rounded-xl border border-gray-200/80 shadow-sm hover:shadow-md hover:border-[#B42034]/40'
          : variant === 'redAccent'
          ? 'p-6 bg-white rounded-xl border-t-4 border-t-[#B42034] border-x border-b border-gray-200 shadow-sm hover:shadow-md'
          : variant === 'outline'
          ? 'p-5 bg-white/60 rounded-xl border border-gray-200 hover:border-[#B42034] hover:bg-white'
          : 'p-4 text-center sm:text-left'
      } ${className}`}
    >
      <div className="flex items-center justify-between mb-4">
        {/* Icon Container */}
        <div
          className={`inline-flex items-center justify-center transition-transform group-hover:scale-105 ${
            variant === 'card' || variant === 'redAccent'
              ? 'w-12 h-12 rounded-lg bg-red-50 text-[#B42034]'
              : 'w-10 h-10 text-[#B42034]'
          }`}
        >
          <Icon name={icon} className="w-6 h-6" />
        </div>

        {number && (
          <span className="text-xs font-mono font-bold text-gray-400 group-hover:text-[#B42034] transition-colors">
            {number}
          </span>
        )}
      </div>

      {/* Title */}
      <h3 className="text-base sm:text-lg font-bold text-[#071B31] mb-2 group-hover:text-[#B42034] transition-colors leading-snug">
        {title}
      </h3>

      {/* Description */}
      {description && (
        <p className="text-sm text-gray-600 font-normal leading-relaxed flex-grow">
          {description}
        </p>
      )}

      {/* Link / CTA */}
      {href && linkText && (
        <div className="mt-4 pt-2 flex items-center gap-1.5 text-xs font-semibold text-[#B42034] group-hover:underline">
          <span>{linkText}</span>
          <Icon name="arrow-right" className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
        </div>
      )}
    </div>
  );

  if (href) {
    return (
      <Link href={href} className="block h-full">
        {content}
      </Link>
    );
  }

  return content;
}
