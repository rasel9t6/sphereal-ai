import AcmeCorpLogo from '@/public/images/acme-corp-logo.svg';
import EchoValleyLogo from '@/public/images/echo-valley-logo.svg';
import QuantumLogo from '@/public/images/quantum-logo.svg';
import PulseLogo from '@/public/images/pulse-logo.svg';
import OutsideLogo from '@/public/images/outside-logo.svg';
import CelestialLogo from '@/public/images/celestial-logo.svg';

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
        <h2 className='text-center text-xs font-bold uppercase tracking-widest text-gray-500'>
          Empowering creators at leading companies
        </h2>
        <div className='-mx-4 mt-20 flex overflow-x-clip lg:-mx-8'>
          <div className='flex flex-none gap-18 px-18 md:gap-36'>
            {companies.map(({ logo: Logo, name }) => (
              <div key={name}>
                <Logo className='h-8' />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Companies;
