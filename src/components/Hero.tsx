import React, { useEffect, useRef } from 'react';
import { ArrowDown, Download } from 'lucide-react';
import { BaseComponent } from './BaseComponent';

class HeroComponent extends BaseComponent {
  constructor() {
    super('Hero');
  }

  protected setupEventListeners(): void {
    // Scroll down button
    const scrollDownBtn = this.findElement('#scroll-down-btn');
    if (scrollDownBtn) {
      scrollDownBtn.addEventListener('click', () => {
        this.scrollToAbout();
      });
    }

    // Download resume button
    const downloadResumeBtn = this.findElement('#download-resume');
    if (downloadResumeBtn) {
      downloadResumeBtn.addEventListener('click', (e) => {
        // Add any download logic here if needed
        console.log('Downloading resume...');
      });
    }
  }

  protected onInit(): void {
    // Any initialization logic can go here
  }

  private scrollToAbout(): void {
    const aboutSection = document.getElementById('about');
    aboutSection?.scrollIntoView({ behavior: 'smooth' });
  }
}

const Hero: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const heroComponentRef = useRef<HeroComponent | null>(null);

  useEffect(() => {
    const initHero = async () => {
      if (heroRef.current && !heroComponentRef.current) {
        heroComponentRef.current = new HeroComponent();
        const element = await heroComponentRef.current.init();
        heroRef.current.appendChild(element);
      }
    };

    initHero();

    return () => {
      if (heroComponentRef.current) {
        heroComponentRef.current.destroy();
        heroComponentRef.current = null;
      }
    };
  }, []);

  return <div ref={heroRef} />;
};

export default Hero;