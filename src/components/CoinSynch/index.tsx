import { HTMLAttributes } from 'react'

import { twMerge } from 'tailwind-merge'

export function CoinSynch({ className, ...props }: HTMLAttributes<HTMLElement>) {
  return (
    <strong className={twMerge('text-2xl text-secondary-500', className)} {...props}>
      <span className="text-primary-500">Coin</span>Synch
    </strong>
  )
}
