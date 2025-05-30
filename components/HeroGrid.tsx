'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';
import gridTopRightImg from '../public/assets/hero-section/grid-top-right.jpg';
import gridMiddleRightImg from '../public/assets/hero-section/grid-middle-right.png';
import gridMiddleLeftImg from '../public/assets/hero-section/grid-middle-left.jpg';
import gridBottomRightImg from '../public/assets/hero-section/grid-bottom-right.jpg';
import gridBottomLeftImg from '../public/assets/hero-section/grid-bottom-left.jpg';

gsap.registerPlugin(ScrollTrigger);

export function HeroGrid() {
  const topLeftRef = useRef(null);
  const topRightRef = useRef(null);
  const middleLeftRef = useRef(null);
  const middleRightRef = useRef(null);
  const bottomLeftRef = useRef(null);
  const bottomRightRef = useRef(null);
  const gradientRef = useRef(null);

  useEffect(() => {
    // Gradient scroll animation
    gsap.to(gradientRef.current, {
      scrollTrigger: {
        trigger: 'body',
        start: 'top top',
        end: '25% top',
        scrub: true,
      },
      scale: 1.25,
      opacity: 0.9,
    });

    gsap.to(topLeftRef.current, {
      scale: 0.85,
      rotateX: -15,
      y: 50,
      x: 60,
      scrollTrigger: {
        trigger: 'body',
        start: 'top top',
        end: '25% top',
        scrub: true,
      },
    });

    gsap.to(topRightRef.current, {
      scale: 0.85,
      rotateX: 15,
      y: 50,
      x: -60,
      scrollTrigger: {
        trigger: 'body',
        start: 'top top',
        end: '25% top',
        scrub: true,
      },
    });
    gsap.to(middleLeftRef.current, {
      scale: 0.8,
      rotateX: -15,
      y: 20,
      scrollTrigger: {
        trigger: 'body',
        start: 'top top',
        end: '25% top',
        scrub: true,
      },
    });

    gsap.to(middleRightRef.current, {
      scale: 0.8,
      rotateX: 15,
      y: 20,
      scrollTrigger: {
        trigger: 'body',
        start: 'top top',
        end: '25% top',
        scrub: true,
      },
    });

    gsap.to(bottomLeftRef.current, {
      scale: 1,
      rotateX: 15,
      y: -10,
      scrollTrigger: {
        trigger: 'body',
        start: 'top top',
        end: '25% top',
        scrub: true,
      },
    });

    gsap.to(bottomRightRef.current, {
      scale: 1,
      rotateX: -15,
      y: -10,
      scrollTrigger: {
        trigger: 'body',
        start: 'top top',
        end: '25% top',
        scrub: true,
      },
    });
  }, []);

  return (
    <div className="hidden  h-[42em] relative -top-20 lg:flex justify-center items-center ">
      <div className="absolute container max-w-6xl top-0">
        <div className="w-full grid grid-cols-4 gap-5">
          <div
            ref={topLeftRef}
            className="col-span-1 h-[10em] rounded-2xl bg-white/10 scale-90 overflow-hidden"
          >
            <Image
              alt=""
              src={'/assets/card-1-image.png'}
              width={200}
              height={200}
              className="h-full w-full object-cover"
            />
          </div>
          <div className="col-span-2 h-[10em] rounded-2xl">
            <div className="flex flex-col lg:flex-row gap-5 justify-center items-center lg:mt-5 -mt-20 mb-20 lg:mb-0 ">
              <a
                href="https://trukonnect.vercel.app/sign-up"
                className="bg-[var(--accent)]  text-white text-lg font-semibold py-5 px-10 rounded-2xl transition-all duration-300 ease-in-out"
              >
                Get Started
              </a>
              <a
                href="#how-it-works"
                className="border-2 border-[var(--accent)]  text-[var(--accent)] text-lg font-semibold py-5 px-10 rounded-2xl transition-all duration-300 ease-in-out"
              >
                How it works
              </a>
            </div>
          </div>
          {/* <div className="col-span-1 h-[10em] rounded-2xl" /> */}
          <div
            ref={topRightRef}
            className="col-span-1 h-[10em] rounded-2xl bg-white/10 scale-90 overflow-hidden"
          >
            <Image
              alt=""
              src={gridTopRightImg}
              width={200}
              height={200}
              className="h-full w-full object-cover"
            />
          </div>

          <div
            className="col-span-1 h-[10em] rounded-2xl bg-white/10 scale-100 -translate-x-8 overflow-hidden"
            ref={middleLeftRef}
          >
            <Image
              alt=""
              src={gridMiddleLeftImg}
              width={200}
              height={200}
              className="h-full w-full object-cover"
            />
          </div>
          <div className="col-span-1 h-[10em] rounded-2xl" />
          <div className="col-span-1 h-[10em] rounded-2xl" />
          <div
            className="col-span-1 h-[10em] rounded-2xl bg-white/10 scale-100 translate-x-8 overflow-hidden"
            ref={middleRightRef}
          >
            <Image
              alt=""
              src={gridMiddleRightImg}
              width={200}
              height={200}
              className="h-full w-full object-cover"
            />
          </div>

          <div
            ref={bottomLeftRef}
            className="col-span-1 h-[10em] rounded-2xl bg-white/10 scale-85 overflow-hidden"
          >
            <Image
              alt=""
              src={gridBottomLeftImg}
              width={200}
              height={200}
              className="h-full w-full object-cover"
            />
          </div>
          <div className="col-span-1 h-[10em] rounded-2xl" />
          <div className="col-span-1 h-[10em] rounded-2xl" />
          <div
            ref={bottomRightRef}
            className="col-span-1 h-[10em] rounded-2xl bg-white/10 scale-85 overflow-hidden"
          >
            <Image
              alt=""
              src={gridBottomRightImg}
              width={200}
              height={200}
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
      <div
        ref={gradientRef}
        className="absolute top-32 w-3xl h-[28em] rounded-3xl overflow-hidden shadow-[0_16px_60px_0_rgba(0,0,0,0.5)] will-change-transform perspective-1000"
      >
        <div className="absolute inset-0 bg-[conic-gradient(from_0deg_at_50%_50%,#fd770180,#003f7d80,#00000080,#fd770180)] backdrop-blur-[40px]"></div>
        <div className="absolute inset-0 backdrop-blur-[32px] bg-white/5"></div>
        <div className="absolute inset-0 backdrop-blur-[16px] bg-black/5"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-[220px] h-[140px] rounded-xl bg-black/40 backdrop-blur-[16px] border border-white/10 shadow-lg flex items-center justify-center p-4">
            <Image
              src={'/assets/white with name.png'}
              alt="Trukonnect Logo"
              width={120}
              height={120}
              className="w-full h-full object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
