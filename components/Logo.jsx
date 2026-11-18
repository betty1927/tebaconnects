import React from 'react';

/**
 * Teba Connects Official Logo Component
 * Derived directly from the official 2025 Brand Guideline (Pages 5, 6, 7, 8).
 *
 * Variations per Page 6:
 * - 'main' / 'box': Solid Red Box (#B42034) with White 'TC' & White 'TEBA CONNECTS'
 * - 'secondary' / 'default': Transparent background with Red (#B42034) 'TC' & Red 'TEBA CONNECTS'
 * - 'white': Transparent background with White 'TC' & White 'TEBA CONNECTS' (for dark surfaces)
 */
export default function Logo({
  variant = 'default', // 'default' | 'main' | 'box' | 'white' | 'secondary'
  className = 'h-10',
  showText = false // Optional accompanying wordmark for wide navigation contexts
}) {
  const isBox = variant === 'main' || variant === 'box';
  const isWhite = variant === 'white';

  // Palette per Brand Guideline (Page 9: Primary Red #B42034, Secondary White #FFFFFF)
  const primaryColor = isBox ? '#FFFFFF' : isWhite ? '#FFFFFF' : '#B42034';
  const boxBg = '#B42034';

  return (
    <div className={`inline-flex items-center gap-3 select-none ${className}`}>
      <svg
        viewBox="0 0 170 140"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-full w-auto aspect-[170/140] overflow-visible"
        aria-label="Teba Connects Official Logo"
      >
        {/* Main Logo: Solid Red Background Box (Page 6) */}
        {isBox && (
          <rect
            width="170"
            height="140"
            rx="6"
            fill={boxBg}
          />
        )}

        {/* Letter 'T' - Top Bar and Upper Stem (with gap for TEBA CONNECTS) */}
        <path
          d="M 22 24
             C 22 30, 24 35, 27 40
             L 32 38
             C 30 35, 29 32, 29 28
             L 56 28
             L 56 58
             L 69 58
             L 69 28
             L 96 28
             C 96 32, 95 35, 93 38
             L 98 40
             C 101 35, 103 30, 103 24
             Z"
          fill={primaryColor}
        />

        {/* Letter 'T' - Lower Stem and Base Serif */}
        <path
          d="M 56 74
             L 56 104
             L 34 104
             C 34 99, 32 96, 29 93
             L 25 95
             C 28 100, 30 105, 30 110
             L 95 110
             C 95 105, 97 100, 100 95
             L 96 93
             C 93 96, 91 99, 91 104
             L 69 104
             L 69 74
             Z"
          fill={primaryColor}
        />

        {/* Letter 'C' - High-Contrast Serif Interlocking Curve */}
        <path
          d="M 138 42
             C 134 32, 126 23, 110 23
             C 88 23, 73 39, 73 66
             C 73 93, 88 111, 110 111
             C 126 111, 135 102, 140 91
             L 132 87
             C 128 95, 120 101, 110 101
             C 94 101, 84 87, 84 66
             C 84 45, 94 33, 110 33
             C 120 33, 127 38, 131 46
             Z"
          fill={primaryColor}
        />

        {/* TEBA CONNECTS - Set horizontally across the T stem gap in tracked Montserrat caps */}
        <text
          x="82"
          y="69.5"
          textAnchor="middle"
          fontSize="10"
          fontWeight="800"
          letterSpacing="2.2"
          fontFamily="var(--font-montserrat), Montserrat, -apple-system, sans-serif"
          fill={primaryColor}
        >
          TEBA CONNECTS
        </text>
      </svg>

      {/* Optional Accompanying Text for wide contexts */}
      {showText && (
        <div className="flex flex-col justify-center">
          <span
            className="text-sm font-bold tracking-[0.2em] uppercase leading-tight font-sans"
            style={{ color: isWhite ? '#FFFFFF' : '#071B31' }}
          >
            Teba Connects
          </span>
          <span className="text-[9px] tracking-widest uppercase font-semibold text-[#B42034] mt-0.5 font-sans">
            Global Advisory
          </span>
        </div>
      )}
    </div>
  );
}
