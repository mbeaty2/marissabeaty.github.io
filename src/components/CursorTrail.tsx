import React, { useEffect, useRef } from 'react';

const SPARK_COLORS = [
  'var(--accent-color)',
  'var(--spark)',
  'var(--accent-soft)',
  'var(--sage)',
];

const STAR_CLIP =
  'polygon(50% 5%, 60.1% 36.1%, 92.8% 36.1%, 66.4% 55.3%, 76.5% 86.4%, 50% 67.2%, 23.6% 86.4%, 33.6% 55.3%, 7.2% 36.1%, 39.9% 36.1%)';

/**
 * Replaces the system pointer with a small star that leaves a trail of
 * fading, colour-cycling sparks behind it as it moves or as the page
 * scrolls. Skipped entirely on touch devices and under
 * prefers-reduced-motion -- this is a decorative flourish, not a control.
 */
const CursorTrail: React.FC = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const layerRef = useRef<HTMLDivElement>(null);
  const lastPos = useRef({ x: 0, y: 0 });
  const lastSpawn = useRef(0);
  const hasMoved = useRef(false);

  useEffect(() => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const coarsePointer = window.matchMedia('(pointer: coarse)').matches;
    if (reduceMotion || coarsePointer) return;

    document.body.classList.add('custom-cursor-active');

    const spawnSpark = (x: number, y: number) => {
      const layer = layerRef.current;
      if (!layer) return;

      const spark = document.createElement('span');
      spark.className = 'cursor-spark';
      const angle = Math.random() * Math.PI * 2;
      const distance = 18 + Math.random() * 22;
      spark.style.left = `${x}px`;
      spark.style.top = `${y}px`;
      spark.style.setProperty('--dx', `${Math.cos(angle) * distance}px`);
      spark.style.setProperty('--dy', `${Math.sin(angle) * distance}px`);
      spark.style.setProperty('--rot', `${(Math.random() - 0.5) * 180}deg`);
      spark.style.background =
        SPARK_COLORS[Math.floor(Math.random() * SPARK_COLORS.length)];
      const size = 6 + Math.random() * 6;
      spark.style.width = `${size}px`;
      spark.style.height = `${size}px`;

      spark.addEventListener('animationend', () => spark.remove());
      layer.appendChild(spark);
    };

    const maybeSpawn = (x: number, y: number) => {
      const now = performance.now();
      if (now - lastSpawn.current > 45) {
        spawnSpark(x, y);
        lastSpawn.current = now;
      }
    };

    const handleMove = (e: MouseEvent) => {
      lastPos.current = { x: e.clientX, y: e.clientY };
      if (!hasMoved.current) {
        hasMoved.current = true;
        cursorRef.current?.classList.add('is-visible');
      }
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
      }
      maybeSpawn(e.clientX, e.clientY);
    };

    const handleScroll = () => {
      if (hasMoved.current) {
        maybeSpawn(lastPos.current.x, lastPos.current.y);
      }
    };

    window.addEventListener('mousemove', handleMove);
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      document.body.classList.remove('custom-cursor-active');
      window.removeEventListener('mousemove', handleMove);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <div ref={layerRef} className="cursor-trail-layer" aria-hidden="true" />
      <div ref={cursorRef} className="custom-cursor" aria-hidden="true">
        <span className="custom-cursor-star" style={{ clipPath: STAR_CLIP }} />
      </div>
    </>
  );
};

export default CursorTrail;
