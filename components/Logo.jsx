import React from 'react';

/**
 * Teba Connects Official Logo Component
 * Derived directly from the official brand assets provided by the user:
 * - media_1795062368472_fc77711c.png (Primary TC Monogram with TEBA CONNECTS in Crimson Red)
 * - media_1795062425694_296d647c.png (Solid Red Box variant with White Monogram)
 *
 * Variations:
 * - 'default' | 'secondary' | 'transparent': Red mark on transparent background
 * - 'main' | 'box' | 'red': Solid Red Box with White mark
 * - 'white': Pure White mark on transparent background (for dark surfaces)
 */
export default function Logo({
  variant = 'default',
  className = 'h-10 sm:h-11',
  showText = false
}) {
  const isBox = variant === 'main' || variant === 'box' || variant === 'red';
  const isWhite = variant === 'white';

  const logoSrc = isBox
    ? '/assets/logo-box.png'
    : isWhite
    ? '/assets/logo-white.png'
    : '/assets/logo-transparent.png';

  return (
    <div className={`inline-flex items-center gap-3 select-none ${className}`}>
      <img
        src={logoSrc}
        alt="Teba Connects Official Logo"
        className="h-full w-auto object-contain transition-transform"
      />

      {showText && (
        <div className="hidden sm:flex flex-col justify-center">
          <span
            className="text-xs font-bold tracking-[0.22em] uppercase leading-tight font-sans"
            style={{ color: isWhite ? '#FFFFFF' : '#071B31' }}
          >
            Global Advisory
          </span>
        </div>
      )}
    </div>
  );
}
