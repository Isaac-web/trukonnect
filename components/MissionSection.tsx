'use client';

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const MissionSection = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const wordRefs = useRef<(HTMLSpanElement | null)[]>([]);

  const missionText =
    'Empowering brands to grow while rewarding users for their engagement.';
  const words = missionText.split(' ');

  useEffect(() => {
    gsap.from(titleRef.current, {
      scrollTrigger: {
        trigger: titleRef.current,
        start: 'top 75%',
      },
      scale: 0.8,
      opacity: 0,
      duration: 1,
      ease: 'back.out(1.7)',
    });

    wordRefs.current.forEach((word, index) => {
      gsap.from(word, {
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 80%',
        },
        y: 30,
        opacity: 0,
        duration: 0.8,
        delay: index * 0.1,
        ease: 'power2.out',
      });
    });
  }, []);

  const setWordRef = (index: number) => (el: HTMLSpanElement | null) => {
    wordRefs.current[index] = el;
  };

  return (
    <section className="py-[0em] pb-[16em]">
      <div className="container max-w-4xl mx-auto flex flex-col justify-center items-center">
        <h3 ref={titleRef} className="text-center text-xl font-bold mb-8">
          Our Mission
        </h3>
        <p ref={containerRef} className="text-center text-3xl text-white/80">
          {words.map((word, index) => (
            <React.Fragment key={index}>
              <span ref={setWordRef(index)} className="inline-block">
                {word}
              </span>
              {index < words.length - 1 ? ' ' : ''}
            </React.Fragment>
          ))}
        </p>
      </div>
    </section>
  );
};

export default MissionSection;
