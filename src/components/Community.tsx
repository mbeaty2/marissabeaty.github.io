
import React from 'react';
import { cn } from '@/lib/utils';
import FadeIn from './animations/FadeIn';
import { Card, CardContent } from '@/components/ui/card';

interface CommunityProps {
  className?: string;
}

const Community: React.FC<CommunityProps> = ({ className }) => {
  const pillars = [
    {
      title: "Contact Me",
      description: "Community before investing - connecting promising entrepreneurs with dedicated events"
    }
  ];

  return (
    <section id="contact" className={cn('py-20 bg-gray-50', className)}>
      <div className="container mx-auto px-4 md:px-6">
        {/* Heading and Intro */}
        <div className="max-w-3xl mx-auto mb-16">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-serif mb-8 text-right text-orangery-4">Let's Get Personal</h2>
          </FadeIn>
          <FadeIn delay={100}>
            <p className="text-xl text-right mb-12">
              I always love meeting new people. Whether it's to chat about space, art, music, or storytelling, don't hesitate to reach out!
            </p>
          </FadeIn>
        </div>

        {/* Contact Form */}
        <FadeIn delay={150}>
          <Card className="border-0 shadow-sm max-w-4xl mx-auto">
            <CardContent className="p-8">
              <h3 className="text-xl font-medium mb-6 text-orangery-3 font-serif">Contact Me</h3>
              <form
                action="https://formspree.io/f/xnqkwzbn"
                method="POST"
                className="space-y-6"
              >
                {/* Name */}
                <div>
                  <label htmlFor="name" className="sr-only">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="sender-name"
                    placeholder="Enter Your Name"
                    required
                    className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-orangery-3"
                  />
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="sr-only">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="sender-email"
                    placeholder="Enter Your Email"
                    required
                    className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-orangery-3"
                  />
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="sr-only">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    placeholder="Enter Your Message"
                    required
                    className="w-full p-3 border border-gray-300 rounded-md shadow-sm resize-none focus:outline-none focus:ring-2 focus:ring-orangery-3"
                  ></textarea>
                </div>

                {/* Submit */}
                <div>
                  <button
                    type="submit"
                    className="bg-orangery-3 hover:bg-orangery-600 text-white font-semibold py-3 px-6 rounded-md transition duration-300"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </CardContent>
          </Card>
        </FadeIn>
      </div>
    </section>
  );
};

export default Community;
