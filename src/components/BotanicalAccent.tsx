import React from 'react';
import { cn } from '@/lib/utils';
import FadeIn from './animations/FadeIn';

interface BotanicalAccentProps {
  src: string;
  alt: string;
  caption: string;
  align?: 'left' | 'right';
  className?: string;
}

const BotanicalAccent: React.FC<BotanicalAccentProps> = ({
  src,
  alt,
  caption,
  align = 'right',
  className,
}) => {
  return (
    <FadeIn>
      <div
        className={cn(
          'relative w-full max-w-[200px] sm:max-w-[240px] py-10',
          align === 'right' ? 'ml-auto' : 'mr-auto',
          className
        )}
      >
        <img
          src={src}
          alt={alt}
          className="w-full h-auto pointer-events-none select-none"
          loading="lazy"
        />
        <p
          className={cn(
            'mt-2 font-mono text-[10px] uppercase tracking-[0.07em] text-slateline',
            align === 'right' ? 'text-right' : 'text-left'
          )}
        >
          {caption}
        </p>
      </div>
    </FadeIn>
  );
};

export default BotanicalAccent;
