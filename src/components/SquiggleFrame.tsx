import React, { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';

interface SquiggleFrameProps {
  variant?: 1 | 2 | 3;
  className?: string;
}

/** Hand-drawn, wobbly closed loops used as decorative frames over rounded cards. */
const PATHS: Record<number, string> = {
  1:
    'M 40,4 C 150,-4 300,10 460,2 C 520,-2 580,10 585,30 ' +
    'C 596,55 592,90 596,130 C 600,220 590,300 598,370 ' +
    'C 602,420 588,460 560,478 C 460,490 350,470 300,486 ' +
    'C 220,498 120,480 60,488 C 20,492 2,470 4,440 ' +
    'C 8,380 -2,320 4,260 C 10,190 -4,120 6,70 ' +
    'C 10,40 20,10 40,4 Z',
  2:
    'M 36,10 C 160,-6 320,6 440,-2 C 500,-6 560,4 572,24 ' +
    'C 580,40 572,54 558,50 C 546,47 548,34 562,32 ' +
    'C 584,30 598,52 596,90 C 592,180 602,280 594,360 ' +
    'C 590,410 598,450 566,468 C 480,492 360,470 280,490 ' +
    'C 200,508 100,486 48,492 C 14,496 -6,468 6,438 ' +
    'C 14,418 2,400 -10,410 C -22,420 -14,440 4,436 ' +
    'C 16,434 14,414 6,340 C -4,260 10,180 2,100 ' +
    'C -2,60 14,24 36,10 Z',
  3:
    'M 50,2 C 170,10 300,-8 420,4 C 490,10 560,-4 580,20 ' +
    'C 594,38 588,60 596,96 C 606,170 592,260 600,340 ' +
    'C 604,390 592,440 548,462 C 500,486 440,468 400,484 ' +
    'C 392,487 398,496 408,494 C 420,491 416,480 404,482 ' +
    'C 320,498 220,480 140,490 C 80,497 24,478 8,444 ' +
    'C -4,418 8,386 4,350 C -2,280 10,200 2,130 ' +
    'C -4,84 8,46 50,2 Z',
};

const SquiggleFrame: React.FC<SquiggleFrameProps> = ({ variant = 1, className }) => {
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
      { threshold: 0.1 }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return (
    <svg
      ref={ref}
      className={cn('absolute -inset-2 w-[calc(100%+16px)] h-[calc(100%+16px)] text-spark', className)}
      viewBox="0 0 600 500"
      preserveAspectRatio="none"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="presentation"
      aria-hidden="true"
    >
      <path
        className={cn('fn-trace-wide', visible && 'is-visible')}
        d={PATHS[variant]}
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        vectorEffect="non-scaling-stroke"
      />
    </svg>
  );
};

export default SquiggleFrame;
