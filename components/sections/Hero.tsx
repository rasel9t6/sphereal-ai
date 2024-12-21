import Image from 'next/image';
import Button from '../Button';
import underLineImage from '../../public/images/underline.svg?url';
import Loader from '@/public/images/loader.svg';
import Orbit from '../Orbit';
import Planet from '../Planet';
export const Hero = () => {
  return (
    <section>
      <div className='container'>
        <div className='border-custom-1 border-x'>
          <div className='container relative isolate overflow-hidden py-24 text-center [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent)] md:py-36 lg:py-48'>
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
              <Orbit className='size-[350px]' />
              <Orbit className='size-[600px]' />
              <Orbit className='size-[850px]' />
              <Orbit className='size-[1100px]' />
              <Orbit className='size-[1350px]' />
            </div>
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
                      AI is generating<span>|</span>
                    </div>
                  </div>
                </div>
              </div>
              <Planet
                color='violate'
                className='translate-x-[-316px] translate-y-[-76px]'
              />
              <Planet
                color='violate'
                className='translate-x-[335px] translate-y-[-180px] rotate-225'
              />
              <Planet
                size='sm'
                color='fuchsia'
                className='translate-x-[-500px] translate-y-[-330px]'
              />
              <Planet
                size='md'
                color='teal'
                className='translate-x-[480px] translate-y-[-300px] rotate-225'
              />
              <div className='absolute left-0  top-[30%] z-10 hidden -translate-x-10 lg:block'>
                <div className='w-72 rounded-xl border border-gray-700 bg-gray-800/70 p-4 backdrop-blur-md'>
                  <div>
                    Can you generate an incredible frontend dev video tutorial?
                  </div>
                  <div className='text-right text-sm font-bold text-gray-400'>
                    1m ago
                  </div>
                </div>
              </div>
              <div className='absolute right-0  top-1/2 z-10 hidden translate-x-10 lg:block'>
                <div className='w-72 rounded-xl border border-gray-700 bg-gray-800/70 p-4 backdrop-blur-md'>
                  <div>
                    <strong>Brainwave:</strong> I created one based on videos
                    from wave.dev
                  </div>
                  <div className='text-right text-sm font-bold text-gray-400'>
                    just now
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
