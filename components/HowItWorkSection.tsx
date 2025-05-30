'use client';

import React, { ReactNode, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';
import card1Image from '../public/assets/new-card-1-image.png';
import card2Image from '../public/assets/new-card-2-image.png';
import card3Image from '../public/assets/new-card-3-image.png';

gsap.registerPlugin(ScrollTrigger);

const HowItWorksSection = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const cardsContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.from(titleRef.current, {
      scrollTrigger: {
        trigger: titleRef.current,
        start: 'top 80%',
      },
      y: 50,
      opacity: 0,
      duration: 1,
    });

    gsap.from(subtitleRef.current, {
      scrollTrigger: {
        trigger: subtitleRef.current,
        start: 'top 80%',
      },
      y: 30,
      opacity: 0,
      duration: 1,
      delay: 0.2,
    });

    const cards = cardsContainerRef.current?.children;
    if (cards) {
      gsap.from(Array.from(cards), {
        scrollTrigger: {
          trigger: cardsContainerRef.current,
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
    <section className="py-[5em] md:py-[8em] lg:py-[10em]" id="how-it-works">
      <div className="container max-w-6xl mx-auto px-4 md:px-6 lg:px-10">
        <div className="flex flex-col gap-y-4 md:gap-y-6 lg:gap-y-8 mb-10 md:mb-12 lg:mb-16">
          <h2
            ref={titleRef}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-white text-center"
          >
            How it works
          </h2>
          <p
            ref={subtitleRef}
            className="text-lg md:text-xl lg:text-2xl text-center text-white/80"
          >
            Connect effortlessly, engage with purpose, and get rewarded{' '}
            <span className="hidden md:inline">
              <br />
            </span>
            every step of the way.
          </p>
        </div>

        <div
          ref={cardsContainerRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10"
        >
          <div className="lg:mt-10">
            <UnlockPotentialSectionCard
              imageUrl="/assets/create-account.jpg"
              title="Create Your Profile"
              content="Sign up and create your profile as a user or brand. Verify your social media accounts."
              icon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="size-5 md:size-6 text-white"
                >
                  <path
                    fillRule="evenodd"
                    d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z"
                    clipRule="evenodd"
                  />
                </svg>
              }
              gradientClass="bg-gradient-to-br from-purple-600 to-blue-600"
            />
          </div>
          <div className="md:mt-0 lg:-mt-3">
            <UnlockPotentialSectionCard
              imageUrl="/assets/interact-with.jpg"
              title="Engage With Content"
              content="Browse available opportunities and engage with Instagram profiles through likes, comments, and follows."
              icon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="size-5 md:size-6 text-white"
                >
                  <path d="m11.645 20.91-.007-.003-.022-.012a15.247 15.247 0 0 1-.383-.218 25.18 25.18 0 0 1-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0 1 12 5.052 5.5 5.5 0 0 1 16.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 0 1-4.244 3.17 15.247 15.247 0 0 1-.383.219l-.022.012-.007.004-.003.001a.752.752 0 0 1-.704 0l-.003-.001Z" />
                </svg>
              }
              gradientClass="bg-gradient-to-br from-pink-600 to-rose-600"
            />
          </div>
          <div className="md:mt-0 lg:mt-8">
            <UnlockPotentialSectionCard
              imageUrl="/assets/create-account.jpg"
              title="Earn & Convert"
              content="Earn tokens for each verified engagement. Convert your tokens to cash when you reach the threshold."
              icon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="size-5 md:size-6 text-white"
                >
                  <path d="M10.464 8.746c.227-.18.497-.311.786-.394v2.795a2.252 2.252 0 0 1-.786-.393c-.394-.313-.546-.681-.546-1.004 0-.323.152-.691.546-1.004ZM12.75 15.662v-2.824c.347.085.664.228.921.421.427.32.579.686.579.991 0 .305-.152.671-.579.991a2.534 2.534 0 0 1-.921.42Z" />
                  <path
                    fillRule="evenodd"
                    d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM12.75 6a.75.75 0 0 0-1.5 0v.816a3.836 3.836 0 0 0-1.72.756c-.712.566-1.112 1.35-1.112 2.178 0 .829.4 1.612 1.113 2.178.502.4 1.102.647 1.719.756v2.978a2.536 2.536 0 0 1-.921-.421l-.879-.66a.75.75 0 0 0-.9 1.2l.879.66c.533.4 1.169.645 1.821.75V18a.75.75 0 0 0 1.5 0v-.81a4.124 4.124 0 0 0 1.821-.749c.745-.559 1.179-1.344 1.179-2.191 0-.847-.434-1.632-1.179-2.191a4.122 4.122 0 0 0-1.821-.75V8.354c.29.082.559.213.786.393l.415.33a.75.75 0 0 0 .933-1.175l-.415-.33a3.836 3.836 0 0 0-1.719-.755V6Z"
                    clipRule="evenodd"
                  />
                </svg>
              }
              gradientClass="bg-gradient-to-br from-emerald-600 to-teal-600"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

const UnlockPotentialSectionCard = ({
  title,
  content,
  icon,
  imageUrl,
  gradientClass,
}: {
  title: string;
  content: string;
  icon: ReactNode;
  imageUrl: string;
  gradientClass: string;
}) => {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;

    const iconContainer = card.querySelector('.icon-container') as HTMLElement;
    const titleEl = card.querySelector('.card-title') as HTMLElement;
    const contentEl = card.querySelector('.card-content') as HTMLElement;
    const imageContainer = card.querySelector(
      '.image-container'
    ) as HTMLElement;

    gsap.from([iconContainer, titleEl, contentEl, imageContainer], {
      scrollTrigger: {
        trigger: card,
        start: 'top 75%',
      },
      y: 30,
      opacity: 0,
      stagger: 0.15,
      duration: 0.6,
      delay: 0.2,
    });
  }, []);

  return (
    <div ref={cardRef} className="bg-white/10 rounded-2xl overflow-hidden">
      <div className="p-4 md:p-5">
        <div className="flex flex-col items-center gap-2 mb-4">
          <div
            className={`h-16 w-16 md:h-18 md:w-18 lg:h-20 lg:w-20 rounded-full flex justify-center items-center icon-container ${gradientClass}`}
          >
            {icon}
          </div>
          <p className="font-bold text-lg md:text-xl text-center card-title">
            {title}
          </p>
        </div>

        <div className="mb-2">
          <p className="text-sm md:text-base text-white/80 text-center card-content">
            {content}
          </p>
        </div>
      </div>
      <div
        className="h-[10em] md:h-[12em] lg:h-[14em] bg-white/10"
        // style={{ backgroundImage: `url(${imageUrl})` }}
      >
        <Image
          width={200}
          height={200}
          alt="Logo"
          src={imageUrl}
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

export default HowItWorksSection;
