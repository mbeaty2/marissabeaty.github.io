import React from 'react';
import { cn, scrollToId } from '@/lib/utils';
import FadeIn from './animations/FadeIn';
import ConstructionDiagram from './ConstructionDiagram';

interface HeroProps {
  className?: string;
}

const DETAILS: { term: string; detail: string }[] = [
  { term: 'Based', detail: 'London' },
  { term: 'Now', detail: 'Lecturer, UAL Creative Computing Institute' },
  { term: 'Also', detail: 'Product Consultant, Colibri Digital' },
  { term: 'Open to', detail: 'Research and creative roles focused on data' },
];

const Hero: React.FC<HeroProps> = ({ className }) => {
  const scrollTo = (id: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    scrollToId(id);
  };

  return (
    <section
      id="top"
      className={cn('grid grid-cols-1 md:grid-cols-[1.6fr_1fr] gap-12 py-16 md:py-24', className)}
    >
      <div className="flex flex-col gap-7">
        <FadeIn>
          <p className="font-mono text-xs uppercase tracking-[0.08em] text-slateline">
            Marissa Beaty — London
          </p>
        </FadeIn>

        <FadeIn delay={80}>
          <h1 className="font-serif font-light leading-[1.05] tracking-[-0.02em] text-[clamp(48px,7.2vw,104px)] max-w-[16ch] text-ink">
            Making <em className="italic text-cobalt">data</em> legible, and a
            little more <em className="italic text-cobalt">human</em>.
          </h1>
        </FadeIn>

        <FadeIn delay={160}>
          <p className="font-serif text-[clamp(17px,1.6vw,20px)] leading-[1.6] max-w-[62ch] text-ink">
            I'm a researcher and product consultant working where data, design
            and storytelling meet. I build tools that make complexity easier
            to hold, and I write to find out what the data actually means.
          </p>
        </FadeIn>

        <FadeIn delay={220}>
          <div className="flex flex-wrap gap-8">
            <a
              href="#work"
              onClick={scrollTo('work')}
              className="inline-flex items-center gap-2 font-mono text-[13px] uppercase tracking-[0.08em] text-ink no-underline border-b border-spark pb-0.5 transition-colors hover:text-cobalt"
            >
              View the index
            </a>
            <a
              href="#contact"
              onClick={scrollTo('contact')}
              className="inline-flex items-center gap-2 font-mono text-[13px] uppercase tracking-[0.08em] text-ink no-underline border-b border-ink pb-0.5 transition-colors hover:text-cobalt hover:border-cobalt"
            >
              Say hello
            </a>
          </div>
        </FadeIn>

        <FadeIn delay={280}>
          <ConstructionDiagram className="mt-2" />
        </FadeIn>
      </div>

      <FadeIn delay={200} className="pt-2">
        <dl className="flex flex-col gap-3.5 border-t border-ink pt-4">
          {DETAILS.map((item, i) => (
            <div
              key={item.term}
              className={cn(
                'pb-3.5',
                i !== DETAILS.length - 1 && 'border-b border-ink'
              )}
            >
              <dt className="font-mono text-[11px] uppercase tracking-[0.08em] text-slateline">
                {item.term}
              </dt>
              <dd className="mt-1 font-serif text-[17px] text-ink">
                {item.detail}
              </dd>
            </div>
          ))}
        </dl>
      </FadeIn>
    </section>
  );
};

export default Hero;
