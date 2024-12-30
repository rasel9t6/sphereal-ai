'use client';
import { useEffect, useRef, useState } from 'react';
import {
  motion,
  useMotionValue,
  useScroll,
  useSpring,
  useTransform,
} from 'motion/react';

import Image from 'next/image';
import Button from '../Button';
import underLineImage from '../../public/images/underline.svg?url';
import Loader from '@/public/images/loader-animated.svg';
import Orbit from '../Orbit';
import Planet from '../Planet';

const useMousePosition = () => {
  const [mousePosition, setMousePosition] = useState<{ x: number; y: number }>({
    x: 0,
    y: 0,
  });

  const xMotionValue = useMotionValue(0);
  const yMotionValue = useMotionValue(0);

  const xProgress = useTransform(
    xMotionValue,
    [0, typeof window !== 'undefined' ? window.innerWidth : 1],
    [0, 1]
  );
  const yProgress = useTransform(
    yMotionValue,
    [0, typeof window !== 'undefined' ? window.innerHeight : 1],
    [0, 1]
  );

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const handleMouseMove = (event: MouseEvent) => {
      setMousePosition({ x: event.clientX, y: event.clientY });
      xMotionValue.set(event.clientX);
      yMotionValue.set(event.clientY);
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [xMotionValue, yMotionValue]);

  return { mousePosition, xProgress, yProgress };
};
export const Hero = () => {
  const sectionRef = useRef(null);
  const { xProgress, yProgress } = useMousePosition();
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['end start', 'start end'],
  });

  const transformedY = useTransform(scrollYProgress, [0, 1], [200, -200]);
  const springX = useSpring(xProgress);
  const springY = useSpring(yProgress);
  const translateLargeX = useTransform(springX, [0, 1], ['-25%', '25%']);
  const translateLargeY = useTransform(springY, [0, 1], ['-25%', '25%']);
  const translateMediumX = useTransform(springX, [0, 1], ['-50%', '50%']);
  const translateMediumY = useTransform(springY, [0, 1], ['-50%', '50%']);
  const translateSmallX = useTransform(springX, [0, 1], ['-200%', '200%']);
  const translateSmallY = useTransform(springY, [0, 1], ['-200%', '200%']);
  return (
    <section
      id='hero'
      ref={sectionRef}
    >
      <div className='container'>
        <div className='border-section'>
          <div className='section-container relative isolate  text-center [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent)] '>
            <div
              className='absolute inset-0 -z-10'
              style={{
                background:
                  'radial-gradient(circle farthest-corner, var(--color-fuchsia-900) 50%, var(--color-indigo-900) 75%, transparent)',
                maskImage:
                  'radial-gradient(circle farthest-corner, black, transparent)',
              }}
            ></div>
            <Orbit className='size-[350px]' />
            <Orbit className='size-[600px]' />
            <Orbit className='size-[850px]' />
            <Orbit className='size-[1100px]' />
            <Orbit className='size-[1350px]' />
            <h1 className='h1-semibold'>
              Unlock the future of AI Conversations with{' '}
              <span className='relative'>
                <span>Sphereal</span>
                <span
                  className='absolute left-0 top-full h-4 w-full -translate-y-1/2 bg-[linear-gradient(to_right,var(--color-amber-300),var(--color-teal-300),var(--color-violet-400),var(--color-fuchsia-400))]'
                  style={{
                    maskImage: `url(${underLineImage.src})`,
                    maskSize: 'contain',
                    maskPosition: 'center',
                    maskRepeat: 'no-repeat',
                  }}
                ></span>
              </span>
            </h1>
            <p className='mx-auto mt-8 max-w-3xl text-lg md:text-xl'>
              Sphereal is a platform for creating and deploying AI-powered
              conversational experiences that drive customer engagement and
              increase revenue.
            </p>
            <Button
              variant='secondary'
              className='mb-20 mt-10'
            >
              Start Chatting
            </Button>
            <div className='relative isolate mx-auto max-w-5xl'>
              <div className='border-gradient relative mx-auto max-w-full overflow-hidden rounded-2xl border-2'>
                <Image
                  src='/images/robot.jpg'
                  alt='Robot image'
                  width={1024}
                  height={800}
                  className=' rounded-2xl'
                />
                <div className='absolute bottom-2 left-1/2 w-full -translate-x-1/2 px-4 md:bottom-4 lg:bottom-10'>
                  <div className='mx-auto flex w-[320px] max-w-full items-center gap-4 rounded-2xl bg-gray-950/80 px-4 py-2 '>
                    <Loader className='text-violet-400' />
                    <div className='text-xl font-semibold text-gray-100'>
                      AI is generating
                      <span className='animate-cursor-blink'>|</span>
                    </div>
                  </div>
                </div>
              </div>
              <motion.div
                className='absolute left-1/2 top-0'
                style={{ x: translateLargeX, y: translateLargeY }}
              >
                <Planet
                  color='violate'
                  className='translate-x-[-316px] translate-y-[-76px] rotate-135'
                />
              </motion.div>
              <motion.div
                className='absolute left-1/2 top-0'
                style={{ x: translateLargeX, y: translateLargeY }}
              >
                <Planet
                  color='violate'
                  className='translate-x-[335px] translate-y-[-180px] rotate-225'
                />
              </motion.div>
              <motion.div
                className='absolute left-1/2 top-0'
                style={{ x: translateSmallX, y: translateSmallY }}
              >
                <Planet
                  size='sm'
                  color='fuchsia'
                  className='translate-x-[-500px] translate-y-[-330px] rotate-135'
                />
              </motion.div>
              <motion.div
                className='absolute left-1/2 top-0'
                style={{ x: translateMediumX, y: translateMediumY }}
              >
                <Planet
                  size='md'
                  color='teal'
                  className='translate-x-[480px] translate-y-[-300px] rotate-225'
                />
              </motion.div>
              <div className='absolute left-0  top-[30%] z-10 hidden -translate-x-10 lg:block'>
                <motion.div
                  className='w-72 rounded-xl border border-gray-700 bg-gray-800/70 p-4 backdrop-blur-md'
                  style={{ y: transformedY }}
                >
                  <div>
                    Can you generate an incredible frontend dev video tutorial?
                  </div>
                  <div className='text-right text-sm font-bold text-gray-400'>
                    1m ago
                  </div>
                </motion.div>
              </div>
              <div className='absolute right-0  top-1/2 z-10 hidden translate-x-10 lg:block'>
                <motion.div
                  className='w-72 rounded-xl border border-gray-700 bg-gray-800/70 p-4 backdrop-blur-md'
                  style={{ y: transformedY }}
                >
                  <div>
                    <strong>Brainwave:</strong> I created one based on videos
                    from wave.dev
                  </div>
                  <div className='text-right text-sm font-bold text-gray-400'>
                    just now
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
