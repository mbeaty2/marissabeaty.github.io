import React from 'react';
import { cn } from '@/lib/utils';
import FadeIn from './animations/FadeIn';

interface CollectionProps {
  className?: string;
}

interface CollectionItem {
  num: string;
  title: string;
  description: string;
  tag: string;
  year: string;
  icon: 'orbit' | 'mark';
}

const COLLECTION: CollectionItem[] = [
  {
    num: '01',
    title: 'Envisioning Distant Worlds',
    description:
      'Visualising exoplanet data for a general audience — published at NeurIPS 2023 with T. Broad.',
    tag: 'Research / Visualisation',
    year: '2023',
    icon: 'orbit',
  },
  {
    num: '02',
    title: '[Project title]',
    description: '[One-line description of the project.]',
    tag: '[Discipline]',
    year: '[20XX]',
    icon: 'mark',
  },
  {
    num: '03',
    title: '[Project title]',
    description: '[One-line description of the project.]',
    tag: '[Discipline]',
    year: '[20XX]',
    icon: 'mark',
  },
  {
    num: '04',
    title: '[Project title]',
    description: '[One-line description of the project.]',
    tag: '[Discipline]',
    year: '[20XX]',
    icon: 'mark',
  },
];

const OrbitIcon: React.FC = () => (
  <svg viewBox="0 0 48 48" className="w-full h-full text-ink" fill="none" aria-hidden="true">
    <circle cx="24" cy="24" r="3" fill="currentColor" />
    <ellipse cx="24" cy="24" rx="20" ry="8" stroke="currentColor" strokeWidth="1" />
    <ellipse
      cx="24"
      cy="24"
      rx="20"
      ry="8"
      stroke="currentColor"
      strokeWidth="1"
      transform="rotate(60 24 24)"
    />
    <circle cx="44" cy="24" r="1.5" fill="var(--spark)" />
  </svg>
);

const MarkIcon: React.FC = () => (
  <svg viewBox="0 0 48 48" className="w-full h-full text-ink" fill="none" aria-hidden="true">
    <rect x="6" y="6" width="36" height="36" stroke="currentColor" strokeWidth="1" />
    <line x1="24" y1="6" x2="24" y2="42" stroke="currentColor" strokeWidth="0.75" />
    <line x1="6" y1="24" x2="42" y2="24" stroke="currentColor" strokeWidth="0.75" />
    <circle cx="24" cy="24" r="9" stroke="currentColor" strokeWidth="0.75" />
  </svg>
);

const ICONS: Record<CollectionItem['icon'], React.FC> = {
  orbit: OrbitIcon,
  mark: MarkIcon,
};

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

      <FadeIn delay={100}>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 border border-ink divide-y divide-ink sm:divide-x">
          {COLLECTION.map((item) => {
            const Icon = ICONS[item.icon];
            return (
              <div key={item.num} className="flex flex-col gap-3 p-6 min-h-[220px]">
                <div className="w-11 h-11">
                  <Icon />
                </div>

                <p className="font-serif font-semibold uppercase tracking-[0.02em] text-[14px] leading-snug text-ink">
                  {item.title}
                </p>

                <p className="font-mono text-[10px] uppercase tracking-[0.07em] text-cobalt">
                  {item.tag}
                </p>

                <p className="text-[13px] leading-snug text-slateline">
                  {item.description}
                </p>

                <p className="mt-auto pt-3 font-mono text-[11px] text-slateline">
                  {item.num} — {item.year}
                </p>
              </div>
            );
          })}
        </div>
      </FadeIn>
    </section>
  );
};

export default Collection;
