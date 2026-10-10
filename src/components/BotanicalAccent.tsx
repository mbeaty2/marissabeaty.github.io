import React from 'react';
import { cn } from '@/lib/utils';
import FadeIn from './animations/FadeIn';

interface BotanicalAccentProps {
  src: string;
  alt: string;
  caption: string;
  align?: 'left' | 'right';
  /** 'small' renders at marginalia scale, for a tucked-in-the-corner note rather than a standalone plate. */
  size?: 'default' | 'small';
  /** Degrees to tilt just the image, as if set down by hand rather than placed square. */
  rotate?: number;
  className?: string;
}

const SIZE_CLASSES: Record<NonNullable<BotanicalAccentProps['size']>, string> = {
  default: 'max-w-[200px] sm:max-w-[240px]',
  small: 'max-w-[110px] sm:max-w-[130px]',
};

const BotanicalAccent: React.FC<BotanicalAccentProps> = ({
  src,
  alt,
  caption,
  align = 'right',
  size = 'default',
  rotate = 0,
  className,
}) => {
  return (
    <FadeIn>
      <div
        className={cn(
          'relative w-full py-10',
          SIZE_CLASSES[size],
          align === 'right' ? 'ml-auto' : 'mr-auto',
          className
        )}
      >
        <img
          src={src}
          alt={alt}
          className="w-full h-auto pointer-events-none select-none"
          style={{ transform: rotate ? `rotate(${rotate}deg)` : undefined }}
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
