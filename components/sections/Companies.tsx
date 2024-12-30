'use client';
import AcmeCorpLogo from '@/public/images/acme-corp-logo.svg';
import EchoValleyLogo from '@/public/images/echo-valley-logo.svg';
import QuantumLogo from '@/public/images/quantum-logo.svg';
import PulseLogo from '@/public/images/pulse-logo.svg';
import OutsideLogo from '@/public/images/outside-logo.svg';
import CelestialLogo from '@/public/images/celestial-logo.svg';
import { motion } from 'motion/react';

export const companies = [
  {
    name: 'Acme Corp',
    logo: AcmeCorpLogo,
  },
  {
    name: 'Echo Valley',
    logo: EchoValleyLogo,
  },
  {
    name: 'Quantum',
    logo: QuantumLogo,
  },
  {
    name: 'Pulse',
    logo: PulseLogo,
  },
  {
    name: 'Outside',
    logo: OutsideLogo,
  },
  {
    name: 'Celestial',
    logo: CelestialLogo,
  },
];

export const Companies = () => {
  return (
    <section className='border-section'>
      <div className='section-container !pt-0'>
        <h2 className='text-center text-xs font-bold uppercase tracking-widest text-gray-400/75'>
          Empowering creators at leading companies
        </h2>
        <div className='-mx-4 mt-20 flex overflow-x-clip lg:-mx-8'>
          <motion.div
            initial={{ x: 0 }}
            animate={{ x: '-50%' }}
            transition={{
              repeat: Infinity,
              ease: 'linear',
              duration: 30,
            }}
            className='flex flex-none gap-18 px-9 md:gap-36 md:px-18'
          >
            {[...companies, ...companies].map(({ logo: Logo }, index) => (
              <div key={index}>
                <Logo className='h-8' />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Companies;
