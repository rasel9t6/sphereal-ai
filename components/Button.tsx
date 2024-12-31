'use client';
import { cva } from 'class-variance-authority';
import React, { useEffect, useState } from 'react';
import { HTMLAttributes } from 'react';
import {
  animate,
  AnimationPlaybackControls,
  motion,
  useMotionTemplate,
  useMotionValue,
} from 'motion/react';

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
  const [isHovered, setIsHovered] = useState(false);
  const angle = useMotionValue(45);

  const background = useMotionTemplate`linear-gradient(var(--color-gray-950), var(--color-gray-950)) padding-box,
      conic-gradient(
          from ${angle}deg,
          var(--color-violet-400),
          var(--color-fuchsia-400),
          var(--color-amber-300),
          var(--color-teal-300),
          var(--color-violet-400)
        )
        border-box`;

  useEffect(() => {
    let controls: AnimationPlaybackControls | undefined;
    if (isHovered) {
      controls = animate(angle, angle.get() + 360, {
        duration: 1,
        ease: 'linear',
        repeat: Infinity,
      });
    } else {
      controls = animate(angle, 45, { duration: 0.5 });
    }
    return () => {
      if (controls) controls.stop(); // Cleanup to stop the animation
    };
  }, [isHovered, angle]);

  return (
    <motion.button
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={classes({ ...otherProps, className })}
      style={
        props.variant === 'primary' ? { background: background } : undefined
      }
    >
      {children}
    </motion.button>
  );
}
