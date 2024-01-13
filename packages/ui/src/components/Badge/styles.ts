import { cva } from 'class-variance-authority'

export const variants = cva(
  'inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2',
  {
    variants: {
      variant: {
        default: 'border-transparent bg-primary text-primary-foreground shadow hover:bg-primary/80',
        destructive: 'border-transparent bg-destructive text-destructive-foreground shadow hover:bg-destructive/80',
        outline: 'text-foreground',
      },
      color: {
        danger: 'bg-red-500 text-white hover:bg-red-700',
        green: 'bg-green-500 text-white hover:bg-green-600',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  },
)
