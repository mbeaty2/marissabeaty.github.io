import React, { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';

interface SquiggleFrameProps {
  className?: string;
}

/** A hand-drawn, wobbly closed loop used as a decorative frame over a rounded card. */
const PATH =
  'M 40,4 C 150,-4 300,10 460,2 C 520,-2 580,10 585,30 ' +
  'C 596,55 592,90 596,130 C 600,220 590,300 598,370 ' +
  'C 602,420 588,460 560,478 C 460,490 350,470 300,486 ' +
  'C 220,498 120,480 60,488 C 20,492 2,470 4,440 ' +
  'C 8,380 -2,320 4,260 C 10,190 -4,120 6,70 ' +
  'C 10,40 20,10 40,4 Z';

const SquiggleFrame: React.FC<SquiggleFrameProps> = ({ className }) => {
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
        d={PATH}
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
