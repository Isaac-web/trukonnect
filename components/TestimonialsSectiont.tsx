'use client';

import React from 'react';
import Marquee from 'react-fast-marquee';
import TestimonialCard from './TestimonialCard';

const testimonials = [
  {
    author: 'Edward Kanyiti',
    quote:
      'I used to scroll endlessly without gaining anything. Now with Trukonnect, I make money just by liking and commenting on posts.',
    bgColor: 'bg-gradient-to-r from-purple-700 to-pink-600',
  },
  {
    author: 'Winfred Bema',
    quote:
      'I didn’t believe it at first, but after my first cashout, I was convinced. Trukonnect is helping me earn while doing what I already love online.',
    bgColor: 'bg-gradient-to-r from-cyan-700 to-blue-700',
  },
  {
    author: 'Amoako Banahene',
    quote:
      'As a university student, every little income helps. Trukonnect makes it easy to earn without stress, just engage and cash out.',
    bgColor: 'bg-gradient-to-r from-emerald-700 to-teal-700',
  },
  {
    author: 'Nana Yaa Dapaah',
    quote:
      'Social media used to be a time-waster for me. Now it’s a small income stream. Trukonnect pays, no long talk.',
    bgColor: 'bg-gradient-to-r from-orange-700 to-red-700',
  },
  {
    author: 'Emmanuel Tetteh',
    quote:
      'I’ve recommended Trukonnect to friends and family. It’s simple, reliable, and the cashouts are legit. I’m impressed.',
    bgColor: 'bg-gradient-to-r from-violet-700 to-fuchsia-600',
  },
];

const TestimonialsSection = () => {
  return (
    <section className="bg-white/5 py-[8em]">
      <div className="container max-w-6xl mx-auto mb-16">
        <h3 className="text-4xl font-bold">
          Join over 1,000 users already cashing out!
        </h3>
      </div>

      <div className="space-y-8">
        <Marquee gradient={false} speed={50} pauseOnHover={true}>
          {testimonials.map((testimonial, index) => (
            <div key={index} className="w-[400px] mx-2">
              <TestimonialCard
                author={testimonial.author}
                imageSrc={`https://ui-avatars.com/api/?name=${encodeURIComponent(
                  testimonial.author
                )}&size=96&background=random&bold=true`}
                quote={testimonial.quote}
                bgColor={testimonial.bgColor}
              />
            </div>
          ))}
        </Marquee>

        {/* Second row - reverse direction */}
        <Marquee
          gradient={false}
          speed={40}
          direction="right"
          pauseOnHover={true}
        >
          {[...testimonials].reverse().map((testimonial, index) => (
            <div key={index} className="w-[400px] mx-2">
              <TestimonialCard
                author={testimonial.author}
                imageSrc={`https://ui-avatars.com/api/?name=${encodeURIComponent(
                  testimonial.author
                )}&size=96&background=random&bold=true`}
                quote={testimonial.quote}
                bgColor={testimonial.bgColor}
              />
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  );
};

export default TestimonialsSection;
