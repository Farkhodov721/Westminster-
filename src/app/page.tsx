'use client';
import { useEffect } from 'react';
import Nav from '@/components/layout/Nav/Nav';
import Hero from '@/components/sections/Hero/Hero';
import Problem from '@/components/sections/Problem/Problem';
import Events from '@/components/sections/Events/Events';
import Results from '@/components/sections/Results/Results';
import Team from '@/components/sections/Team/Team';
import Footer from '@/components/sections/Footer/Footer';

export default function Home() {
  useEffect(() => {
    // Scroll-triggered fade-in setup
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

    document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));
    
    return () => observer.disconnect();
  }, []);

  return (
    <main>
      <Nav />
      <Hero />
      <div className="divider"></div>
      <Problem />
      <div className="divider"></div>
      <Events />
      <div className="divider"></div>
      <Results />
      <div className="divider"></div>
      <Team />
      <div className="divider"></div>
      <Footer />
    </main>
  );
}
