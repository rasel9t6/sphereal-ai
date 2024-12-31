import { useMotionValue, useTransform } from 'motion/react';
import { useEffect } from 'react';

export default function useMousePosition() {
  const xMotionValue = useMotionValue(0);
  const yMotionValue = useMotionValue(0);

  const xProgress = useTransform(
    xMotionValue,
    [0, typeof window !== 'undefined' ? window.innerWidth : 1],
    [0, 1]
  );
  const yProgress = useTransform(
    yMotionValue,
    [0, typeof window !== 'undefined' ? window.innerHeight : 1],
    [0, 1]
  );

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const handleMouseMove = (event: MouseEvent) => {
      xMotionValue.set(event.clientX);
      yMotionValue.set(event.clientY);
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [xMotionValue, yMotionValue]);

  return { xProgress, yProgress };
}
