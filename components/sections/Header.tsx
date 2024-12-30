'use client';
import Link from 'next/link';
import Button, { ButtonProps } from '../Button';
import { useState } from 'react';
import { twMerge } from 'tailwind-merge';
import Orbit from '../Orbit';
import Logo from '../Logo';
export const navItems = [
  {
    name: 'Features',
    href: '#features',
  },
  {
    name: 'Pricing',
    href: '#pricing',
  },
  {
    name: 'Testimonials',
    href: '#testimonials',
  },
];

export const loginItems = [
  {
    buttonVariant: 'tertiary',
    name: 'Login',
    href: '#login',
  },
  {
    buttonVariant: 'primary',
    name: 'Sign Up',
    href: '#sign-up',
  },
] satisfies {
  name: string;
  href: string;
  buttonVariant: ButtonProps['variant'];
}[];

export const Header = () => {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const handleClick = () => setIsMobileNavOpen((prev) => !prev);
  return (
    <>
      <header className='border-custom-1 relative  z-40 border-b bg-gray-950'>
        <div className='container'>
          <div className='flex  h-18 items-center justify-between lg:h-20'>
            <div className='flex  items-center gap-4'>
              <Logo />
              <div className='text-2xl font-extrabold text-[var(--color-violate-400)]'>
                sphereal.ai
              </div>
            </div>
            <div className='hidden h-full gap-4 lg:flex'>
              <nav className='h-full'>
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className='relative inline-flex h-full items-center px-10 text-xs font-bold uppercase tracking-wider text-gray-400 before:absolute before:bottom-0 before:left-0 before:h-2 before:w-px before:bg-gray-200/20 before:content-[""] last:after:absolute last:after:bottom-0 last:after:right-0 last:after:h-2 last:after:w-px last:after:bg-gray-200/20 last:after:content-[""]'
                    onClick={(e) => {
                      e.preventDefault();
                      setIsMobileNavOpen(false);
                      const element = document.querySelector(item.href);
                      if (element)
                        element.scrollIntoView({ behavior: 'smooth' });
                    }}
                  >
                    {item.name}
                  </Link>
                ))}
              </nav>
            </div>
            <div className='hidden gap-4 lg:flex'>
              {loginItems.map(({ name, href, buttonVariant }) => (
                <Link
                  href={href}
                  key={name}
                >
                  <Button variant={buttonVariant}>{name}</Button>
                </Link>
              ))}
            </div>

            <div className='flex items-center lg:hidden'>
              <button
                onClick={handleClick}
                className='border-gradient relative size-10 rounded-lg'
              >
                <div className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 '>
                  <div
                    className={twMerge(
                      'h-0.5 w-4 -translate-y-1 bg-gray-100 transition-all duration-300 ease-in-out',
                      isMobileNavOpen && 'translate-y-0 rotate-135 '
                    )}
                  ></div>
                </div>
                <div className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 '>
                  <div
                    className={twMerge(
                      'h-0.5 w-4 translate-y-1 bg-gray-100 transition duration-300 ease-in-out',
                      isMobileNavOpen && 'translate-y-0 -rotate-135'
                    )}
                  ></div>
                </div>
              </button>
            </div>
          </div>
        </div>
      </header>
      {isMobileNavOpen && (
        <div className='fixed inset-0 z-30 h-full overflow-hidden bg-gray-950 lg:hidden'>
          <Orbit />
          <Orbit className='size-[350px]' />
          <Orbit className='size-[500px]' />
          <Orbit className='size-[650px]' />
          <Orbit className='size-[800px]' />

          <div className='container h-full'>
            <nav className='flex h-full flex-col items-center justify-center gap-4 py-8'>
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className='h-10 text-xs font-bold uppercase tracking-widest text-gray-400'
                  onClick={(e) => {
                    e.preventDefault();
                    setIsMobileNavOpen(false);
                    const element = document.querySelector(item.href);
                    if (element) element.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  {item.name}
                </Link>
              ))}
              {loginItems.map(({ name, href, buttonVariant }) => (
                <Link
                  href={href}
                  key={name}
                  className='w-full max-w-xs'
                >
                  <Button
                    block
                    variant={buttonVariant}
                  >
                    {name}
                  </Button>
                </Link>
              ))}
            </nav>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
