import React from 'react';

export default function Logo({
  variant = 'default', // 'default' (on white) | 'white' (on dark) | 'monochrome'
  className = 'h-10',
  showText = true
}) {
  const isDark = variant === 'white';
  const redColor = '#B42034';
  const textColor = isDark ? '#FFFFFF' : '#071B31';
  const badgeBg = isDark ? '#071B31' : '#FFFFFF';

  return (
    <div className={`inline-flex items-center gap-2.5 select-none ${className}`}>
      {/* Official Stylized TC Monogram Vector */}
      <svg
        viewBox="0 0 160 110"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-full w-auto overflow-visible"
        aria-label="Teba Connects Logo"
      >
        {/* Letter 'T' in high-contrast editorial serif */}
        <path
          d="M 12 20 
             L 78 20 
             C 78 26, 75 27, 70 28 
             L 53 28 
             L 53 85 
             C 53 90, 56 91, 62 92 
             L 62 96 
             L 28 96 
             L 28 92 
             C 34 91, 37 90, 37 85 
             L 37 28 
             L 20 28 
             C 15 27, 12 26, 12 20 Z"
          fill={redColor}
        />

        {/* Letter 'C' in classic circular serif, overlapping the T */}
        <path
          d="M 132 34 
             C 127 24, 115 18, 98 18 
             C 74 18, 56 34, 56 58 
             C 56 82, 74 98, 98 98 
             C 116 98, 128 91, 134 80 
             L 125 76 
             C 120 83, 111 88, 98 88 
             C 80 88, 68 76, 68 58 
             C 68 40, 80 28, 98 28 
             C 110 28, 118 33, 123 40 
             Z"
          fill={redColor}
        />

        {/* Horizontal badge plate crossing the T stem */}
        <rect
          x="10"
          y="50"
          width="75"
          height="16"
          rx="2"
          fill={badgeBg}
        />

        {/* TEBA CONNECTS text inside badge */}
        <text
          x="47"
          y="62"
          textAnchor="middle"
          fontSize="9"
          fontWeight="800"
          letterSpacing="1.2"
          fontFamily="system-ui, -apple-system, sans-serif"
          fill={textColor}
        >
          TEBA CONNECTS
        </text>
      </svg>

      {showText && (
        <div className="hidden sm:flex flex-col justify-center">
          <span
            className="text-sm font-bold tracking-[0.22em] uppercase font-sans leading-tight"
            style={{ color: textColor }}
          >
            Teba Connects
          </span>
          <span className="text-[9px] tracking-widest uppercase font-semibold text-[#B42034] mt-0.5">
            Global Advisory
          </span>
        </div>
      )}
    </div>
  );
}
