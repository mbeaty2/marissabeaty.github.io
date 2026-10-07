import React, { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';

interface ConstructionDiagramProps {
  className?: string;
}

const ConstructionDiagram: React.FC<ConstructionDiagramProps> = ({ className }) => {
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

  return (
    <svg
      ref={ref}
      className={cn('w-full max-w-[420px] h-auto text-ink', className)}
      viewBox="0 0 420 220"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="A construction-line diagram of circles and registration marks"
    >
      <circle
        className={cn('fn-trace', visible && 'is-visible')}
        cx="90"
        cy="110"
        r="70"
        stroke="currentColor"
        strokeWidth="1"
      />
      <circle
        className={cn('fn-trace', visible && 'is-visible')}
        cx="250"
        cy="70"
        r="40"
        stroke="var(--accent-color)"
        strokeWidth="1"
      />
      <line
        className={cn('fn-trace', visible && 'is-visible')}
        x1="20"
        y1="110"
        x2="400"
        y2="110"
        stroke="currentColor"
        strokeWidth="1"
      />
      <line
        className={cn('fn-trace', visible && 'is-visible')}
        x1="90"
        y1="20"
        x2="90"
        y2="200"
        stroke="currentColor"
        strokeWidth="1"
      />
      <line
        className={cn('fn-trace', visible && 'is-visible')}
        x1="250"
        y1="10"
        x2="250"
        y2="140"
        stroke="var(--accent-color)"
        strokeWidth="1"
      />
      <circle cx="90" cy="110" r="2.5" fill="currentColor" />
      <circle cx="250" cy="70" r="2.5" fill="var(--accent-color)" />
      <circle cx="340" cy="150" r="3" fill="var(--spark)" />
    </svg>
  );
};

export default ConstructionDiagram;
