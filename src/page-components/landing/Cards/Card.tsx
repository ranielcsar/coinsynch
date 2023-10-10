import { ElementType } from 'react'

import { twMerge } from 'tailwind-merge'

type CardProps = {
  icon: ElementType
  className?: string
}

export function Card({ className = '', icon: Icon }: CardProps) {
  return (
    <article
      className={twMerge(
        'flex h-72 w-[95%] flex-col gap-5 rounded-md border border-secondary-100 bg-white p-5 shadow-md md:w-full md:shadow-lg',
        className,
      )}
    >
      <div className="h-16 w-max self-start">
        <Icon />
      </div>

      <hgroup>
        <h6 className="font-bold text-primary-500">For your company</h6>
        <h4 className="font-bold">Crypto Solutions</h4>
      </hgroup>

      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam</p>
    </article>
  )
}
