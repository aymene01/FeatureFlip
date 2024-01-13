import * as React from 'react'
import { forwardRef } from 'react'
import { VariantProps } from 'class-variance-authority'
import { variants } from './styles'

type BadgeProps = {
  children: React.ReactNode
} & VariantProps<typeof variants>

export const Badge = forwardRef<HTMLDivElement, BadgeProps>(
  ({ children, variant, color, ...rest }: BadgeProps, ref) => {
    const style = variants({ variant, color })

    return (
      <div {...rest} ref={ref} className={style}>
        {children}
      </div>
    )
  },
)

Badge.displayName = 'Badge'
