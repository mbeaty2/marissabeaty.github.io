import React from 'react';
import { cn, scrollToId } from '@/lib/utils';
import FadeIn from './animations/FadeIn';
import ImprintedStar from './ImprintedStar';

interface HeroProps {
  className?: string;
}

const DETAILS: { term: string; detail: string }[] = [
  { term: 'Based', detail: 'London' },
  { term: 'Now', detail: 'Lecturer, UAL Creative Computing Institute' },
  { term: 'Also', detail: 'Product Consultant, Colibri Digital' },
];

const Hero: React.FC<HeroProps> = ({ className }) => {
  const scrollTo = (id: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    scrollToId(id);
  };

  return (
    <section
      id="top"
      className={cn('relative py-16 md:py-24', className)}
    >
      <ImprintedStar className="hidden sm:block absolute top-6 right-4 w-8" rotate={-10} />
      <ImprintedStar className="hidden sm:block absolute bottom-6 right-20 w-6" rotate={16} />
      <ImprintedStar className="hidden sm:block absolute top-32 right-10 w-5" rotate={22} />

      <FadeIn>
        <div className="relative w-full max-w-[720px] mb-4 sm:mb-6">
          <img
            src="/images/bleeding-heart-specimen.png"
            alt="A 19th-century hand-coloured botanical illustration of Dielytra spectabilis (bleeding heart), its arching stem of heart-shaped flowers draped overhead"
            className="w-full h-auto pointer-events-none select-none"
            loading="lazy"
          />
          <p className="mt-2 sm:absolute sm:top-5 sm:left-2 sm:mt-0 font-serif italic text-2xl md:text-3xl text-ink">
            I'm Marissa.
          </p>
          <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.07em] text-slateline">
            Dielytra spectabilis — Journal of the Horticultural Society of London, vol. 2 (1847)
          </p>
        </div>
      </FadeIn>

      <div className="grid grid-cols-1 md:grid-cols-[1.6fr_1fr] gap-12">
      <div className="flex flex-col gap-7">
        <FadeIn delay={80}>
          <h1 className="font-serif font-light leading-[1.05] tracking-[-0.02em] text-[clamp(48px,7.2vw,104px)] max-w-[16ch] text-ink">
            Bringing a little <em className="italic text-cobalt">humanity</em>{' '}
            to <em className="italic text-cobalt">AI</em>.
          </h1>
        </FadeIn>

        <FadeIn delay={160}>
          <p className="font-serif text-[clamp(17px,1.6vw,20px)] leading-[1.6] max-w-[62ch] text-ink">
            I work with data and AI — as a product consultant and researcher
            who builds tools that make complexity feel human, and writes to
            find out what it actually means.
          </p>
        </FadeIn>

        <FadeIn delay={220}>
          <div className="flex flex-wrap gap-8">
            <a
              href="#collection"
              onClick={scrollTo('collection')}
              className="inline-flex items-center gap-2 font-mono text-[13px] uppercase tracking-[0.08em] text-ink no-underline border-b border-spark pb-0.5 transition-colors hover:text-cobalt"
            >
              View the collection
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
      </div>
    </section>
  );
};

export default Hero;
