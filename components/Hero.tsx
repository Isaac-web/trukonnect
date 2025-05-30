'use client';

import Image from 'next/image';
import { HeroGrid } from './HeroGrid';
import Link from 'next/link';

export function Hero() {
  return (
    <section>
      <div className="flex flex-col justify-center items-center mt-20 p-5 lg:p-0 mb-20 lg:mb-0">
        <Image
          alt="TruKonnet"
          src={'/assets/white with name.png'}
          width={100}
          height={60}
          className="mb-5 block lg:hidden"
        />
        <h1 className="font-bold text-6xl lg:text-8xl text-center">
          From Scroll to <br /> Rewards
        </h1>
        <div className="py-5">
          <p className="text-white/80 text-2xl text-center">
            Ghana's first platform that connects real users to real brands.
          </p>
          <p className="text-white/80 text-2xl text-center">
            Earn tokens by engaging, and cash out with ease.
          </p>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row gap-5 justify-center items-center lg:mt-0 -mt-20 mb-20 lg:mb-0">
        <Link
          href="https://trukonnect.vercel.app/sign-up"
          className="cursor-pointer"
        >
          <button className="bg-[var(--accent)]  text-white text-lg font-semibold py-5 px-10 rounded-2xl transition-all duration-300 ease-in-out">
            Get Started
          </button>
        </Link>
        <button className="border-2 border-[var(--accent)]  text-[var(--accent)] text-lg font-semibold py-5 px-10 rounded-2xl transition-all duration-300 ease-in-out">
          How it works
        </button>
      </div>

      <HeroGrid />
    </section>
  );
}
