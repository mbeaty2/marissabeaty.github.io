
import React from 'react';
import { cn } from '@/lib/utils';
import FadeIn from './animations/FadeIn';

interface ManifestoProps {
  className?: string;
}

const Manifesto: React.FC<ManifestoProps> = ({ className }) => {
  return (
    <section id="thesis" className={cn('py-20 bg-white', className)}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-serif mb-10 text-center">Welcome!</h2>
          </FadeIn> 
          
          <FadeIn delay={100}>
            <p className="text-lg leading-relaxed text-muted-foreground text-left mb-6">
            When you enter this website, you're confronted with the impressionist painting "Pines Along the Shore" by Henri-Edmond Cross. I've chosen this painting for a reason, and it's not just because it's one of my favorites, but because I think it beautifully represents the connection between art and data that I have made a career of.  
            </p>
          </FadeIn>
          
          <FadeIn delay={200}>
            <p className="text-lg leading-relaxed text-muted-foreground text-left">
            Impressionism is known for its abstraction of color and shape. Up close, these abstractions seem marooned from one another, but when you step back, these individual pieces transform into a symphony. They unite to tell a story.
            I think of this how I think about data. Each data point stands alone, but it's the power of a good data scientist to connect the pieces and tell the data's story.
            </p>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

export default Manifesto;

