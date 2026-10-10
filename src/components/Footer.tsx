import React from 'react';
import { cn } from '@/lib/utils';
import SectionDivider from './SectionDivider';

interface FooterProps {
  className?: string;
}

const Footer: React.FC<FooterProps> = ({ className }) => {
  return (
    <footer className={className}>
      <SectionDivider variant={1} eager className="mb-7 h-6 md:h-7" />
      <div className="flex flex-wrap items-center justify-between gap-3 pb-7 font-mono text-xs text-slateline">
        <span>© {new Date().getFullYear()} Marissa Beaty</span>
        <span>Based in London</span>
      </div>
    </footer>
  );
};

export default Footer;
