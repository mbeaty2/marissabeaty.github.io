import React from 'react';
import { cn } from '@/lib/utils';

interface FooterProps {
  className?: string;
}

const Footer: React.FC<FooterProps> = ({ className }) => {
  return (
    <footer
      className={cn(
        'flex flex-wrap items-center justify-between gap-3 border-t border-ink py-7 font-mono text-xs text-slateline',
        className
      )}
    >
      <span>© {new Date().getFullYear()} Marissa Beaty</span>
      <span>Based in London</span>
    </footer>
  );
};

export default Footer;
