import React from 'react';
import { cn, scrollToId } from '@/lib/utils';
import FadeIn from './animations/FadeIn';
import ImprintedStar from './ImprintedStar';

interface HeroProps {
  className?: string;
}

const DETAILS: { term: string; detail: string }[] = [
  { term: 'Based', detail: 'London' },
  { term: 'Now', detail: 'Product Consultant, Colibri Digital' },
  { term: 'Also', detail: 'Lecturer, UAL Creative Computing Institute' },
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
      <ImprintedStar className="hidden sm:block absolute top-0 right-4 w-7" rotate={-10} />
      <ImprintedStar className="hidden sm:block absolute top-44 right-24 w-6" rotate={16} />
      <ImprintedStar className="hidden lg:block absolute top-20 left-10 w-5" rotate={22} />

      <FadeIn>
        <h1 className="font-serif font-light leading-[1.05] tracking-[-0.02em] text-[clamp(44px,6.6vw,92px)] max-w-[18ch] text-chocolate mb-8 sm:mb-10">
          <em className="italic text-cobalt">Technical</em> enough to build
          it. <em className="italic text-cobalt">Humanist</em> enough to
          question it.
        </h1>
      </FadeIn>

      <div>
        <FadeIn delay={80}>
          <img
            src="/images/bleeding-heart-specimen.png"
            alt="A 19th-century hand-coloured botanical illustration of Dielytra spectabilis (bleeding heart), its arching stem of heart-shaped flowers draped overhead"
            className="block w-full sm:float-right sm:w-full sm:max-w-[420px] md:max-w-[480px] lg:max-w-[540px] h-auto sm:ml-8 mb-4 sm:mb-3 pointer-events-none select-none"
            style={{ shapeOutside: 'url(/images/bleeding-heart-specimen.png)', shapeMargin: '20px' }}
            loading="lazy"
          />
        </FadeIn>

        <FadeIn delay={140}>
          <p className="font-serif italic text-2xl md:text-3xl text-chocolate mb-4">
            I'm Marissa.
          </p>
        </FadeIn>

        <FadeIn delay={180}>
          <p className="font-serif text-[clamp(17px,1.6vw,20px)] leading-[1.6] text-chocolate mb-6">
            I work at the intersection of people and technology. As a product
            consultant in Applied AI, I'm always thinking about building tools
            that humans actually want to adopt, with a focus on making the
            complexity of a fast-changing AI landscape feel a bit clearer.
          </p>
        </FadeIn>

        <FadeIn delay={220}>
          <div className="flex flex-wrap gap-8">
            <a
              href="#collection"
              onClick={scrollTo('collection')}
              className="inline-flex items-center gap-2 font-mono text-[13px] uppercase tracking-[0.08em] text-chocolate no-underline border-b border-spark pb-0.5 transition-colors hover:text-cobalt"
            >
              View the collection
            </a>
            <a
              href="#contact"
              onClick={scrollTo('contact')}
              className="inline-flex items-center gap-2 font-mono text-[13px] uppercase tracking-[0.08em] text-chocolate no-underline border-b border-chocolate pb-0.5 transition-colors hover:text-cobalt hover:border-cobalt"
            >
              Say hello
            </a>
          </div>
        </FadeIn>

        <p className="clear-both sm:clear-none sm:text-right mt-5 sm:mt-3 font-mono text-[10px] uppercase tracking-[0.07em] text-slateline">
          Dielytra spectabilis — Journal of the Horticultural Society of London, vol. 2 (1847)
        </p>
      </div>

      <FadeIn delay={260} className="clear-both">
        <dl className="flex flex-col sm:flex-row sm:flex-wrap gap-x-14 gap-y-3.5 border-t border-chocolate mt-10 md:mt-12 pt-4">
          {DETAILS.map((item) => (
            <div key={item.term}>
              <dt className="font-mono text-[11px] uppercase tracking-[0.08em] text-slateline">
                {item.term}
              </dt>
              <dd className="mt-1 font-serif text-[17px] text-chocolate">
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
