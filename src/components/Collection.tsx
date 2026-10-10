import React from 'react';
import { cn } from '@/lib/utils';
import FadeIn from './animations/FadeIn';
import SectionDivider from './SectionDivider';
import ImprintedStar from './ImprintedStar';

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
  href: string;
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
    href: 'https://neuripscreativityworkshop.github.io/2023/papers/ml4cd2023_paper09.pdf',
  },
  {
    num: '02',
    title: 'Want to Build Good Products? Treat Them Like a Video Game.',
    description:
      'How responsive interaction, gradual skill-building, and clear goal loops make products more engaging — with Duolingo, Notion, and Strava as examples.',
    tag: 'Essay / Product',
    year: '2026',
    icon: 'mark',
    href: 'https://marissabeaty.substack.com/p/want-to-build-good-products-treat',
  },
  {
    num: '03',
    title: "What Are Gravitational Waves? Space's Hidden Ripples",
    description:
      "Ripples in space-time from colliding black holes — tracing Einstein's 1916 prediction to LIGO's 2015 detection.",
    tag: 'Essay / Science',
    year: '2026',
    icon: 'orbit',
    href: 'https://marissabeaty.substack.com/p/space-surfing',
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
    <section id="collection" className={cn('relative py-20', className)}>
      <SectionDivider variant={1} className="mb-14" />
      <ImprintedStar className="hidden sm:block absolute top-[108px] left-1/3 w-7" rotate={-14} />
      <ImprintedStar className="hidden sm:block absolute top-20 right-[6%] w-6" rotate={-20} />
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
              <a
                key={item.num}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col gap-3 p-6 min-h-[220px] no-underline transition-colors hover:bg-surface2/60"
              >
                <div className="w-11 h-11">
                  <Icon />
                </div>

                <p className="font-serif font-semibold uppercase tracking-[0.02em] text-[14px] leading-snug text-ink transition-colors group-hover:text-cobalt">
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
              </a>
            );
          })}
        </div>
      </FadeIn>
    </section>
  );
};

export default Collection;
