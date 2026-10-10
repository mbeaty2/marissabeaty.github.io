import React from 'react';
import { cn } from '@/lib/utils';
import FadeIn from './animations/FadeIn';
import SectionDivider from './SectionDivider';
import ImprintedStar from './ImprintedStar';

interface NotesOnMethodProps {
  className?: string;
}

interface ExperienceItem {
  year: string;
  role: string;
  org: string;
  line: string;
}

const EXPERIENCE: ExperienceItem[] = [
  {
    year: '2025',
    role: 'Product Consultant',
    org: 'Colibri Digital',
    line: 'Leading AI and data delivery across an £8M portfolio of client engagements.',
  },
  {
    year: '2024',
    role: 'Product Data Scientist',
    org: 'Firemind Group',
    line: 'Took an internal tool to a customer-facing SaaS product as product manager.',
  },
  {
    year: '2024',
    role: 'Associate Lecturer',
    org: 'University of the Arts London',
    line: 'Teaching data science and AI to undergraduate cohorts.',
  },
  {
    year: '2021',
    role: 'Programme Manager',
    org: 'University of Wisconsin–Madison',
    line: 'Delivered a federally funded, multi-million-dollar programme.',
  },
];

interface CredentialItem {
  num: string;
  text: string;
}

const EDUCATION: CredentialItem[] = [
  { num: '3.1', text: 'MSc Data Science and Artificial Intelligence, UAL — Distinction' },
  { num: '3.2', text: 'BA Art History & English Literature, University of Wisconsin–Madison — Magna Cum Laude' },
];

const PUBLISHING: CredentialItem[] = [
  { num: '3.3', text: 'NeurIPS 2023 — Envisioning Distant Worlds, with T. Broad' },
  { num: '3.4', text: 'Community Literacy Journal, 2020 — Writing Rivers' },
  { num: '3.5', text: 'Writer, The Root of It All (Substack)' },
];

const OTHER: CredentialItem[] = [
  { num: '3.6', text: 'AWS Cloud Practitioner, AWS AI Practitioner' },
  { num: '3.7', text: 'Volunteer tour guide, Science Museum — Space Gallery' },
];

const CREDENTIAL_GROUPS: { label: string; items: CredentialItem[] }[] = [
  { label: 'Education', items: EDUCATION },
  { label: 'Publishing', items: PUBLISHING },
  { label: 'Other', items: OTHER },
];

const NotesOnMethod: React.FC<NotesOnMethodProps> = ({ className }) => {
  return (
    <section
      id="method"
      className={cn('text-ink', className)}
    >
      <div className="relative max-w-[1280px] mx-auto px-5 md:px-12 py-20">
        <SectionDivider variant={2} className="mb-14" />
        <ImprintedStar className="hidden sm:block absolute top-[420px] left-0 w-8" rotate={9} />
        <ImprintedStar className="hidden sm:block absolute top-44 right-2 w-5" rotate={-16} />
        <div className="flex flex-wrap items-baseline justify-between gap-6 mb-10">
          <FadeIn>
            <p className="font-mono text-xs uppercase tracking-[0.08em] text-slateline">
              02 / About
            </p>
          </FadeIn>
          <FadeIn delay={60}>
            <h2 className="font-serif font-light leading-[1.1] tracking-[-0.02em] text-[clamp(36px,4.6vw,60px)] text-ink">
              A little about <em className="italic text-spark">me</em>
            </h2>
          </FadeIn>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <FadeIn>
            <p className="font-serif text-lg leading-[1.65] max-w-[56ch] text-ink">
              I trained first in art history and literature before coming to
              data science, and I think that still shapes how I work. There's
              a reason I love Impressionism: up close, the brushstrokes look
              marooned from one another, but step back and they become a
              story. That's how I think about data — each point stands alone
              until you connect the pieces. I write{' '}
              <em className="italic text-spark">The Root of It All</em> on
              Substack, exploring where art and science meet, and I'm slowly
              working on two novels.
            </p>
          </FadeIn>

          <div className="flex flex-col gap-12">
            <FadeIn delay={100}>
              <div>
                <p className="font-mono text-xs uppercase tracking-[0.08em] text-spark mb-2">
                  Experience
                </p>
                <ol className="flex flex-col">
                  {EXPERIENCE.map((item, i) => (
                    <li
                      key={`${item.year}-${item.role}`}
                      className={cn(
                        'grid grid-cols-[72px_1fr] gap-4 py-4 border-t border-slateline',
                        i === EXPERIENCE.length - 1 && 'border-b'
                      )}
                    >
                      <span className="font-serif text-[32px] leading-none text-spark">
                        {item.year}
                      </span>
                      <div>
                        <p className="font-mono text-[11px] uppercase tracking-[0.07em] text-ink">
                          {item.role} — {item.org}
                        </p>
                        <p className="mt-1 text-sm text-slateline">{item.line}</p>
                      </div>
                    </li>
                  ))}
                </ol>
              </div>
            </FadeIn>

            {CREDENTIAL_GROUPS.map((group, groupIndex) => (
              <FadeIn key={group.label} delay={160 + groupIndex * 40}>
                <div>
                  <p className="font-mono text-xs uppercase tracking-[0.08em] text-spark mb-2">
                    {group.label}
                  </p>
                  <ol className="flex flex-col">
                    {group.items.map((item, i) => (
                      <li
                        key={item.num}
                        className={cn(
                          'grid grid-cols-[42px_1fr] gap-4 py-3 border-t border-slateline font-mono text-[13px] text-ink',
                          i === group.items.length - 1 && 'border-b'
                        )}
                      >
                        <span className="text-spark">{item.num}</span>
                        <span>{item.text}</span>
                      </li>
                    ))}
                  </ol>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default NotesOnMethod;
