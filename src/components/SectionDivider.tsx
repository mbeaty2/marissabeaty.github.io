import React, { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';

interface SectionDividerProps {
  /** Picks among a small set of hand-drawn variants so repeats don't look identical. */
  variant?: 1 | 2 | 3;
  className?: string;
  /**
   * Skip the scroll-triggered reveal and render fully drawn immediately.
   * Use for dividers right at the bottom of the page -- the IntersectionObserver's
   * 20% threshold can fail to ever fire for the very last element on a short
   * mobile viewport, leaving the line permanently (and only partially) drawn.
   */
  eager?: boolean;
}

const PATHS: Record<number, string> = {
  1: 'M0,30 C 70,10 140,48 210,30 C 250,19 272,10 266,3 C 260,2 244,0 244,10 C 244,20 260,26 278,22 C 300,17 320,16 340,30 C 410,50 480,10 550,30 C 610,47 660,22 690,30 C 720,38 700,48 684,42 C 670,37 674,24 690,20 C 715,14 740,18 760,30 C 830,50 900,10 970,30 C 1040,49 1120,14 1200,30',
  2: 'M0,32 C 60,50 120,14 180,30 C 230,43 250,30 240,20 C 232,12 216,16 218,26 C 220,36 240,40 262,32 C 310,15 360,48 420,30 C 480,13 520,13 540,28 C 552,37 540,46 526,40 C 514,35 518,22 534,18 C 560,12 590,20 610,30 C 680,48 750,10 820,30 C 880,47 930,24 960,30 C 1000,38 980,48 966,42 C 954,37 958,24 974,20 C 1010,11 1060,22 1100,30 C 1140,38 1170,24 1200,30',
  3: 'M0,28 C 90,46 170,12 250,30 C 300,41 330,24 320,14 C 312,6 296,10 298,20 C 300,30 322,34 346,26 C 400,8 460,46 520,28 C 560,16 540,4 528,10 C 518,15 524,26 538,28 C 580,34 630,12 680,30 C 750,52 830,8 900,30 C 950,45 980,26 970,16 C 962,8 946,12 948,22 C 950,32 972,36 996,28 C 1050,10 1120,44 1200,28',
};

const SectionDivider: React.FC<SectionDividerProps> = ({ variant = 1, className, eager = false }) => {
  const ref = useRef<SVGSVGElement>(null);
  const [visible, setVisible] = useState(eager);

  useEffect(() => {
    if (eager) return;
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
  }, [eager]);

  return (
    <svg
      ref={ref}
      className={cn('w-full h-8 md:h-10 text-chocolate', className)}
      viewBox="0 0 1200 60"
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
        strokeWidth="1.5"
        strokeLinecap="round"
        vectorEffect="non-scaling-stroke"
      />
    </svg>
  );
};

export default SectionDivider;
