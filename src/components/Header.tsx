import React from 'react';
import { cn, scrollToId } from '@/lib/utils';

interface HeaderProps {
  className?: string;
}

const NAV_LINKS: { id: string; label: string }[] = [
  { id: 'work', label: 'Work' },
  { id: 'plates', label: 'Plates' },
  { id: 'method', label: 'About' },
  { id: 'contact', label: 'Contact' },
];

const Header: React.FC<HeaderProps> = ({ className }) => {
  const scrollToSection = (id: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    scrollToId(id);
  };

  return (
    <header
      className={cn(
        'relative z-10 flex flex-wrap items-center justify-between gap-6 border-b border-ink py-4 md:py-5',
        className
      )}
    >
      <a
        href="#top"
        onClick={scrollToSection('top')}
        className="site-logo shrink-0"
      >
        <img
          src="/images/logo-mark.png"
          alt="Marissa Beaty"
          className="h-10 md:h-12 w-auto"
        />
      </a>

      <nav aria-label="Primary" className="flex flex-wrap gap-7">
        {NAV_LINKS.map((link) => (
          <a
            key={link.id}
            href={`#${link.id}`}
            onClick={scrollToSection(link.id)}
            className="font-mono text-[13px] uppercase tracking-[0.08em] text-ink no-underline border-b border-transparent pb-0.5 transition-colors hover:text-cobalt hover:border-cobalt focus-visible:text-cobalt focus-visible:border-cobalt"
          >
            {link.label}
          </a>
        ))}
      </nav>
    </header>
  );
};

export default Header;
