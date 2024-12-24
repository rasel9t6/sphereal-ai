import { twMerge } from 'tailwind-merge';
import Button, { ButtonProps } from '../Button';
import Plus from '../Plus';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

export const pricingTiers = [
  {
    title: 'Basic',
    description: 'AI chatbot, personalized recommendations',
    price: 'Free',
    buttonText: 'Get Started',
    buttonVariant: 'secondary',
    features: [
      'Access to AI chatbot for natural language conversations',
      'Basic task automation for simple workflows',
      'Limited message history storage',
    ],
    color: 'amber',
    className: 'lg:py-12 lg:my-6',
  },
  {
    title: 'Premium',
    description: 'Advanced AI capabilities for enhanced productivity',
    price: 99,
    buttonText: 'Upgrade to Premium',
    buttonVariant: 'secondary',
    features: [
      'All Basic features included',
      'Priority access to new AI features and updates',
      'Advanced automation tools for seamless task management',
      'Customizable chat templates for your specific workflows',
    ],
    color: 'violet',
    className: 'lg:py-18 lg:my-0',
  },
  {
    title: 'Enterprise',
    description: 'Custom AI chatbot, advanced analytics, dedicated account',
    price: null,
    buttonText: 'Contact Us',
    buttonVariant: 'primary',
    features: [
      'All Premium features included',
      'Dedicated account manager and priority customer support',
      'Enhanced security and compliance features for large teams',
      "Custom AI models tailored to your organization's needs",
      'API access for seamless integration with enterprise systems',
    ],
    color: 'teal',
    className: 'lg:py-12 lg:my-6',
  },
] satisfies {
  title: string;
  description: string;
  price: string | number | null;
  buttonText: string;
  features: string[];
  buttonVariant?: ButtonProps['variant'];
  className: string;
  color: 'amber' | 'violet' | 'teal';
}[];

export const Pricing = () => {
  return (
    <section className='border-section relative !border-t'>
      <Plus />
      <div className='section-container'>
        <h2 className='h2-semibold text-center'>
          Flexible plans for every need
        </h2>
        <div className='mt-12 flex flex-col gap-8 lg:flex-row lg:items-start'>
          {pricingTiers.map((tier) => (
            <div
              key={tier.title}
              className={twMerge(
                'border-custom-1 mx-auto flex-1 max-w-sm rounded-3xl border px-6 py-12',
                tier.className
              )}
            >
              <h3
                className={twMerge(
                  'font-semibold text text-4xl',
                  tier.color === 'amber' && 'text-amber-500',
                  tier.color === 'violet' && 'text-violet-500',
                  tier.color === 'teal' && 'text-teal-500'
                )}
              >
                {tier.title}
              </h3>
              <p className='mt-4 text-gray-400'>{tier.description}</p>
              <div className='mt-8 font-semibold text-gray-200'>
                {typeof tier.price === 'number' && (
                  <span className='align-top text-2xl '>$</span>
                )}
                <span className='text-7xl'>
                  {tier.price ? tier.price : <>&nbsp;</>}
                </span>
              </div>
              <Button
                className='mt-8'
                block
                variant={tier.buttonVariant}
              >
                {tier.buttonText}
              </Button>
              <ul className='mt-8 space-y-4'>
                {tier.features.map((feature) => (
                  <li
                    key={feature}
                    className='border-custom-1 flex gap-4 border-t pt-4'
                  >
                    <FontAwesomeIcon
                      icon={faCheckCircle}
                      className='size-6 shrink-0 text-violet-400'
                    />
                    <span className='font-medium'>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
