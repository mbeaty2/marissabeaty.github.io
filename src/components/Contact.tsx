import React from 'react';
import { cn } from '@/lib/utils';
import FadeIn from './animations/FadeIn';

interface ContactProps {
  className?: string;
}

const Contact: React.FC<ContactProps> = ({ className }) => {
  return (
    <section id="contact" className={cn('py-20 border-t border-ink', className)}>
      <FadeIn>
        <h2 className="font-serif font-light leading-[1.05] tracking-[-0.02em] text-[clamp(40px,6vw,88px)] max-w-[18ch] text-ink">
          Let's talk about <em className="italic text-cobalt">data</em>, or
          something else entirely.
        </h2>
      </FadeIn>

      <FadeIn delay={100}>
        <a
          href="mailto:[email@placeholder]"
          className="inline-block mt-9 font-mono text-[clamp(18px,2.4vw,26px)] text-ink no-underline border-b-2 border-spark pb-1 transition-colors hover:text-cobalt"
        >
          [email@placeholder]
        </a>
      </FadeIn>

      <FadeIn delay={160}>
        <div className="flex flex-wrap gap-7 mt-10">
          <a href="[CV link]" className="font-mono text-[13px] uppercase tracking-[0.08em] text-ink no-underline border-b border-ink pb-0.5 transition-colors hover:text-cobalt hover:border-cobalt">
            CV
          </a>
          <a href="[LinkedIn link]" className="font-mono text-[13px] uppercase tracking-[0.08em] text-ink no-underline border-b border-ink pb-0.5 transition-colors hover:text-cobalt hover:border-cobalt">
            LinkedIn
          </a>
          <a href="[Substack link]" className="font-mono text-[13px] uppercase tracking-[0.08em] text-ink no-underline border-b border-ink pb-0.5 transition-colors hover:text-cobalt hover:border-cobalt">
            The Root of It All
          </a>
        </div>
      </FadeIn>

      <FadeIn delay={220}>
        <form
          action="https://formspree.io/f/xnqkwzbn"
          method="POST"
          className="flex flex-col gap-6 mt-16 max-w-xl"
        >
          <p className="font-mono text-xs uppercase tracking-[0.08em] text-slateline">
            Or write directly
          </p>

          <div>
            <label htmlFor="contact-name" className="block font-mono text-[11px] uppercase tracking-[0.08em] text-slateline mb-1.5">
              Name
            </label>
            <input
              type="text"
              id="contact-name"
              name="sender-name"
              required
              className="w-full bg-transparent border-0 border-b border-ink py-2 font-serif text-[17px] text-ink focus:outline-none focus-visible:border-cobalt"
            />
          </div>

          <div>
            <label htmlFor="contact-email" className="block font-mono text-[11px] uppercase tracking-[0.08em] text-slateline mb-1.5">
              Email
            </label>
            <input
              type="email"
              id="contact-email"
              name="sender-email"
              required
              className="w-full bg-transparent border-0 border-b border-ink py-2 font-serif text-[17px] text-ink focus:outline-none focus-visible:border-cobalt"
            />
          </div>

          <div>
            <label htmlFor="contact-message" className="block font-mono text-[11px] uppercase tracking-[0.08em] text-slateline mb-1.5">
              Message
            </label>
            <textarea
              id="contact-message"
              name="message"
              rows={5}
              required
              className="w-full bg-transparent border-0 border-b border-ink py-2 font-serif text-[17px] text-ink resize-none focus:outline-none focus-visible:border-cobalt"
            />
          </div>

          <button
            type="submit"
            className="self-start mt-2 font-mono text-[13px] uppercase tracking-[0.08em] text-ink border-b border-spark pb-0.5 transition-colors hover:text-cobalt"
          >
            Submit
          </button>
        </form>
      </FadeIn>
    </section>
  );
};

export default Contact;
