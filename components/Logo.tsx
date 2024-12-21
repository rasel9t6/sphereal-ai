import logoImage from '@/public/images/sphereal-logo.svg?url';
import { twMerge } from 'tailwind-merge';
export default function Logo(props: React.HTMLAttributes<HTMLDivElement>) {
  const { className, style, ...otherProps } = props;
  return (
    <div
      className={twMerge(
        'size-10 bg-[conic-gradient(from_45deg,var(--color-violet-400),var(--color-fuchsia-400),var(--color-amber-300),var(--color-teal-300),var(--color-violet-400))]',
        className
      )}
      style={{
        maskImage: `url(${logoImage.src})`,
        maskSize: 'contain',
        ...style,
      }}
      {...otherProps}
    ></div>
  );
}
