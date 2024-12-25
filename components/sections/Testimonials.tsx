import React from 'react';
import AshwinSantiago from '@/public/images/ashwin-santiago.jpg';
import AlecWhitten from '@/public/images/alec-whitten.jpg';
import ReneWells from '@/public/images/rene-wells.jpg';
import MollieHall from '@/public/images/mollie-hall.jpg';
import Plus from '../Plus';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons';

export const testimonials = [
  {
    quote:
      "Sphereal has completely transformed the way we collaborate. The AI chatbot's ability to automate tasks and provide insightful recommendations has saved us hours each week. It's now an indispensable part of our workflow.",
    name: 'Ashwin Santiago',
    title: 'Operations Manager',
    image: AshwinSantiago,
  },
  {
    quote:
      "Sphereal integrates effortlessly with our existing tools, and the AI chatbot feels like a natural extension of our team. The responses are impressively accurate, and it's always learning from our interactions.",
    name: 'Alec Whitten',
    title: 'Lead Developer',
    image: AlecWhitten,
  },
  {
    quote:
      "Sphereal's AI has elevated our customer service to a whole new level. Its real-time responses and personalized recommendations help us address client needs faster than ever. I can't imagine our support team without it.",
    name: 'Rene Wells',
    title: 'Customer Success Manager',
    image: ReneWells,
  },
  {
    quote:
      "I've never seen a tool like Sphereal. It's intuitive, responsive, and has helped us streamline projects that would normally take days. The AI capabilities are unmatched in terms of accuracy and speed.",
    name: 'Mollie Hall',
    title: 'Product Designer',
    image: MollieHall,
  },
];
const SELECTED_TESTIMONIAL_INDEX = 0;
export const Testimonials = () => {
  return (
    <section className='border-section relative !border-t'>
      <Plus />
      <div className='section-container'>
        <div className='border-gradient relative flex flex-col gap-12 rounded-3xl px-6 py-16 md:mx-10 md:flex-row md:items-center md:justify-between md:px-10 lg:mx-20 lg:px-16 lg:py-20'>
          <FontAwesomeIcon
            icon={faQuoteLeft}
            className='absolute left-6 top-0 size-20 -translate-y-1/2 text-violet-400 md:left-10 lg:left-16'
          />
          {testimonials.map((testimonial, index) => (
            <React.Fragment key={index}>
              {index === SELECTED_TESTIMONIAL_INDEX && (
                <blockquote className='flex flex-col gap-12 lg:flex-row'>
                  <p className='text-xl font-medium md:text-2xl'>
                    {testimonial.quote}
                  </p>
                  <cite className=' not-italic lg:text-right'>
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      className='size-28 max-w-none rounded-xl'
                    />
                    <p className='mt-4 font-bold'>{testimonial.name}</p>
                    <p className='mt-2 text-xs text-gray-400'>
                      {testimonial.title}
                    </p>
                  </cite>
                </blockquote>
              )}
            </React.Fragment>
          ))}
          <div className='flex  items-center justify-center gap-2 md:flex-col md:items-end '>
            {testimonials.map((_, index) => (
              <div
                key={index}
                className='relative isolate inline-flex size-6 cursor-pointer items-center justify-center'
              >
                {index === SELECTED_TESTIMONIAL_INDEX && (
                  <div className='border-gradient absolute -z-10 size-full rounded-full'></div>
                )}

                <div className='size-1.5 rounded-full bg-gray-200' />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
