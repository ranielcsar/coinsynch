import { HTMLAttributes } from 'react'

import { twMerge } from 'tailwind-merge'

export function Button({ className = '', ...props }: HTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      className={twMerge(
        'inline-flex max-h-[2.25rem] w-max items-center justify-center gap-2 rounded-[32px] bg-primary-500 px-6 py-2 text-white',
        className,
      )}
      {...props}
    />
  )
}
