'use client';

import React, { useState } from 'react';

export default function SafeImage({
  src,
  alt = 'Teba Connects',
  className = '',
  fallbackClassName = '',
  loading = 'lazy',
  ...props
}) {
  const [hasError, setHasError] = useState(false);

  if (hasError || !src) {
    return (
      <div
        className={`w-full h-full flex items-center justify-center p-4 text-center select-none ${
          fallbackClassName || 'bg-gradient-to-br from-[#071B31] via-[#0D2744] to-[#B42034]/40'
        }`}
      >
        <div className="flex flex-col items-center">
          <span className="text-xl font-serif font-black text-white/30 tracking-tighter">TC</span>
          <span className="text-[10px] font-semibold uppercase tracking-wider text-white/50 mt-1 line-clamp-1">
            {alt}
          </span>
        </div>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      loading={loading}
      decoding="async"
      className={className}
      onError={() => setHasError(true)}
      {...props}
    />
  );
}
