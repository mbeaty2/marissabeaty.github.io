import React from 'react';
import { cn } from '@/lib/utils';
import FadeIn from './animations/FadeIn';
import SectionDivider from './SectionDivider';

interface ContactProps {
  className?: string;
}

const Contact: React.FC<ContactProps> = ({ className }) => {
  return (
    <section id="contact" className={cn('py-20', className)}>
      <SectionDivider variant={3} className="mb-14" />
      <FadeIn>
        <h2 className="font-serif font-light leading-[1.05] tracking-[-0.02em] text-[clamp(40px,6vw,88px)] max-w-[18ch] text-ink">
          Let's <em className="italic text-spark">chat</em>!
        </h2>
      </FadeIn>

      <FadeIn delay={80}>
        <p className="mt-5 font-serif text-lg text-ink max-w-[46ch]">
          Always happy to talk data, AI, or anything in between — drop a line
          below and I'll get back to you.
        </p>
      </FadeIn>

      <FadeIn delay={120}>
        <div className="flex flex-wrap gap-7 mt-8">
          <a href="[LinkedIn link]" className="font-mono text-[13px] uppercase tracking-[0.08em] text-periwinkle no-underline border-b border-periwinkle pb-0.5 transition-colors hover:text-spark hover:border-spark">
            LinkedIn
          </a>
          <a href="[Substack link]" className="font-mono text-[13px] uppercase tracking-[0.08em] text-periwinkle no-underline border-b border-periwinkle pb-0.5 transition-colors hover:text-spark hover:border-spark">
            The Root of It All
          </a>
        </div>
      </FadeIn>

      <FadeIn delay={180}>
        <form
          action="https://formspree.io/f/xnqkwzbn"
          method="POST"
          className="flex flex-col gap-6 mt-12 max-w-xl rounded-[28px] border border-ink bg-surface2 p-8 md:p-10"
        >
          <div>
            <label htmlFor="contact-name" className="block font-mono text-[11px] uppercase tracking-[0.08em] text-periwinkle mb-1.5">
              Name
            </label>
            <input
              type="text"
              id="contact-name"
              name="sender-name"
              required
              className="w-full bg-transparent border-0 border-b border-ink py-2 font-serif text-[17px] text-ink focus:outline-none focus-visible:border-periwinkle"
            />
          </div>

          <div>
            <label htmlFor="contact-email" className="block font-mono text-[11px] uppercase tracking-[0.08em] text-periwinkle mb-1.5">
              Email
            </label>
            <input
              type="email"
              id="contact-email"
              name="sender-email"
              required
              className="w-full bg-transparent border-0 border-b border-ink py-2 font-serif text-[17px] text-ink focus:outline-none focus-visible:border-periwinkle"
            />
          </div>

          <div>
            <label htmlFor="contact-message" className="block font-mono text-[11px] uppercase tracking-[0.08em] text-periwinkle mb-1.5">
              Message
            </label>
            <textarea
              id="contact-message"
              name="message"
              rows={5}
              required
              className="w-full bg-transparent border-0 border-b border-ink py-2 font-serif text-[17px] text-ink resize-none focus:outline-none focus-visible:border-periwinkle"
            />
          </div>

          <button
            type="submit"
            className="self-start mt-2 inline-flex items-center rounded-full border border-periwinkle px-7 py-2.5 font-mono text-[13px] uppercase tracking-[0.08em] text-periwinkle transition-colors hover:bg-periwinkle hover:text-paper"
          >
            Submit
          </button>
        </form>
      </FadeIn>
    </section>
  );
};

export default Contact;
