import { cva } from 'class-variance-authority';

const classes = cva(
  ' rounded-full bg-gradient-to-b to-gray-950',
  {
    variants: {
      size: {
        sm: 'size-4',
        md: 'size-6',
        lg: 'size-8',
      },
      color: {
        violate: 'from-violet-400',
        teal: 'from-teal-400',
        fuchsia: 'from-fuchsia-400',
      },
    },
    defaultVariants: {
      size: 'lg',
      color: 'violate',
    },
  }
);
export default function Planet(
  props: {
    size?: 'sm' | 'md' | 'lg';
    color?: 'violate' | 'teal' | 'fuchsia';
  } & React.HTMLAttributes<HTMLDivElement>
) {
  return (
    <div
      className={classes({
        size: props.size,
        color: props.color,
        className: props.className,
      })}
    ></div>
  );
}
