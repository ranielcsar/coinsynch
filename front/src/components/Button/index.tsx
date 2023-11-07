import { ButtonHTMLAttributes, DetailedHTMLProps } from 'react'

import { twMerge } from 'tailwind-merge'

export function Button({
  ...props
}: DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, any>) {
  const className = props.className

  return (
    <button
      type="button"
      {...props}
      className={twMerge(
        'inline-flex max-h-[2.25rem] w-max items-center justify-center gap-2 rounded-[32px] bg-primary-500 px-6 py-2 text-white disabled:bg-primary-300 md:py-6 md:text-base',
        className,
      )}
    />
  )
}
