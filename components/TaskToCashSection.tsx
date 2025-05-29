'use client';

import Image from 'next/image';
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const TaskCard = ({
  icon,
  task,
  reward,
}: {
  icon: string;
  task: string;
  reward: number;
}) => {
  return (
    <div className="bg-black/20 backdrop-blur-sm rounded-xl p-4 flex items-center gap-4 hover:bg-black/30 transition-colors cursor-pointer group">
      <div className="text-2xl text-blue-400">{icon}</div>
      <div className="flex-1">
        <p className="text-white font-medium">{task}</p>
        <p className="text-blue-400 text-sm">Reward: {reward} tokens</p>
      </div>
      <div className="text-blue-400 text-xl group-hover:translate-x-1 transition-transform">
        →
      </div>
    </div>
  );
};

const TaskToCashSection = () => {
  const imageRef = useRef<HTMLImageElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.to(imageRef.current, {
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top bottom',
        end: 'bottom top',
        scrub: 1,
      },
      scale: 1.2,
      ease: 'none',
    });
  }, []);

  const tasks = [
    {
      icon: '👤',
      task: 'Follow @CocaCola_GH',
      reward: 25,
    },
    {
      icon: '❤️',
      task: 'Like 3 posts by @MTNGhana',
      reward: 15,
    },
    {
      icon: '💬',
      task: "Comment on @KFCGhana's latest post",
      reward: 25,
    },
  ];

  return (
    <section className="py-[10em]">
      <div className="container max-w-6xl rounded-2xl mx-auto bg-blue-950 py-20">
        <div className="container mx-auto px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="flex justify-center items-center bg-gradient-to-br from-blue-900 to-blue-950 rounded-3xl overflow-hidden">
                <div
                  ref={containerRef}
                  className="h-[24em] w-[26em] overflow-hidden m-10 rounded-3xl"
                >
                  <Image
                    ref={imageRef}
                    alt=""
                    src={'/assets/scroll-to-cash.jpg'}
                    width={500}
                    height={500}
                    className="w-full h-full object-cover origin-center"
                  />
                </div>
              </div>
            </div>

            <div className="lg:pl-8">
              <h2 className="text-4xl font-bold mb-4">From Tasks to Cash</h2>
              <p className="text-xl text-white/80 mb-12">
                Turn your effort into earnings—redeem tokens for real money in
                minutes.
              </p>

              <div className="space-y-4">
                {tasks.map((task, index) => (
                  <TaskCard
                    key={index}
                    icon={task.icon}
                    task={task.task}
                    reward={task.reward}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TaskToCashSection;
