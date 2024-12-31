'use client';
import useMousePosition from '@/hooks/useMousePosition';
import { motion,  useTransform, useSpring } from 'motion/react';
import underLineImage from '../../public/images/underline.svg?url';
import Button from '../Button';
import Orbit from '../Orbit';
import Planet from '../Planet';
import Plus from '../Plus';

export const CallToAction = () => {
  const { xProgress, yProgress } = useMousePosition();

  const springX = useSpring(xProgress);
  const springY = useSpring(yProgress);
  const translateLargeX = useTransform(springX, [0, 1], ['-25%', '25%']);
  const translateLargeY = useTransform(springY, [0, 1], ['-25%', '25%']);
  const translateMediumX = useTransform(springX, [0, 1], ['-50%', '50%']);
  const translateMediumY = useTransform(springY, [0, 1], ['-50%', '50%']);
  const translateSmallX = useTransform(springX, [0, 1], ['-200%', '200%']);
  const translateSmallY = useTransform(springY, [0, 1], ['-200%', '200%']);
  return (
    <section className='border-section relative  !border-t'>
      <Plus />
      <div className='section-container relative isolate  overflow-hidden text-center'>
        <div
          className='absolute inset-0 -z-10'
          style={{
            background:
              'radial-gradient(circle farthest-corner, var(--color-fuchsia-900) 50%, var(--color-indigo-900) 75%, transparent)',
            maskImage:
              'radial-gradient(circle farthest-corner, black, transparent)',
          }}
        ></div>
        <div className='absolute inset-0 -z-10'>
          <Orbit className='size-[200px]' />
          <Orbit className='size-[350px]' />
          <Orbit className='size-[500px]' />
          <Orbit className='size-[650px]' />
          <Orbit className='size-[800px]' />
        </div>
        <div className='absolute-center -z-10'>
          <motion.div
            className='absolute left-1/2 top-0'
            style={{ x: translateLargeX, y: translateLargeY }}
          >
            <Planet className='translate-x-[-200px] translate-y-[200px] rotate-45' />
            <Planet className='translate-x-[200px] translate-y-[-200px] -rotate-135' />
          </motion.div>

          <motion.div
            className='absolute left-1/2 top-0'
            style={{ x: translateMediumX, y: translateMediumY }}
          >
            <Planet
              size='md'
              color='teal'
              className='translate-x-[-500px] rotate-90'
            />
            <Planet
              size='md'
              color='teal'
              className='translate-x-[500px] translate-y-[-100px] -rotate-135'
            />
          </motion.div>
          <motion.div
            className='absolute left-1/2 top-0'
            style={{ x: translateSmallX, y: translateSmallY }}
          >
            <Planet
              size='sm'
              color='fuchsia'
              className='translate-x-[-400px] translate-y-[-250px] rotate-135'
            />
            <Planet
              size='sm'
              color='fuchsia'
              className='translate-x-[400px] translate-y-[150px] -rotate-45'
            />
          </motion.div>
        </div>
        <h2 className='h2-semibold mx-auto max-w-3xl'>
          Join the AI Revolution with{' '}
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
        </h2>
        <p className='mx-auto mt-8 max-w-2xl text-center text-xl'>
          Experience the power of AI with Sphereal. Boost your productivity and
          streamline your workflow with our innovative AI-powered chat platform.
        </p>
        <div className='mt-10 flex justify-center'>
          <Button variant='secondary'>Get Started</Button>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
