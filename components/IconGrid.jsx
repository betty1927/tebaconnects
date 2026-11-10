import React from 'react';
import IconCard from './IconCard';

export default function IconGrid({
  items = [],
  columns = 3, // 2, 3, 4, 5, 6
  variant = 'card',
  className = ''
}) {
  const getColClass = (cols) => {
    switch (cols) {
      case 2:
        return 'grid-cols-1 md:grid-cols-2';
      case 4:
        return 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-4';
      case 5:
        return 'grid-cols-2 sm:grid-cols-3 md:grid-cols-5';
      case 6:
        return 'grid-cols-2 sm:grid-cols-3 lg:grid-cols-6';
      case 3:
      default:
        return 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3';
    }
  };

  return (
    <div className={`grid ${getColClass(columns)} gap-4 sm:gap-6 ${className}`}>
      {items.map((item, idx) => (
        <IconCard
          key={item.id || item.title || idx}
          icon={item.icon}
          title={item.title}
          description={item.description}
          href={item.href}
          linkText={item.linkText}
          variant={item.variant || variant}
        />
      ))}
    </div>
  );
}
