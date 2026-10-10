import React from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Collection from '@/components/Collection';
import NotesOnMethod from '@/components/NotesOnMethod';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import CursorTrail from '@/components/CursorTrail';
import BotanicalAccent from '@/components/BotanicalAccent';

const Index = () => {
  return (
    <div className="fn-page min-h-screen">
      <CursorTrail />

      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 focus:bg-cobalt focus:text-paper focus:px-4 focus:py-2 focus:font-mono focus:text-[13px]"
      >
        Skip to content
      </a>

      <div className="sticky top-0 z-20 bg-paper">
        <div className="max-w-[1280px] mx-auto px-5 md:px-12">
          <Header />
        </div>
      </div>

      <main id="main" className="relative z-[1] max-w-[1280px] mx-auto px-5 md:px-12">
        <Hero />
        <Collection />
        <BotanicalAccent
          src="/images/ladys-slipper-specimen.png"
          alt="A 19th-century hand-coloured botanical illustration of Cypripedium reginae (showy lady's slipper), a single orchid bloom above two broad ribbed leaves"
          caption="Cypripedium reginae — The Botanical Magazine, vol. 6 (1793)"
          align="right"
        />
      </main>

      <NotesOnMethod className="relative z-[1]" />

      <div className="relative z-[1] max-w-[1280px] mx-auto px-5 md:px-12">
        <Contact />
        <Footer />
      </div>
    </div>
  );
};

export default Index;
