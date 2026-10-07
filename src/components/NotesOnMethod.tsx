import React from 'react';
import { cn } from '@/lib/utils';
import FadeIn from './animations/FadeIn';

interface NotesOnMethodProps {
  className?: string;
}

const CREDENTIALS: { num: string; text: string }[] = [
  { num: '8.1', text: 'MSc Data Science and AI, UAL — First Class' },
  { num: '8.2', text: 'BA Art History, University of Wisconsin–Madison' },
  { num: '8.3', text: 'BA English Literature, University of Wisconsin–Madison' },
  { num: '8.4', text: 'NeurIPS 2023 — Envisioning Distant Worlds, with T. Broad' },
  { num: '8.5', text: 'Community Literacy Journal, 2020 — Writing Rivers' },
  { num: '8.6', text: 'Lecturer, UAL Creative Computing Institute' },
  { num: '8.7', text: 'Product Consultant, Colibri Digital' },
  { num: '8.8', text: 'Volunteer tour guide, Science Museum — Space Gallery' },
  { num: '8.9', text: 'Writer, The Root of It All (Substack)' },
  { num: '8.10', text: 'AWS Cloud Practitioner, AWS AI Practitioner' },
];

const NotesOnMethod: React.FC<NotesOnMethodProps> = ({ className }) => {
  return (
    <section
      id="method"
      className={cn('border-t border-ink bg-ink text-paper', className)}
    >
      <div className="max-w-[1280px] mx-auto px-5 md:px-12 py-20">
      <div className="flex flex-wrap items-baseline justify-between gap-6 mb-10">
        <FadeIn>
          <p className="font-mono text-xs uppercase tracking-[0.08em] text-periwinkle">
            03 / About
          </p>
        </FadeIn>
        <FadeIn delay={60}>
          <h2 className="font-serif font-light leading-[1.1] tracking-[-0.02em] text-[clamp(36px,4.6vw,60px)] text-paper">
            Notes on <em className="italic text-periwinkle">method</em>
          </h2>
        </FadeIn>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <FadeIn>
          <p className="font-serif text-lg leading-[1.65] max-w-[56ch] text-paper">
            I trained first in art history and literature before coming to
            data science, and I think that still shapes how I work. There's a
            reason I love Impressionism: up close, the brushstrokes look
            marooned from one another, but step back and they become a story.
            That's how I think about data — each point stands alone until you
            connect the pieces. At the{' '}
            <em className="italic text-periwinkle">
              UAL Creative Computing Institute
            </em>{' '}
            I teach the technical side; at Colibri Digital I help product
            teams turn research into things people can actually use. I write{' '}
            <em className="italic text-periwinkle">The Root of It All</em> on
            Substack, exploring where art and science meet, and I'm slowly
            working on two novels.
          </p>
        </FadeIn>

        <FadeIn delay={120}>
          <ol className="flex flex-col">
            {CREDENTIALS.map((item, i) => (
              <li
                key={item.num}
                className={cn(
                  'grid grid-cols-[56px_1fr] gap-4 py-3.5 border-t border-slateline font-mono text-[13px] text-paper',
                  i === CREDENTIALS.length - 1 && 'border-b'
                )}
              >
                <span className="text-periwinkle">{item.num}</span>
                <span>{item.text}</span>
              </li>
            ))}
          </ol>
        </FadeIn>
      </div>
      </div>
    </section>
  );
};

export default NotesOnMethod;
