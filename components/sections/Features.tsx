import slackLogo from '@/public/images/slack-logo.png';
import dockerLogo from '@/public/images/docker-logo.png';
import figmaLogo from '@/public/images/figma-logo.png';
import githubLogo from '@/public/images/github-logo.png';
import vsCodeLogo from '@/public/images/vs-code-logo.png';
import notionLogo from '@/public/images/notion-logo.png';
import jiraLogo from '@/public/images/jira-logo.png';
import gcpLogo from '@/public/images/gcp-logo.png';
import Button from '../Button';
import Orbit from '../Orbit';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import Plus from '../Plus';
import Logo from '../Logo';
import Image from 'next/image';
export const features = [
  'Effortless integration',
  'Intelligent automation',
  'Robust security',
];

export const logos = [
  {
    src: slackLogo,
    alt: 'slack logo',
    rotate: 0,
  },
  {
    src: dockerLogo,
    alt: 'docker logo',
    rotate: 45,
  },
  {
    src: figmaLogo,
    alt: 'figma logo',
    rotate: 90,
  },
  {
    src: githubLogo,
    alt: 'github logo',
    rotate: 135,
  },
  {
    src: vsCodeLogo,
    alt: 'vs code logo',
    rotate: 180,
  },
  {
    src: notionLogo,
    alt: 'notion logo',
    rotate: 225,
  },
  {
    src: jiraLogo,
    alt: 'jira logo',
    rotate: 270,
  },
  {
    src: gcpLogo,
    alt: 'gcp logo',
    rotate: 315,
  },
];

export const Features = () => {
  return (
    <section className='border-section relative !border-t'>
      <Plus />
      <div className='section-container '>
        <h2 className='text-3xl font-semibold text-gray-200'>
          Your AI-powered collaboration companion
        </h2>
        <ul className='mt-12 flex flex-col gap-8'>
          {features.map((feature, index) => (
            <li
              key={index}
              className='flex items-center gap-4'
            >
              <FontAwesomeIcon
                icon={faCircleCheck}
                className='size-6 text-violet-400'
              />
              <span className='text-xl font-medium'>{feature}</span>
            </li>
          ))}
        </ul>
        <Button
          variant='secondary'
          className='mt-16'
        >
          Try it now
        </Button>
        <div className='relative size-[270px]'>
          <Orbit className='size-[275px]' />
          <Orbit className='size-[180px]' />
          <div className='absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2'>
            <Logo className='size-24' />
          </div>
          {/* Circle logos */}
          {logos.map(({ src, alt, rotate }, index) => (
            <div
              key={index}
              className='absolute inset-0'
              style={{ transform: `rotate(${rotate}deg)` }}
            >
              <div
                className='border-custom-1 absolute left-0 top-1/2 inline-flex size-10 -translate-x-1/2 -translate-y-1/2 items-center justify-center border bg-gray-950'
                style={{
                  transform: `translate(-50%, -50%) rotate(-${rotate}deg)`,
                }}
              >
                <Image
                  src={src}
                  alt={alt}
                  className='size-6'
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
