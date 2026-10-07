import React from 'react';
import { cn } from '@/lib/utils';
import FadeIn from './animations/FadeIn';

interface CollectionProps {
  className?: string;
}

interface CollectionItem {
  num: string;
  title: React.ReactNode;
  description: string;
  tag: string;
  year: string;
  spark?: boolean;
}

const COLLECTION: CollectionItem[] = [
  {
    num: '01',
    title: (
      <>
        Envisioning <em className="italic text-cobalt">Distant</em> Worlds
      </>
    ),
    description:
      'Visualising exoplanet data for a general audience — published at NeurIPS 2023 with T. Broad.',
    tag: 'Research / Visualisation',
    year: '2023',
    spark: true,
  },
  {
    num: '02',
    title: (
      <>
        [Project <em className="italic text-cobalt">title</em>]
      </>
    ),
    description: '[One-line description of the project.]',
    tag: '[Discipline]',
    year: '[20XX]',
  },
  {
    num: '03',
    title: (
      <>
        [Project <em className="italic text-cobalt">title</em>]
      </>
    ),
    description: '[One-line description of the project.]',
    tag: '[Discipline]',
    year: '[20XX]',
  },
  {
    num: '04',
    title: (
      <>
        [Project <em className="italic text-cobalt">title</em>]
      </>
    ),
    description: '[One-line description of the project.]',
    tag: '[Discipline]',
    year: '[20XX]',
  },
];

const SpecimenMark: React.FC = () => (
  <svg viewBox="0 0 100 100" className="absolute inset-0 w-full h-full text-slateline opacity-55" aria-hidden="true">
    <line x1="0" y1="50" x2="100" y2="50" stroke="currentColor" strokeWidth="0.5" />
    <line x1="50" y1="0" x2="50" y2="100" stroke="currentColor" strokeWidth="0.5" />
    <circle cx="50" cy="50" r="30" stroke="currentColor" strokeWidth="0.5" fill="none" />
  </svg>
);

const Collection: React.FC<CollectionProps> = ({ className }) => {
  return (
    <section id="collection" className={cn('py-20 border-t border-ink', className)}>
      <div className="flex flex-wrap items-baseline justify-between gap-6 mb-10">
        <FadeIn>
          <p className="font-mono text-xs uppercase tracking-[0.08em] text-slateline">
            01 / Collection
          </p>
        </FadeIn>
        <FadeIn delay={60}>
          <h2 className="font-serif font-light leading-[1.1] tracking-[-0.02em] text-[clamp(36px,4.6vw,60px)] text-ink">
            Selected <em className="italic text-cobalt">collection</em>
          </h2>
        </FadeIn>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-7 gap-y-12">
        {COLLECTION.map((item, i) => (
          <FadeIn
            key={item.num}
            delay={i * 70}
            className={cn(i % 2 === 1 && 'sm:mt-16')}
          >
            <figure>
              <div className="relative aspect-[4/3] bg-mist border border-ink overflow-hidden">
                <SpecimenMark />
                {item.spark && (
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
                <span>{item.num}</span>
                <span>{item.year}</span>
              </div>

              <figcaption>
                <p className="mt-2.5 font-serif text-[22px] text-ink">{item.title}</p>
                <p className="mt-1 font-mono text-[11px] uppercase tracking-[0.07em] text-slateline">
                  {item.tag}
                </p>
                <p className="mt-2 text-[15px] text-slateline max-w-[48ch]">
                  {item.description}
                </p>
              </figcaption>
            </figure>
          </FadeIn>
        ))}
      </div>
    </section>
  );
};

export default Collection;
