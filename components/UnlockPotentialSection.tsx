'use client';

import Image from 'next/image';
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const UnlockPotentialSection = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Title animation
    gsap.from(titleRef.current, {
      scrollTrigger: {
        trigger: titleRef.current,
        start: 'top 80%',
      },
      y: 50,
      opacity: 0,
      duration: 1,
    });

    // Cards animation
    const cards = cardsRef.current?.children;
    if (cards) {
      gsap.from(Array.from(cards), {
        scrollTrigger: {
          trigger: cardsRef.current,
          start: 'top 75%',
        },
        y: 100,
        opacity: 0,
        stagger: 0.2,
        duration: 0.8,
        ease: 'power2.out',
      });
    }
  }, []);

  return (
    <div className="p-5 lg:p-0">
      <div className="container max-w-6xl mx-auto">
        <h2
          ref={titleRef}
          className="text-4xl md:text-5xl font-bold text-white mb-8"
        >
          Build Genuine Connections, Discover Exciting Content, and Unlock the
          Value of Your Social Voice.{' '}
        </h2>

        <div ref={cardsRef} className="grid grid-cols-3 gap-10">
          <UnlockPotentialSectionCard
            title="Engage & Earn Instantly"
            content="Turn your social media interactions into real cash. Trukonnect makes it simple: follow, like, and comment on content from your favorite brands, and watch your earnings grow. It's engagement that truly pays off."
            imageUrl="/assets/card-2-image.png"
            backgroundColor="bg-red-500"
          />
          <UnlockPotentialSectionCard
            title="Connect with Your Favorite Brands"
            content="Discover and interact with authentic brands and celebrities in Ghana. Trukonnect bridges the gap, allowing you to build genuine connections, discover exciting content, and become a valued part of their community."
            imageUrl="/assets/card-3-image.png"
            backgroundColor="bg-yellow-600"
          />
          <UnlockPotentialSectionCard
            title="Unlock Your Influence"
            content="Your voice has power. With Trukonnect, every interaction you make amplifies your influence and opens doors to new opportunities. For brands, this means genuine engagement and measurable growth, all while ensuring authenticity."
            imageUrl="/assets/card-1-image.png"
            backgroundColor="bg-green-300"
          />
        </div>
      </div>
    </div>
  );
};

const UnlockPotentialSectionCard = ({
  title,
  content,
  imageUrl,
  backgroundColor,
}: {
  title: string;
  content: string;
  imageUrl: string;
  backgroundColor: string;
}) => {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;

    const icon = card.querySelector('.icon') as HTMLElement;
    const titleEl = card.querySelector('.title') as HTMLElement;
    const contentEl = card.querySelector('.content') as HTMLElement;
    const imageEl = card.querySelector('.card-image') as HTMLElement;

    gsap.from([icon, titleEl, contentEl], {
      scrollTrigger: {
        trigger: card,
        start: 'top 80%',
      },
      y: 30,
      opacity: 0,
      stagger: 0.1,
      duration: 0.6,
    });

    gsap.from(imageEl, {
      scrollTrigger: {
        trigger: card,
        start: 'top 80%',
      },
      y: 100,
      scale: 0.8,
      opacity: 0,
      duration: 1,
      ease: 'power2.out',
    });
  }, []);

  return (
    <div
      ref={cardRef}
      className={`relative col-span-3 lg:col-span-1 rounded-2xl h-[35em] overflow-hidden ${backgroundColor}`}
    >
      <div className="p-5 z-50">
        <div>
          <div className="flex items-center gap-2 mb-4">
            <div className="h-10 w-10 rounded-full bg-white/20 icon" />
            <p className="font-bold text-xl text-white/80 title">{title}</p>
          </div>

          <div className="mb-2">
            <p className="text-white/80 content">{content}</p>
          </div>
        </div>
      </div>

      <div className="w-full absolute bottom-0">
        <Image
          alt=""
          width={200}
          height={200}
          src={imageUrl}
          className="w-full object-fill scale-110 card-image"
        />
      </div>
    </div>
  );
};

export default UnlockPotentialSection;
