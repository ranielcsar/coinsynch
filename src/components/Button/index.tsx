import { HTMLAttributes } from 'react'
import { twMerge } from 'tailwind-merge'

export function Button({
  children,
  className = '',
  ...props
}: HTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      className={twMerge(
        'inline-flex h-9 w-max items-center justify-center gap-2 rounded-[32px] bg-primary-500 px-4 py-2 text-white',
        className,
      )}
      {...props}
    >
      {children}
    </button>
  )
}
