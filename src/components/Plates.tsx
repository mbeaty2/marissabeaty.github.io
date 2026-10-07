import React from 'react';
import { cn } from '@/lib/utils';
import FadeIn from './animations/FadeIn';

interface PlatesProps {
  className?: string;
}

interface Plate {
  num: string;
  year: string;
  offsetClass: string;
  spark?: boolean;
}

const PLATES: Plate[] = [
  { num: '01', year: '[20XX]', offsetClass: '', spark: true },
  { num: '02', year: '[20XX]', offsetClass: 'md:mt-11' },
  { num: '03', year: '[20XX]', offsetClass: 'md:mt-3' },
];

const SpecimenMark: React.FC = () => (
  <svg viewBox="0 0 100 100" className="absolute inset-0 w-full h-full text-slateline opacity-55" aria-hidden="true">
    <line x1="0" y1="50" x2="100" y2="50" stroke="currentColor" strokeWidth="0.5" />
    <line x1="50" y1="0" x2="50" y2="100" stroke="currentColor" strokeWidth="0.5" />
    <circle cx="50" cy="50" r="30" stroke="currentColor" strokeWidth="0.5" fill="none" />
  </svg>
);

const Plates: React.FC<PlatesProps> = ({ className }) => {
  return (
    <section id="plates" className={cn('py-20 border-t border-ink', className)}>
      <div className="flex flex-wrap items-baseline justify-between gap-6 mb-10">
        <FadeIn>
          <p className="font-mono text-xs uppercase tracking-[0.08em] text-slateline">
            02 / Specimens
          </p>
        </FadeIn>
        <FadeIn delay={60}>
          <h2 className="font-serif font-light leading-[1.1] tracking-[-0.02em] text-[clamp(36px,4.6vw,60px)] text-ink">
            Selected <em className="italic text-cobalt">plates</em>
          </h2>
        </FadeIn>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 md:gap-7">
        {PLATES.map((plate, i) => (
          <FadeIn key={plate.num} delay={i * 80} className={plate.offsetClass}>
            <figure>
              <div className="relative aspect-[4/5] bg-mist border border-ink overflow-hidden">
                <SpecimenMark />
                {plate.spark && (
                  <span
                    className="absolute top-3.5 right-3.5 w-1.5 h-1.5 rounded-full bg-spark"
                    aria-hidden="true"
                  />
                )}
                <p className="absolute inset-0 flex items-center justify-center text-center p-4 font-mono text-[11px] uppercase tracking-[0.08em] text-slateline">
                  [Image placeholder]
                </p>
              </div>
              <div className="flex justify-between mt-3 font-mono text-[11px] uppercase tracking-[0.08em] text-slateline">
                <span>Plate {plate.num}</span>
                <span>{plate.year}</span>
              </div>
              <figcaption>
                <p className="mt-2.5 font-serif text-[19px] text-ink">
                  [Project <em className="italic text-cobalt">title</em>]
                </p>
                <p className="mt-1.5 text-sm text-slateline">
                  [Short description of the piece and the role it played.]
                </p>
              </figcaption>
            </figure>
          </FadeIn>
        ))}
      </div>
    </section>
  );
};

export default Plates;
