import { cva } from 'class-variance-authority';
import React from 'react';
import { HTMLAttributes } from 'react';
export type ButtonProps = {
  variant?: 'primary' | 'secondary' | 'tertiary';
  block?: boolean;
} & HTMLAttributes<HTMLButtonElement>;
const classes = cva(
  'inline-block h-10 rounded-lg px-6 text-xs font-bold uppercase tracking-widest',
  {
    variants: {
      block: { true: 'w-full' },
      variant: {
        primary: 'border-gradient border-2',
        secondary: 'bg-gray-100 text-gray-950 hover:bg-gray-100',
        tertiary: 'bg-gray-800 text-gray-200',
      },
    },
    defaultVariants: {
      variant: 'primary',
      block: false,
    },
  }
);
export default function Button(props: ButtonProps) {
  const { className, children, ...otherProps } = props;
  return (
    <button className={classes({ ...otherProps, className })}>
      {children}
    </button>
  );
}
