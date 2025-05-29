import React from 'react';
import Image from 'next/image';

interface TestimonialCardProps {
  quote: string;
  author: string;
  imageSrc: string;
  bgColor?: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  quote,
  author,
  imageSrc,
  bgColor = 'bg-gradient-to-r from-purple-700 to-pink-600',
}) => {
  return (
    <div
      className={`${bgColor} rounded-xl p-4 flex flex-col items-start gap-6 h-[20em] backdrop-blur-sm shadow-lg`}
    >
      <div className="flex-shrink-0">
        <div className="w-24 h-24 rounded-lg overflow-hidden bg-white/90 shadow-md">
          <Image
            src={imageSrc}
            alt={author}
            width={96}
            height={96}
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      <div className="flex-1 space-y-3">
        <p className="font-medium text-white/95">{quote}</p>
        <p className="font-medium text-white/80">{author}</p>
      </div>
    </div>
  );
};

export default TestimonialCard;
