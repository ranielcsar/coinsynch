import { HTMLAttributes } from 'react'

import { twMerge } from 'tailwind-merge'

export function Tag({ children, className = '', ...props }: HTMLAttributes<HTMLElement>) {
  return (
    <div
      className={twMerge(
        'inline-flex max-h-10 w-max items-center justify-center rounded bg-primary-100 px-4 py-1 text-base text-primary-500',
        className,
      )}
      {...props}
    >
      {children}
    </div>
  )
}
