import React from 'react';
import { cn } from '@/lib/utils';
import FadeIn from './animations/FadeIn';
import { Card, CardContent } from '@/components/ui/card';

interface MyWorkProps {
  className?: string;
}

const MyWork: React.FC<MyWorkProps> = ({ className }) => {
  const workItems = [
    // {
    //   title: "",
    //   description: ""
    // },
    // {
    //   title: "",
    //   description: ""
    // },
    // {
    //   title: "",
    //   description: ""
    // {
    //   title: "",
    //   description: ""
    // }
  ];

  return (
    <section id="my-work" className={cn("py-20 bg-[url('/docs/images/bw-main-image.jpeg')] bg-cover bg-center bg-no-repeat", className)}>
      <div className="w-full max-w-6xl mx-auto bg-gray-50/80 shadow-lg p-6 sm:p-10">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto mb-16">
            <FadeIn>
              <h2 className="text-3xl md:text-4xl font-serif mb-20 text-orangery-2 text-center">My Work</h2>

              <p className="text-muted-foreground text-center">We'll be back after this brief intermission...</p>
            </FadeIn>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {workItems.map((type, index) => (
              <FadeIn key={index} delay={150 + index * 50}>
                <Card className="border-0 shadow-sm h-full">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-medium mb-3 font-serif">{type.title}</h3>
                    <p className="text-muted-foreground">{type.description}</p>
                  </CardContent>
                </Card>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MyWork;
