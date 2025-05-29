'use client';

import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

interface GalleryImage {
  id: number;
  url: string;
  placeholder: string;
}

interface GalleryProps {
  images: GalleryImage[];
  className?: string;
}

export function Gallery({ images, className = '' }: GalleryProps) {
  const galleryRef = useRef<HTMLElement>(null);
  const [imagesLoaded, setImagesLoaded] = useState<{ [key: number]: boolean }>(
    {}
  );

  const handleImageLoad = (id: number) => {
    setImagesLoaded((prev) => ({ ...prev, [id]: true }));
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      gsap.registerPlugin(ScrollTrigger);
    }

    // Gallery items animation
    if (galleryRef.current) {
      gsap.from(Array.from(galleryRef.current.children), {
        opacity: 0,
        y: 100,
        duration: 1,
        stagger: 0.1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: galleryRef.current,
          start: 'top center+=100',
          end: 'bottom center',
          toggleActions: 'play none none reverse',
        },
      });
    }

    // Cleanup
    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <section className={`gallery-grid ${className}`} ref={galleryRef}>
      {images.map((image) => (
        <div
          key={image.id}
          className="gallery-item"
          style={{
            background: !imagesLoaded[image.id] ? image.placeholder : 'none',
          }}
        >
          <img
            src={image.url}
            alt={`Gallery image ${image.id}`}
            className={`w-full h-full object-cover transition-opacity duration-500 ${
              imagesLoaded[image.id] ? 'opacity-100' : 'opacity-0'
            }`}
            loading="lazy"
            onLoad={() => handleImageLoad(image.id)}
          />
        </div>
      ))}
    </section>
  );
}
