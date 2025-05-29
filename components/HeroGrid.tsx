'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';
// import "../public"

gsap.registerPlugin(ScrollTrigger);

export function HeroGrid() {
  const topLeftRef = useRef(null);
  const topRightRef = useRef(null);
  const middleLeftRef = useRef(null);
  const middleRightRef = useRef(null);
  const bottomLeftRef = useRef(null);
  const bottomRightRef = useRef(null);

  useEffect(() => {
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
    <div className="hidden  h-[42em] relative -top-20 lg:flex justify-center items-center">
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
          <div className="col-span-1 h-[10em] rounded-2xl" />
          <div className="col-span-1 h-[10em] rounded-2xl" />
          <div
            ref={topRightRef}
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

          <div
            className="col-span-1 h-[10em] rounded-2xl bg-white/10 scale-100 -translate-x-8 overflow-hidden"
            ref={middleLeftRef}
          >
            <Image
              alt=""
              src={'/assets/card-1-image.png'}
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
              src={'/assets/card-1-image.png'}
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
              src={'/assets/card-1-image.png'}
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
              src={'/assets/card-1-image.png'}
              width={200}
              height={200}
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
      <div className="absolute top-32 bg-[var(--accent)] w-3xl h-[28em] rounded-xl"></div>
    </div>
  );
}
