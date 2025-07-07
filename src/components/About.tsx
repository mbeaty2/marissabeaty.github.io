
import React from 'react';
import { cn } from '@/lib/utils';
import FadeIn from './animations/FadeIn';

interface AboutProps {
  className?: string;
}

const About: React.FC<AboutProps> = ({ className }) => {
  return (
    <section id="about" className={cn('py-20 md:py-32 bg-gray-50', className)}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-12 gap-12 md:gap-20 items-start">
          <FadeIn className="md:col-span-5">
            <div className="flex flex-col space-y-6">
              <div>
                <span className="text-sm md:text-base font-medium text-orangery-500 mb-6 inline-block">Get to know me</span>
                <h2 className="text-3xl md:text-3xl font-serif font-medium text-orangery-20 tracking-tight mb-">Give me a pattern, and I’ll show you a possibility.</h2>
              </div>
              
              <p className="text-lg text-muted-foreground">
              I’m Marissa Beaty — a product specialist, data scientist and researcher working at the intersection of analytics, design, and storytelling.
              </p>
              <p className="text-lg text-muted-foreground">
              I specialize in building thoughtful tools and visual narratives that make complexity feel intuitive. My background spans product strategy, predictive modeling, and the humanities — and I love helping people turn abstract ideas into something real, useful, and beautiful.
              </p>
            </div>
          </FadeIn>
          
          <FadeIn delay={150} className="md:col-span-7">
            <div className="grid gap-6 lg:gap-8">
              {/* First Row: Skills + Familiar Technology */}
              <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
                <div className="bg-white shadow-md rounded-lg p-6">
                  <h3 className="text-xl font-semibold mb-4 text-orangery-40">Skills</h3>
                  <ul className="list-disc list-inside text-muted-foreground space-y-1">
                    <li>Machine Learning</li>
                    <li>Data Visualization</li>
                    <li>Statistical Analysis</li>
                    <li>Project Management</li>
                    <li>Cloud Computing</li>
                  </ul>
                </div>

                <div className="bg-white shadow-md rounded-lg p-6">
                  <h3 className="text-xl font-semibold mb-4 text-orangery-1">Familiar Technology</h3>
                  <ul className="list-disc list-inside text-muted-foreground space-y-1">
                    <li>PyTorch</li>
                    <li>TensorFlow</li>
                    <li>JavaScript, HTML, CSS</li>
                    <li>Python, R, SQL</li>
                    <li>Tableau, Power BI</li>
                  </ul>
                </div>
              </div>

              {/* Second Row: Certifications + Publications */}
              <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
                <div className="bg-white shadow-md rounded-lg p-6">
                  <h3 className="text-xl font-semibold mb-4 text-orangery-30">Certifications</h3>
                  <ul className="list-disc list-inside text-muted-foreground space-y-1">
                    <li>AWS Cloud Practitioner</li>
                    <li>AWS AI Practitioner</li>
                  </ul>
                </div>

                <div className="bg-white shadow-md rounded-lg p-6">
                  <h3 className="text-xl font-semibold mb-4 text-orangery-20">Publications</h3>
                  <ul className="list-disc list-inside text-muted-foreground space-y-1">
                    <li><em>Envisioning Distant Worlds</em>, NeurIPS, CVPR, 2023</li>
                    <li><em>Writing Rivers</em>, Community Literacy Journal, 2020</li>
                  </ul>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

export default About;
