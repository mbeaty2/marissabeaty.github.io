import React, { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';

interface BotanicalDiagramProps {
  className?: string;
}

/** A single petal outline, pointing up from the flower's centre. */
const Petal: React.FC<{ rotate: number; traced: boolean }> = ({ rotate, traced }) => (
  <path
    className={cn('fn-trace', traced && 'is-visible')}
    d="M150,142 C 133,118 128,82 150,54 C 172,82 167,118 150,142 Z"
    stroke="currentColor"
    strokeWidth="1.1"
    fill="none"
    transform={`rotate(${rotate} 150 142)`}
  />
);

/**
 * A single-stem botanical specimen illustration, in the style of a 19th
 * century herbarium plate: fine line work, no fill, a few scientific
 * annotation marks. Traces itself in on scroll, matching the hero
 * diagram it replaces.
 */
const BotanicalDiagram: React.FC<BotanicalDiagramProps> = ({ className }) => {
  const ref = useRef<SVGSVGElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  const petalAngles = [0, 60, 120, 180, 240, 300];

  return (
    <svg
      ref={ref}
      className={cn('w-full max-w-[280px] h-auto text-ink', className)}
      viewBox="0 0 300 420"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="A botanical line illustration of a single flowering stem, in the style of a herbarium specimen plate"
    >
      {/* stem */}
      <path
        className={cn('fn-trace', visible && 'is-visible')}
        d="M150,410 C144,340 158,280 150,224 C145,196 155,178 150,150"
        stroke="currentColor"
        strokeWidth="1.3"
      />

      {/* leaves */}
      <path
        className={cn('fn-trace', visible && 'is-visible')}
        d="M150,300 C108,292 66,302 44,334 C72,320 112,316 150,308 Z"
        stroke="currentColor"
        strokeWidth="1"
      />
      <path
        className={cn('fn-trace', visible && 'is-visible')}
        d="M150,300 C150,308 150,312 150,316"
        stroke="currentColor"
        strokeWidth="0.6"
      />
      <path
        className={cn('fn-trace', visible && 'is-visible')}
        d="M150,356 C192,342 234,348 258,374 C228,366 188,366 150,364 Z"
        stroke="currentColor"
        strokeWidth="1"
      />
      <path
        className={cn('fn-trace', visible && 'is-visible')}
        d="M150,356 C150,362 150,366 150,364"
        stroke="currentColor"
        strokeWidth="0.6"
      />

      {/* bloom */}
      {petalAngles.map((angle) => (
        <Petal key={angle} rotate={angle} traced={visible} />
      ))}
      <circle
        className={cn('fn-trace', visible && 'is-visible')}
        cx="150"
        cy="142"
        r="7"
        stroke="currentColor"
        strokeWidth="1"
      />
      <circle cx="150" cy="142" r="2" fill="var(--sage)" />

      {/* scientific annotation marks */}
      <line x1="178" y1="68" x2="188" y2="60" stroke="var(--slate)" strokeWidth="0.75" opacity="0.6" />
      <circle cx="191" cy="57" r="2.2" fill="var(--spark)" />

      <line x1="112" y1="226" x2="96" y2="226" stroke="var(--slate)" strokeWidth="0.75" opacity="0.6" />
      <line x1="112" y1="378" x2="96" y2="378" stroke="var(--slate)" strokeWidth="0.75" opacity="0.6" />
    </svg>
  );
};

export default BotanicalDiagram;
