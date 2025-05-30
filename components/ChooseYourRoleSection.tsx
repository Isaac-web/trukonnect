'use client';

import React, { useEffect, useRef } from 'react';
import RoleCard from './RoleCard';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ChooseYourRoleSection = () => {
  const cardsContainerRef = useRef<HTMLDivElement>(null);
  const regularUserCardRef = useRef<HTMLDivElement>(null);
  const brandCardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const isDesktop = window.matchMedia('(min-width: 1024px)').matches;

    if (isDesktop) {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: cardsContainerRef.current,
          start: 'top center',
          end: 'bottom top',
          scrub: 1,
        },
      });

      // Match the initial transform values from the className
      tl.to(regularUserCardRef.current, {
        rotate: -12,
        y: 20,
        x: 0,
      });

      tl.to(
        brandCardRef.current,
        {
          rotate: 10,
          y: -60,
          x: -10,
        },
        '<'
      );
    }
  }, []);

  return (
    <section className="py-[5em] md:py-[8em] lg:py-[10em]">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div className="col-span-1 bg-white/10 min-h-[30em] lg:min-h-[40em] px-4 md:px-6">
          <div className="container max-w-md mx-auto h-full flex flex-col justify-center">
            <h1 className="text-3xl md:text-4xl font-bold text-center lg:text-left">
              Choose Your Role
            </h1>
            <p className="text-xl md:text-2xl mt-4 text-white/80 text-center lg:text-left">
              Whether you're here to earn or grow your brand, we've built a
              space just for you.
            </p>
          </div>
        </div>

        <div
          ref={cardsContainerRef}
          className="col-span-1 flex flex-col lg:flex-row justify-center items-center py-10 lg:py-0 gap-8 lg:gap-0"
        >
          <div
            ref={regularUserCardRef}
            className="transform-none lg:transform lg:translate-y-[20px] lg:-rotate-12"
          >
            <RoleCard
              title="Regular Users"
              subtitle="Earn tokens by engaging with brands and convert to cash."
              features={[
                'Complete simple tasks like following, liking and commenting',
                'Convert tokens to cash via mobile money or bank transfer',
                'Join our community to inceease your earning potential',
              ]}
            />
          </div>
          <div
            ref={brandCardRef}
            className="transform-none lg:transform lg:-translate-y-[60px] lg:-translate-x-[10px] lg:rotate-[10deg]"
          >
            <RoleCard
              title="Brand & Celebrities"
              subtitle="Earn tokens by engaging with brands and convert to cash."
              features={[
                'Grow your authentic Ghanaian audience',
                'Set custom engagement tasks with token rewards',
                'Track engagement metrics with detailed analytics',
              ]}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChooseYourRoleSection;
