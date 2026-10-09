import React from 'react';
import { cn } from '@/lib/utils';

interface ImprintedFlowerProps {
  className?: string;
}

/**
 * A single bloom rendered as a filled silhouette, nudged toward the page's
 * own surface tone and given a paired light/dark drop-shadow so it reads as
 * pressed into the paper rather than printed on it -- a blind-emboss effect.
 */
const ImprintedFlower: React.FC<ImprintedFlowerProps> = ({ className }) => {
  return (
    <svg
      viewBox="0 0 240 320"
      className={cn('text-surface2', className)}
      style={{
        filter:
          'drop-shadow(1.5px 1.5px 0.5px rgba(255,255,255,0.65)) drop-shadow(-1.5px -1.5px 0.5px rgba(10,51,35,0.22))',
      }}
      xmlns="http://www.w3.org/2000/svg"
      role="presentation"
      aria-hidden="true"
    >
      <path
        d="M120,156 C113,200 132,244 116,300"
        stroke="currentColor"
        strokeWidth="5"
        fill="none"
        strokeLinecap="round"
      />
      <ellipse cx="95" cy="232" rx="11" ry="30" transform="rotate(-40 95 232)" fill="currentColor" />
      <ellipse cx="146" cy="262" rx="11" ry="30" transform="rotate(40 146 262)" fill="currentColor" />

      <g>
        <ellipse cx="120" cy="100" rx="19" ry="37" fill="currentColor" />
        <ellipse cx="120" cy="100" rx="19" ry="37" fill="currentColor" transform="rotate(72 120 140)" />
        <ellipse cx="120" cy="100" rx="19" ry="37" fill="currentColor" transform="rotate(144 120 140)" />
        <ellipse cx="120" cy="100" rx="19" ry="37" fill="currentColor" transform="rotate(216 120 140)" />
        <ellipse cx="120" cy="100" rx="19" ry="37" fill="currentColor" transform="rotate(288 120 140)" />
        <circle cx="120" cy="140" r="17" fill="currentColor" />
      </g>
    </svg>
  );
};

export default ImprintedFlower;
