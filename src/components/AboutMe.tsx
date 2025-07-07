
import React from 'react';
import { cn } from '@/lib/utils';
import FadeIn from './animations/FadeIn';

interface AboutMeProps {
  className?: string;
}

const AboutMe: React.FC<AboutMeProps> = ({ className }) => {
  return (
    <section id="about" className={cn('py-20 md:py-32 bg-gray-50', className)}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-12 gap-12 md:gap-20 items-start">
          <FadeIn className="md:col-span-5">
            <div className="flex flex-col space-y-6">
              <div>
                <span className="text-sm md:text-base font-medium text-blue-600 mb-2 inline-block">About me</span>
                <h2 className="text-3xl md:text-5xl font-serif font-medium tracking-tight mb-6">Passionate developer with a love for creating</h2>
              </div>
              
              <p className="text-lg text-muted-foreground">
                I'm a creative developer who enjoys bringing ideas to life through code and design.
              </p>
              <p className="text-lg text-muted-foreground">
                With experience in modern web technologies, I focus on creating user-friendly applications that solve real-world problems. I'm always learning new technologies and exploring innovative ways to build better digital experiences.
              </p>
              <p className="text-lg text-muted-foreground">
                When I'm not coding, you can find me exploring new design trends, contributing to open source projects, or experimenting with the latest frameworks and tools.
              </p>
            </div>
          </FadeIn>
          
          <FadeIn delay={150} className="md:col-span-7">
            <div className="relative h-[500px] lg:h-[600px] w-full rounded-lg overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                alt="Person working on laptop"
                className="w-full h-full object-cover"
              />
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
