import React from 'react';
import { cn } from '@/lib/utils';

interface ImprintedStarProps {
  className?: string;
  /** Degrees of rotation, for variety when several stars are scattered together. */
  rotate?: number;
}

/**
 * A small star filled close to the page's own surface tone and given a
 * paired light/dark drop-shadow, so it reads as pressed into the paper
 * rather than printed on it -- same blind-emboss technique used elsewhere,
 * scaled down and scattered in small doses around the page.
 */
const ImprintedStar: React.FC<ImprintedStarProps> = ({ className, rotate = 0 }) => {
  return (
    <svg
      viewBox="0 0 100 100"
      className={cn('text-surface2', className)}
      style={{
        transform: rotate ? `rotate(${rotate}deg)` : undefined,
        filter:
          'drop-shadow(1px 1px 0.5px var(--emboss-highlight)) drop-shadow(-1px -1px 0.5px var(--emboss-shadow))',
      }}
      xmlns="http://www.w3.org/2000/svg"
      role="presentation"
      aria-hidden="true"
    >
      <path
        d="M50,5 L60.1,36.1 L92.8,36.1 L66.4,55.3 L76.5,86.4 L50,67.2 L23.6,86.4 L33.6,55.3 L7.2,36.1 L39.9,36.1 Z"
        fill="currentColor"
        stroke="currentColor"
        strokeWidth="4"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default ImprintedStar;
