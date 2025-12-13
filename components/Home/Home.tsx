'use client';

import { useEffect } from 'react';
import Hero from './Hero/Hero';
import Services from './Services/Services';
import Resume from './Resume/Resume';
import Projects from './Projects/Projects';
import Skills from './Skills/Skills';
import ClientReview from './ClientReview/ClientReview';
import Blog from './Blog/Blog';
import Contact from './Contact/Contact';

import 'aos/dist/aos.css';

export default function Home() {
  useEffect(() => {
    import('aos').then((AOS) => {
      AOS.default.init({
        duration: 1000,
        easing: 'ease',
        once: true,
        anchorPlacement: 'top-bottom',
      });
    });
  }, []);

  return (
    <div className="overflow-hidden">
      <Hero />
      <Services />
      <Resume />
      <Projects />
      <Skills />
      <ClientReview />
      <Blog />
      <Contact />
    </div>
  );
}
