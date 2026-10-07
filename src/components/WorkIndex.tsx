import React from 'react';
import { cn } from '@/lib/utils';
import FadeIn from './animations/FadeIn';

interface WorkIndexProps {
  className?: string;
}

interface WorkRow {
  num: string;
  title: React.ReactNode;
  description: string;
  tag: string;
  year: string;
}

const WORK_ROWS: WorkRow[] = [
  {
    num: '01',
    title: (
      <>
        Envisioning <em className="italic">Distant</em> Worlds
      </>
    ),
    description:
      'Visualising exoplanet data for a general audience — published at NeurIPS 2023 with T. Broad.',
    tag: 'Research / Visualisation',
    year: '2023',
  },
  {
    num: '02',
    title: (
      <>
        [Project <em className="italic">title</em>]
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
        [Project <em className="italic">title</em>]
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
        [Project <em className="italic">title</em>]
      </>
    ),
    description: '[One-line description of the project.]',
    tag: '[Discipline]',
    year: '[20XX]',
  },
];

const WorkIndex: React.FC<WorkIndexProps> = ({ className }) => {
  return (
    <section id="work" className={cn('py-20 border-t border-ink', className)}>
      <div className="flex flex-wrap items-baseline justify-between gap-6 mb-10">
        <FadeIn>
          <p className="font-mono text-xs uppercase tracking-[0.08em] text-slateline">
            01 / Index
          </p>
        </FadeIn>
        <FadeIn delay={60}>
          <h2 className="font-serif font-light leading-[1.1] tracking-[-0.02em] text-[clamp(36px,4.6vw,60px)] text-ink">
            Selected <em className="italic text-cobalt">work</em>
          </h2>
        </FadeIn>
      </div>

      <div className="flex flex-col">
        {WORK_ROWS.map((row, i) => (
          <FadeIn key={row.num} delay={i * 60}>
            <a
              href="#"
              onClick={(e) => e.preventDefault()}
              className={cn(
                'group grid grid-cols-1 md:grid-cols-[56px_2fr_3fr_auto_auto] gap-2 md:gap-6 items-baseline px-3 py-5 border-t border-ink no-underline text-ink transition-colors hover:bg-surface2 focus-visible:bg-surface2',
                i === WORK_ROWS.length - 1 && 'md:border-b'
              )}
            >
              <span className="font-mono text-[13px] text-slateline">{row.num}</span>
              <span className="font-serif text-[clamp(19px,2vw,24px)] transition-colors group-hover:text-cobalt">
                {row.title}
              </span>
              <span className="text-[15px] text-slateline max-w-[50ch]">
                {row.description}
              </span>
              <span className="font-mono text-[11px] uppercase tracking-[0.07em] text-slateline whitespace-nowrap">
                {row.tag}
              </span>
              <span className="font-mono text-[13px] text-slateline whitespace-nowrap">
                {row.year}
              </span>
            </a>
          </FadeIn>
        ))}
        {/* Last row needs its own bottom rule on mobile since the md:border-b trick above is desktop-only */}
        <div className="border-t border-ink md:hidden" aria-hidden="true" />
      </div>
    </section>
  );
};

export default WorkIndex;
