'use client';

import React from 'react';
import Marquee from 'react-fast-marquee';
import TestimonialCard from './TestimonialCard';

const testimonials = [
  {
    author: 'Charles Patterson',
    quote:
      'In life, you almost never get to learn from the best of the best, but here we are! In life, you almost never get to learn from the best of the best, but here we are!',
    bgColor: 'bg-gradient-to-r from-purple-700 to-pink-600',
  },
  {
    author: '_takiyara',
    quote:
      "This solution has significantly improved our team's productivity. The intuitive interface makes complex tasks simple.",
    bgColor: 'bg-gradient-to-r from-cyan-700 to-blue-700',
  },
  {
    author: 'Sarah Chen',
    quote:
      "Outstanding support and robust features. It's rare to find a product that delivers on all its promises.",
    bgColor: 'bg-gradient-to-r from-emerald-700 to-teal-700',
  },
  {
    author: 'Michael Kim',
    quote:
      'The scalability and performance have been game-changing for our organization.',
    bgColor: 'bg-gradient-to-r from-orange-700 to-red-700',
  },
  {
    author: 'Alex Rivera',
    quote:
      'Incredible platform that has transformed how we engage with our audience. Highly recommended!',
    bgColor: 'bg-gradient-to-r from-violet-700 to-fuchsia-600',
  },
];

const TestimonialsSection = () => {
  return (
    <section className="bg-white/5 py-[8em]">
      <div className="container max-w-6xl mx-auto mb-16">
        <h3 className="text-4xl font-bold">What our users are saying</h3>
      </div>

      <div className="space-y-8">
        {/* First row */}
        <Marquee gradient={false} speed={50} pauseOnHover={true}>
          {testimonials.map((testimonial, index) => (
            <div key={index} className="w-[400px] mx-2">
              <TestimonialCard
                author={testimonial.author}
                imageSrc=""
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
                imageSrc=""
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
