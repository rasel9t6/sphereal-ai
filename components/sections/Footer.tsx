'use client';
import React from 'react';
import {
  faDiscord,
  faLinkedin,
  faGithub,
} from '@fortawesome/free-brands-svg-icons';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

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
  {
    name: 'Contact',
    href: '#hero',
  },
];

export const socialLinks = [
  {
    name: 'Linkedin',
    icon: faLinkedin,
    href: 'https://www.linkedin.com/in/rasel-9t6/',
  },
  {
    name: 'Github',
    icon: faGithub,
    href: 'https://github.com/rasel9t6',
  },
  {
    name: 'Discord',
    icon: faDiscord,
    href: 'https://discord.gg/ZfQrUHRj',
  },
];

export default function Footer() {
  return (
    <footer className='border-custom-1 border-t'>
      <div className='footer-container'>
        <div className='flex flex-col items-center gap-8 lg:flex-row lg:justify-between'>
          <p className='text-2xl font-extrabold'>sphereal.ai</p>
          <nav className='flex flex-col items-center gap-8 md:flex-row md:gap-16'>
            {navItems.map((item, index) => (
              <Link
                href={item.href}
                key={index}
                className='text-xs font-bold uppercase tracking-widest text-gray-400'
                onClick={(e) => {
                  e.preventDefault();
                  const element = document.querySelector(item.href);
                  if (element) element.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                {item.name}
              </Link>
            ))}
          </nav>
        </div>
        <div className='mt-16 flex flex-col items-center gap-8 md:flex-row-reverse md:justify-between'>
          <div className='flex justify-center gap-6'>
            {socialLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
              >
                <div className='inline-flex size-10 items-center justify-center rounded-full bg-gray-900'>
                  <FontAwesomeIcon
                    icon={link.icon}
                    className='size-4'
                  />
                </div>
              </Link>
            ))}
          </div>
          <p className='text-sm text-gray-400/80'>
            &copy; Spherael.ai, all rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
}
